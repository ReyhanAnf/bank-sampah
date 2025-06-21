import React, { useState, useEffect } from 'react';
import { MetronicTable } from '../../components/MetronicTable';
import { laporanNasabahColumns, LaporanNasabah } from './laporanNasabahColumns';
import { KTCard } from '../../../_metronic/helpers/components/KTCard';
import { KTIcon } from '../../../_metronic/helpers';
import { MenuComponent } from '../../../_metronic/assets/ts/components';

const initialData: LaporanNasabah[] = [
    { id: 1, nama: 'Budi Santoso', alamat: 'Jl. Merdeka No. 10', telepon: '081234567890', saldo: 150000, statusKeanggotaan: 'Aktif' },
    { id: 2, nama: 'Siti Aminah', alamat: 'Jl. Pahlawan No. 20', telepon: '081234567891', saldo: 250000, statusKeanggotaan: 'Aktif' },
    { id: 3, nama: 'Andi Wijaya', alamat: 'Jl. Sudirman No. 30', telepon: '081234567892', saldo: 0, statusKeanggotaan: 'Tidak Aktif' },
];

const LaporanNasabahPage = () => {
  const [data, setData] = useState<LaporanNasabah[]>(initialData);
  const [filter, setFilter] = useState({ nama: '', statusKeanggotaan: '' });
  const [filterState, setFilterState] = useState({ nama: '', statusKeanggotaan: '' });

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilterState({ ...filterState, [e.target.name]: e.target.value });
  };

  const handleApplyFilter = () => {
    setFilter(filterState);
  };
  
  const handleResetFilter = () => {
    setFilterState({ nama: '', statusKeanggotaan: '' });
    setFilter({ nama: '', statusKeanggotaan: '' });
  };

  const filteredData = data.filter(row =>
    row.nama.toLowerCase().includes(filter.nama.toLowerCase()) &&
    (filter.statusKeanggotaan === '' || row.statusKeanggotaan === filter.statusKeanggotaan)
  );

  const handleExport = () => {
    const headers = laporanNasabahColumns.map((c: any) => c.Header).join(',');
    const rows = filteredData.map((row: LaporanNasabah) => 
        laporanNasabahColumns.map((col: any) => (row as any)[col.accessor as string]).join(',')
    );
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'laporan-nasabah.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='container-fluid py-10 px-10'>
      <h1 className='mb-4'>Laporan Nasabah</h1>
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
                                <label className='form-label fs-6 fw-bold'>Nama:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='nama'
                                    value={filterState.nama}
                                    onChange={handleFilterChange}
                                    placeholder='Cari Nama...'
                                />
                            </div>
                            <div className='mb-10'>
                                <label className='form-label fs-6 fw-bold'>Status Keanggotaan:</label>
                                <select
                                    className='form-select'
                                    name='statusKeanggotaan'
                                    value={filterState.statusKeanggotaan}
                                    onChange={handleFilterChange}
                                >
                                    <option value=''>Semua</option>
                                    <option value='Aktif'>Aktif</option>
                                    <option value='Tidak Aktif'>Tidak Aktif</option>
                                </select>
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
          <MetronicTable columns={laporanNasabahColumns} data={filteredData} />
        </div>
      </KTCard>
    </div>
  );
};

export default LaporanNasabahPage; 