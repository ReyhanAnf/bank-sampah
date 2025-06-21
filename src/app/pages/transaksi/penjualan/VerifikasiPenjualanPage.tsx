import React, { useState, useEffect } from 'react';
import { MetronicTable } from '../../../components/MetronicTable';
import { verifikasiPenjualanColumns, Penjualan } from './verifikasiPenjualanColumns';
import { KTCard } from '../../../../_metronic/helpers/components/KTCard';
import { KTIcon } from '../../../../_metronic/helpers';
import { MenuComponent } from '../../../../_metronic/assets/ts/components';

const initialData: Penjualan[] = [
    { id: 1, tanggal: '2024-06-01', namaBarang: '', jumlah: 0, harga: 0, pembeli: 'PT. Kaca Jaya', total: 1200000, status: 'Menunggu' },
    { id: 2, tanggal: '2024-06-02', namaBarang: '', jumlah: 0, harga: 0, pembeli: 'CV. Warna Abadi', total: 700000, status: 'Diverifikasi' },
];

const VerifikasiPenjualanPage = () => {
  const [data, setData] = useState<Penjualan[]>(initialData);
  const [filter, setFilter] = useState({ pembeli: '', status: '' });
  const [filterState, setFilterState] = useState({ pembeli: '', status: '' });

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
    setFilterState({ pembeli: '', status: '' });
    setFilter({ pembeli: '', status: '' });
  };

  const filteredData = data.filter(row =>
    row.pembeli.toLowerCase().includes(filter.pembeli.toLowerCase()) &&
    (filter.status === '' || row.status === filter.status)
  );

  const handleExport = () => {
    const headers = verifikasiPenjualanColumns.map((c: any) => c.Header).join(',');
    const rows = filteredData.map((row: Penjualan) => 
        verifikasiPenjualanColumns.map((col: any) => (row as any)[col.accessor as string]).join(',')
    );
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'verifikasi-penjualan.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='container-fluid py-10 px-10'>
      <h1 className='mb-4'>Verifikasi Penjualan</h1>
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
                                <label className='form-label fs-6 fw-bold'>Pembeli:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='pembeli'
                                    value={filterState.pembeli}
                                    onChange={handleFilterChange}
                                    placeholder='Cari Pembeli...'
                                />
                            </div>
                            <div className='mb-10'>
                                <label className='form-label fs-6 fw-bold'>Status:</label>
                                <select
                                    className='form-select'
                                    name='status'
                                    value={filterState.status}
                                    onChange={handleFilterChange}
                                >
                                    <option value=''>Semua Status</option>
                                    <option value='Diverifikasi'>Diverifikasi</option>
                                    <option value='Menunggu'>Menunggu</option>
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
          <MetronicTable columns={verifikasiPenjualanColumns} data={filteredData} />
        </div>
      </KTCard>
    </div>
  );
};

export default VerifikasiPenjualanPage; 