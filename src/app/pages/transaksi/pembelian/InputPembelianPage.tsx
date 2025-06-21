import React, { useState, useEffect } from 'react';
import { KTCard } from '../../../../_metronic/helpers/components/KTCard';
import { MetronicTable } from '../../../components/MetronicTable';
import { inputPembelianColumns, Pembelian } from './inputPembelianColumns';
import { KTIcon } from '../../../../_metronic/helpers';
import { MenuComponent } from '../../../../_metronic/assets/ts/components';

const initialData: Pembelian[] = [
  { id: 1, tanggal: '2024-06-01', namaBarang: 'Kaca Bening', jumlah: 100, harga: 1000000, total: 1000000, pemasok: 'PT. Kaca Jaya', status: 'Selesai' },
  { id: 2, tanggal: '2024-06-02', namaBarang: 'Kaca Warna', jumlah: 50, harga: 600000, total: 600000, pemasok: 'CV. Warna Abadi', status: 'Proses' },
];

const InputPembelianPage = () => {
  const [data, setData] = useState<Pembelian[]>(initialData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<Pembelian>({ id: 0, tanggal: '', namaBarang: '', jumlah: 0, harga: 0, total: 0, pemasok: '' });
  const [filter, setFilter] = useState({ namaBarang: '', pemasok: '' });
  const [filterState, setFilterState] = useState({ namaBarang: '', pemasok: '' });

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterState({ ...filterState, [e.target.name]: e.target.value });
  };

  const handleApplyFilter = () => {
    setFilter(filterState);
  };
  
  const handleResetFilter = () => {
    setFilterState({ namaBarang: '', pemasok: '' });
    setFilter({ namaBarang: '', pemasok: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData([...data, form]);
    setForm({ id: 0, tanggal: '', namaBarang: '', jumlah: 0, harga: 0, total: 0, pemasok: '' });
    setShowModal(false);
  };

  const filteredData = data.filter(row =>
    row.namaBarang.toLowerCase().includes(filter.namaBarang.toLowerCase()) &&
    row.pemasok.toLowerCase().includes(filter.pemasok.toLowerCase())
  );

  const handleExport = () => {
    const headers = inputPembelianColumns.map(c => c.Header).join(',');
    const rows = filteredData.map(row => 
        inputPembelianColumns.map(col => (row as any)[col.accessor as string]).join(',')
    );
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'input-pembelian.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='container-fluid py-10 px-10'>
      <h1 className='mb-4'>Input Pembelian</h1>
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
                                <label className='form-label fs-6 fw-bold'>Nama Barang:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='namaBarang'
                                    value={filterState.namaBarang}
                                    onChange={handleFilterChange}
                                    placeholder='Cari Nama Barang...'
                                />
                            </div>
                            <div className='mb-10'>
                                <label className='form-label fs-6 fw-bold'>Pemasok:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='pemasok'
                                    value={filterState.pemasok}
                                    onChange={handleFilterChange}
                                    placeholder='Cari Pemasok...'
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

                    {/* begin::Add */}
                    <button className='btn btn-primary' onClick={() => setShowModal(true)}>
                        <KTIcon iconName='plus' className='fs-2' />
                        Input Pembelian
                    </button>
                    {/* end::Add */}
                </div>
            </div>
            {/* end::Card toolbar */}
        </div>
        <div className='card-body'>
          <MetronicTable columns={inputPembelianColumns} data={filteredData} emptyMessage='Belum ada data pembelian.' />
        </div>
      </KTCard>
      {/* Modal Tambah */}
      {showModal && (
        <div className='modal fade show d-block' tabIndex={-1} style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <form onSubmit={handleSubmit}>
                <div className='modal-header'>
                  <h5 className='modal-title'>Tambah Pembelian</h5>
                  <button type='button' className='btn-close' onClick={() => setShowModal(false)}></button>
                </div>
                <div className='modal-body'>
                  <div className='mb-3'>
                    <label className='form-label'>Tanggal</label>
                    <input type='date' className='form-control' name='tanggal' value={form.tanggal} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Pemasok</label>
                    <input type='text' className='form-control' name='pemasok' value={form.pemasok} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Nama Barang</label>
                    <input type='text' className='form-control' name='namaBarang' value={form.namaBarang} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Jumlah</label>
                    <input type='text' className='form-control' name='jumlah' value={form.jumlah} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Harga</label>
                    <input type='text' className='form-control' name='harga' value={form.harga} onChange={handleChange} required />
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

export default InputPembelianPage; 