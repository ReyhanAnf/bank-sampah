import React, { useState, useEffect } from 'react';
import { MetronicTable } from '../../components/MetronicTable';
import { keuanganColumns, Keuangan } from './keuanganColumns';
import { KTCard } from '../../../_metronic/helpers/components/KTCard';
import { KTIcon } from '../../../_metronic/helpers';
import { MenuComponent } from '../../../_metronic/assets/ts/components';

const initialData: Keuangan[] = [
  { id: 1, tanggal: '2024-06-01', keterangan: 'Setoran Nasabah', jenis: 'Pemasukan', jumlah: 'Rp 500.000', status: 'Lunas' },
  { id: 2, tanggal: '2024-06-02', keterangan: 'Pembelian Karung', jenis: 'Pengeluaran', jumlah: 'Rp 100.000', status: 'Lunas' },
];

const KeuanganPage = () => {
  const [data, setData] = useState<Keuangan[]>(initialData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<Keuangan>({ id: 0, tanggal: '', keterangan: '', jenis: 'Pemasukan', jumlah: '', status: '' });
  const [filter, setFilter] = useState({ jenisTransaksi: '', status: '' });
  const [filterState, setFilterState] = useState({ jenisTransaksi: '', status: '' });

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
    setFilterState({ jenisTransaksi: '', status: '' });
    setFilter({ jenisTransaksi: '', status: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newKeuangan = { ...form, id: Date.now() };
    setData([...data, newKeuangan]);
    setForm({ id: 0, tanggal: '', keterangan: '', jenis: 'Pemasukan', jumlah: '', status: '' });
    setShowModal(false);
  };

  const filteredData = data.filter(row =>
    (filter.jenisTransaksi === '' || row.jenisTransaksi === filter.jenisTransaksi) &&
    (filter.status === '' || row.status === filter.status)
  );

  const handleExport = () => {
    const headers = keuanganColumns.map(c => c.Header).join(',');
    const rows = filteredData.map(row => 
        keuanganColumns.map(col => (row as any)[col.accessor as string]).join(',')
    );
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'laporan-keuangan.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='container-fluid py-10 px-10'>
      <h1 className='mb-4'>Keuangan</h1>
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
                                <label className='form-label fs-6 fw-bold'>Jenis Transaksi:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='jenisTransaksi'
                                    value={filterState.jenisTransaksi}
                                    onChange={handleFilterChange}
                                    placeholder='Cari Jenis Transaksi...'
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
                                    <option value='Lunas'>Lunas</option>
                                    <option value='Belum Lunas'>Belum Lunas</option>
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
                        Tambah Transaksi
                    </button>
                    {/* end::Add */}
                </div>
            </div>
            {/* end::Card toolbar */}
        </div>
        <div className='card-body'>
          <MetronicTable columns={keuanganColumns} data={filteredData} emptyMessage='Belum ada catatan keuangan.' />
        </div>
      </KTCard>
      {/* Modal Tambah */}
      {showModal && (
        <div className='modal fade show d-block' tabIndex={-1} style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <form onSubmit={handleSubmit}>
                <div className='modal-header'>
                  <h5 className='modal-title'>Tambah Catatan Keuangan</h5>
                  <button type='button' className='btn-close' onClick={() => setShowModal(false)}></button>
                </div>
                <div className='modal-body'>
                  <div className='mb-3'>
                    <label className='form-label'>Tanggal</label>
                    <input type='date' className='form-control' name='tanggal' value={form.tanggal} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Keterangan</label>
                    <input type='text' className='form-control' name='keterangan' value={form.keterangan} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Jenis</label>
                    <select className='form-select' name='jenis' value={form.jenis} onChange={handleChange} required>
                      <option value='Pemasukan'>Pemasukan</option>
                      <option value='Pengeluaran'>Pengeluaran</option>
                    </select>
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Jumlah</label>
                    <input type='text' className='form-control' name='jumlah' value={form.jumlah} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Status</label>
                    <select
                      className='form-control'
                      name='status'
                      value={form.status}
                      onChange={handleChange}
                    >
                      <option value=''>Pilih Status</option>
                      <option value='Lunas'>Lunas</option>
                      <option value='Belum Lunas'>Belum Lunas</option>
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

export default KeuanganPage; 