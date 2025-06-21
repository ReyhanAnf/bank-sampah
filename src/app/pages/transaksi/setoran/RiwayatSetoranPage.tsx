import React, { useState, useEffect } from 'react';
import { MetronicTable } from '../../../components/MetronicTable';
import { riwayatSetoranColumns, Setoran } from './riwayatSetoranColumns';
import { KTCard } from '../../../../_metronic/helpers/components/KTCard';
import { KTIcon } from '../../../../_metronic/helpers';
import { MenuComponent } from '../../../../_metronic/assets/ts/components';

const initialData: Setoran[] = [
  { id: 1, tanggal: '2024-06-01', nasabah: 'Budi', jenis: 'Plastik', berat: '5 kg', nilai: 'Rp 50.000', status: 'Diverifikasi' },
  { id: 2, tanggal: '2024-06-02', nasabah: 'Siti', jenis: 'Kertas', berat: '3 kg', nilai: 'Rp 30.000', status: 'Belum Diverifikasi' },
  { id: 3, tanggal: '2024-06-03', nasabah: 'Ahmad', jenis: 'Botol', berat: '2 kg', nilai: 'Rp 20.000', status: 'Diverifikasi' },
  { id: 4, tanggal: '2024-06-04', nasabah: 'Rina', jenis: 'Kardus', berat: '4 kg', nilai: 'Rp 40.000', status: 'Belum Diverifikasi' },
];

const RiwayatSetoranPage = () => {
  const [data, setData] = useState<Setoran[]>(initialData);
  const [filter, setFilter] = useState({ nasabah: '', status: '' });
  const [filterState, setFilterState] = useState({ nasabah: '', status: '' });

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
    setFilterState({ nasabah: '', status: '' });
    setFilter({ nasabah: '', status: '' });
  };

  const filteredData = data.filter(row =>
    row.nasabah.toLowerCase().includes(filter.nasabah.toLowerCase()) &&
    row.status.toLowerCase().includes(filter.status.toLowerCase())
  );

  const handleExport = () => {
    const headers = riwayatSetoranColumns.map(c => c.Header).join(',');
    const rows = filteredData.map(row => 
        riwayatSetoranColumns.map(col => (row as any)[col.accessor as string]).join(',')
    );
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'riwayat-setoran.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='container-fluid py-10 px-10'>
      <h1 className='mb-4'>Riwayat Setoran</h1>
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
                                    name='nasabah'
                                    value={filterState.nasabah}
                                    onChange={handleFilterChange}
                                    placeholder='Cari Nama...'
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
                                    <option value='Belum Diverifikasi'>Belum Diverifikasi</option>
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
          <MetronicTable columns={riwayatSetoranColumns} data={filteredData} />
        </div>
      </KTCard>
    </div>
  );
};

export default RiwayatSetoranPage; 