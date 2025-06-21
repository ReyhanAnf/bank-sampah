import React, { useState, useEffect } from 'react';
import { MetronicTable } from '../../components/MetronicTable';
import { nasabahColumns, Nasabah } from './nasabahColumns';
import { KTCard } from '../../../_metronic/helpers/components/KTCard';
import { KTIcon } from '../../../_metronic/helpers';
import { MenuComponent } from '../../../_metronic/assets/ts/components';
import { toAbsoluteUrl } from '../../../_metronic/helpers';

const initialData: Nasabah[] = [
  { 
    id: 1,
    nama: 'Ahmad Rizki', 
    noTelp: '081234567890', 
    saldo: 125000, 
    status: 'Aktif',
    tanggalBergabung: '2024-01-15',
    alamat: 'Jl. Sudirman No. 123, Jakarta'
  },
  { 
    id: 2,
    nama: 'Siti Nurhaliza', 
    noTelp: '081234567891', 
    saldo: 75000, 
    status: 'Aktif',
    tanggalBergabung: '2024-01-20',
    alamat: 'Jl. Thamrin No. 456, Jakarta'
  },
  { 
    id: 3,
    nama: 'Budi Santoso', 
    noTelp: '081234567892', 
    saldo: 200000, 
    status: 'Aktif',
    tanggalBergabung: '2024-02-01',
    alamat: 'Jl. Gatot Subroto No. 789, Jakarta'
  },
  { 
    id: 4,
    nama: 'Dewi Sartika', 
    noTelp: '081234567893', 
    saldo: 50000, 
    status: 'Nonaktif',
    tanggalBergabung: '2024-01-10',
    alamat: 'Jl. Hayam Wuruk No. 321, Jakarta'
  },
  { 
    id: 5,
    nama: 'Rudi Hermawan', 
    noTelp: '081234567894', 
    saldo: 150000, 
    status: 'Aktif',
    tanggalBergabung: '2024-02-15',
    alamat: 'Jl. Asia Afrika No. 654, Bandung'
  },
];

const NasabahPage = () => {
  const [data, setData] = useState<Nasabah[]>(initialData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<Nasabah>({ 
    id: 0, 
    nama: '', 
    noTelp: '', 
    saldo: 0, 
    status: 'Aktif',
    tanggalBergabung: new Date().toISOString().split('T')[0],
    alamat: ''
  });
  const [filter, setFilter] = useState({ nama: '', status: '' });
  const [filterState, setFilterState] = useState({ nama: '', status: '' });

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilterState({ ...filterState, [e.target.name]: e.target.value });
  };

  const handleApplyFilter = () => {
    setFilter(filterState);
  };
  
  const handleResetFilter = () => {
    setFilterState({ nama: '', status: '' });
    setFilter({ nama: '', status: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNasabah = {
      ...form,
      id: Math.max(...data.map(n => n.id)) + 1
    };
    setData([...data, newNasabah]);
    setForm({ 
      id: 0, 
      nama: '', 
      noTelp: '', 
      saldo: 0, 
      status: 'Aktif',
      tanggalBergabung: new Date().toISOString().split('T')[0],
      alamat: ''
    });
    setShowModal(false);
  };

  const filteredData = data.filter(row =>
    row.nama.toLowerCase().includes(filter.nama.toLowerCase()) &&
    row.status.toLowerCase().includes(filter.status.toLowerCase())
  );

  const handleExport = () => {
    const headers = nasabahColumns.map(c => c.Header).join(',');
    const rows = filteredData.map(row => 
        nasabahColumns.map(col => {
          const value = (row as any)[col.accessor as string];
          return typeof value === 'number' ? value : `"${value}"`;
        }).join(',')
    );
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'daftar-nasabah.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='container-fluid py-10 px-10'>
      <h1 className='mb-4'>Manajemen Nasabah</h1>
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
                                <label className='form-label fs-6 fw-bold'>Status:</label>
                                <select
                                    className='form-select'
                                    name='status'
                                    value={filterState.status}
                                    onChange={handleFilterChange}
                                >
                                    <option value=''>Semua Status</option>
                                    <option value='Aktif'>Aktif</option>
                                    <option value='Nonaktif'>Nonaktif</option>
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
                        Tambah Nasabah
                    </button>
                    {/* end::Add */}
                </div>
            </div>
            {/* end::Card toolbar */}
        </div>
        <div className='card-body'>
          <MetronicTable columns={nasabahColumns} data={filteredData} emptyMessage='Belum ada data nasabah.' />
        </div>
      </KTCard>
      {/* Modal Tambah */}
      {showModal && (
        <div className='modal fade show d-block' tabIndex={-1} style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <form onSubmit={handleSubmit}>
                <div className='modal-header'>
                  <h5 className='modal-title'>Tambah Nasabah</h5>
                  <button type='button' className='btn-close' onClick={() => setShowModal(false)}></button>
                </div>
                <div className='modal-body'>
                  <div className='mb-3'>
                    <label className='form-label'>Nama Lengkap</label>
                    <input type='text' className='form-control' name='nama' value={form.nama} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>No. Telepon</label>
                    <input type='tel' className='form-control' name='noTelp' value={form.noTelp} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Alamat</label>
                    <textarea className='form-control' name='alamat' value={form.alamat} onChange={handleChange} rows={3} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Saldo Awal</label>
                    <input type='number' className='form-control' name='saldo' value={form.saldo} onChange={handleChange} min={0} />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Status</label>
                    <select className='form-select' name='status' value={form.status} onChange={handleChange} required>
                      <option value='Aktif'>Aktif</option>
                      <option value='Nonaktif'>Nonaktif</option>
                    </select>
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Tanggal Bergabung</label>
                    <input type='date' className='form-control' name='tanggalBergabung' value={form.tanggalBergabung} onChange={handleChange} required />
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

export default NasabahPage; 