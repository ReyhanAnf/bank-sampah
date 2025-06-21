import React, { useState, useEffect } from 'react';
import { MetronicTable } from '../../components/MetronicTable';
import { laporanLimbahKacaColumns, LaporanLimbahKaca } from './laporanLimbahKacaColumns';
import { KTCard } from '../../../_metronic/helpers/components/KTCard';
import { KTIcon } from '../../../_metronic/helpers';
import { MenuComponent } from '../../../_metronic/assets/ts/components';

const initialData: LaporanLimbahKaca[] = [
    { id: 1, tanggal: '2024-06-01', jenis: 'Botol Bening', berat: 50, sumber: 'Setoran Nasabah' },
    { id: 2, tanggal: '2024-06-02', jenis: 'Kaca Jendela', berat: 25, sumber: 'Pembelian' },
];

const LaporanLimbahKacaPage = () => {
  const [data] = useState<LaporanLimbahKaca[]>(initialData);
  const [filter, setFilter] = useState({ jenis: '', tanggal: '' });
  const [filterState, setFilterState] = useState({ jenis: '', tanggal: '' });

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterState({ ...filterState, [e.target.name]: e.target.value });
  };

  const handleApplyFilter = () => {
    setFilter(filterState);
  };
  
  const handleResetFilter = () => {
    setFilterState({ jenis: '', tanggal: '' });
    setFilter({ jenis: '', tanggal: '' });
  };

  const filteredData = data.filter(row =>
    row.jenis.toLowerCase().includes(filter.jenis.toLowerCase()) &&
    (filter.tanggal === '' || row.tanggal === filter.tanggal)
  );

  const handleExport = () => {
    const headers = laporanLimbahKacaColumns.map((c: any) => c.Header).join(',');
    const rows = filteredData.map((row: LaporanLimbahKaca) => 
        laporanLimbahKacaColumns.map((col: any) => (row as any)[col.accessor as string]).join(',')
    );
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'laporan-limbah-kaca.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='container-fluid py-10 px-10'>
      <h1 className='mb-4'>Laporan Limbah Kaca</h1>
      <KTCard>
        <div className='card-header border-0 pt-6'>
            <div className='card-title'>
            </div>
            {/* begin::Card toolbar */}
            <div className='card-toolbar'>
                <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
                    {/* begin::Filter */}
                    <button
                        type='button'
                        className='btn btn-light-primary me-3'
                        data-kt-menu-trigger='click'
                        data-kt-menu-placement='bottom-end'
                    >
                        <KTIcon iconName='filter' className='fs-2' />
                        Filter
                    </button>
                    {/* end::Filter */}
                    {/* begin::Menu */}
                    <div className='menu menu-sub menu-sub-dropdown w-300px w-md-325px' data-kt-menu='true'>
                        <div className='px-7 py-5'>
                            <div className='fs-5 text-gray-900 fw-bolder'>Filter Options</div>
                        </div>
                        <div className='separator border-gray-200'></div>
                        <div className='px-7 py-5'>
                            <div className='mb-10'>
                                <label className='form-label fs-6 fw-bold'>Jenis Kaca:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='jenis'
                                    value={filterState.jenis}
                                    onChange={handleFilterChange}
                                    placeholder='Cari Jenis...'
                                />
                            </div>
                            <div className='mb-10'>
                                <label className='form-label fs-6 fw-bold'>Tanggal:</label>
                                <input
                                    type='date'
                                    className='form-control'
                                    name='tanggal'
                                    value={filterState.tanggal}
                                    onChange={handleFilterChange}
                                />
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button type='button' onClick={handleResetFilter} className='btn btn-light btn-active-light-primary fw-bold me-2 px-6'>
                                    Reset
                                </button>
                                <button type='button' onClick={handleApplyFilter} className='btn btn-primary fw-bold px-6' data-kt-menu-dismiss='true'>
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* end::Menu */}
                    
                    {/* begin::Export */}
                    <button type='button' className='btn btn-light-primary me-3' onClick={handleExport}>
                        <KTIcon iconName='exit-up' className='fs-2' />
                        Export
                    </button>
                    {/* end::Export */}
                </div>
            </div>
            {/* end::Card toolbar */}
        </div>
        <div className='card-body'>
          <MetronicTable columns={laporanLimbahKacaColumns} data={filteredData} />
        </div>
      </KTCard>
    </div>
  );
};

export default LaporanLimbahKacaPage; 