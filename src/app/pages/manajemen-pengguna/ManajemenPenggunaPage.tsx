import React, { useState, useEffect } from 'react';
import { MetronicTable } from '../../components/MetronicTable';
import { manajemenPenggunaColumns, Pengguna } from './manajemenPenggunaColumns';
import { KTCard } from '../../../_metronic/helpers/components/KTCard';
import { KTIcon } from '../../../_metronic/helpers';
import { MenuComponent } from '../../../_metronic/assets/ts/components';

const initialData: Pengguna[] = [
  { id: 1, nama: 'Budi Santoso', username: 'budi', role: 'Operator', status: 'Aktif' },
  { id: 2, nama: 'Siti Aminah', username: 'siti', role: 'Bendahara', status: 'Aktif' },
];

const ManajemenPenggunaPage = () => {
  const [data, setData] = useState<Pengguna[]>(initialData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<Pengguna>({ id: 0, nama: '', username: '', role: 'Operator', status: 'Aktif' });
  const [filter, setFilter] = useState({ nama: '', role: '' });
  const [filterState, setFilterState] = useState({ nama: '', role: '' });

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilterState({ ...filterState, [e.target.name]: e.target.value });
  };

  const handleApplyFilter = () => {
    setFilter(filterState);
  };
  
  const handleResetFilter = () => {
    setFilterState({ nama: '', role: '' });
    setFilter({ nama: '', role: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData([...data, form]);
    setForm({ id: 0, nama: '', username: '', role: 'Operator', status: 'Aktif' });
    setShowModal(false);
  };

  const filteredData = data.filter(row =>
    row.nama.toLowerCase().includes(filter.nama.toLowerCase()) &&
    row.role.toLowerCase().includes(filter.role.toLowerCase())
  );

  const handleExport = () => {
    const headers = manajemenPenggunaColumns.map(c => c.Header).join(',');
    const rows = filteredData.map(row => 
        manajemenPenggunaColumns.map(col => (row as any)[col.accessor as string]).join(',')
    );
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'manajemen-pengguna.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='container-fluid py-10 px-10'>
      <h1 className='mb-4'>Manajemen Pengguna</h1>
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
                                <label className='form-label fs-6 fw-bold'>Role:</label>
                                <select
                                    className='form-select'
                                    name='role'
                                    value={filterState.role}
                                    onChange={handleFilterChange}
                                >
                                    <option value=''>Semua Role</option>
                                    <option value='Operator'>Operator</option>
                                    <option value='Bendahara'>Bendahara</option>
                                    <option value='Direktur'>Direktur</option>
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

                    {/* begin::Add */}
                    <button className='btn btn-primary' onClick={() => setShowModal(true)}>
                        <KTIcon iconName='plus' className='fs-2' />
                        Tambah Pengguna
                    </button>
                    {/* end::Add */}
                </div>
            </div>
            {/* end::Card toolbar */}
        </div>
        <div className='card-body'>
          <MetronicTable columns={manajemenPenggunaColumns} data={filteredData} emptyMessage='Belum ada data pengguna.' />
        </div>
      </KTCard>
      {/* Modal Tambah */}
      {showModal && (
        <div className='modal fade show d-block' tabIndex={-1} style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <form onSubmit={handleSubmit}>
                <div className='modal-header'>
                  <h5 className='modal-title'>Tambah Pengguna</h5>
                  <button type='button' className='btn-close' onClick={() => setShowModal(false)}></button>
                </div>
                <div className='modal-body'>
                  <div className='mb-3'>
                    <label className='form-label'>Nama</label>
                    <input type='text' className='form-control' name='nama' value={form.nama} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Username</label>
                    <input type='text' className='form-control' name='username' value={form.username} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Role</label>
                    <select className='form-select' name='role' value={form.role} onChange={handleChange} required>
                      <option value='Operator'>Operator</option>
                      <option value='Bendahara'>Bendahara</option>
                      <option value='Direktur'>Direktur</option>
                    </select>
                  </div>
                </div>
                <div className='modal-footer'>
                  <button type='button' className='btn btn-secondary' onClick={() => setShowModal(false)}>
                    Batal
                  </button>
                  <button type='submit' className='btn btn-primary'>Simpan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManajemenPenggunaPage; 