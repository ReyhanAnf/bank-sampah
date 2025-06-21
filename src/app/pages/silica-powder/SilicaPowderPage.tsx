import React, { useState, useEffect } from 'react';
import { MetronicTable } from '../../components/MetronicTable';
import { silicaPowderColumns, SilicaPowder } from './silicaPowderColumns';
import { KTCard } from '../../../_metronic/helpers/components/KTCard';
import { KTIcon } from '../../../_metronic/helpers';
import { MenuComponent } from '../../../_metronic/assets/ts/components';

const initialData: SilicaPowder[] = [
  { tanggal: '2024-06-01', jumlah: '20 kg', kualitas: 'A', sumber: 'Limbah Kaca Bening' },
  { tanggal: '2024-06-02', jumlah: '15 kg', kualitas: 'B', sumber: 'Limbah Kaca Warna' },
];

const SilicaPowderPage = () => {
  const [data, setData] = useState<SilicaPowder[]>(initialData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<SilicaPowder>({ tanggal: '', kualitas: '', jumlah: '', sumber: '' });
  const [filter, setFilter] = useState({ kualitas: '', sumber: '' });
  const [filterState, setFilterState] = useState({ kualitas: '', sumber: '' });

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
    setFilterState({ kualitas: '', sumber: '' });
    setFilter({ kualitas: '', sumber: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData([...data, form]);
    setForm({ tanggal: '', jumlah: '', kualitas: '', sumber: '' });
    setShowModal(false);
  };

  const filteredData = data.filter(row =>
    row.kualitas.toLowerCase().includes(filter.kualitas.toLowerCase()) &&
    row.sumber.toLowerCase().includes(filter.sumber.toLowerCase())
  );

  const handleExport = () => {
    const headers = silicaPowderColumns.map(c => c.Header).join(',');
    const rows = filteredData.map(row => 
        silicaPowderColumns.map(col => (row as any)[col.accessor as string]).join(',')
    );
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'laporan-silica-powder.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='container-fluid py-10 px-10'>
      <h1 className='mb-4'>Manajemen Silica Powder</h1>
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
                                <label className='form-label fs-6 fw-bold'>Kualitas:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='kualitas'
                                    value={filterState.kualitas}
                                    onChange={handleFilterChange}
                                    placeholder='Cari Kualitas...'
                                />
                            </div>
                            <div className='mb-10'>
                                <label className='form-label fs-6 fw-bold'>Sumber:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='sumber'
                                    value={filterState.sumber}
                                    onChange={handleFilterChange}
                                    placeholder='Cari Sumber...'
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
                        Tambah Silica Powder
                    </button>
                    {/* end::Add */}
                </div>
            </div>
            {/* end::Card toolbar */}
        </div>
        <div className='card-body'>
          <MetronicTable columns={silicaPowderColumns} data={filteredData} emptyMessage='Belum ada data produksi Silica Powder.' />
        </div>
      </KTCard>
      {/* Modal Tambah */}
      {showModal && (
        <div className='modal fade show d-block' tabIndex={-1} style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <form onSubmit={handleSubmit}>
                <div className='modal-header'>
                  <h5 className='modal-title'>Tambah Produksi Silica Powder</h5>
                  <button type='button' className='btn-close' onClick={() => setShowModal(false)}></button>
                </div>
                <div className='modal-body'>
                  <div className='mb-3'>
                    <label className='form-label'>Tanggal Produksi</label>
                    <input type='date' className='form-control' name='tanggal' value={form.tanggal} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Jumlah</label>
                    <input type='text' className='form-control' name='jumlah' value={form.jumlah} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Kualitas</label>
                    <input type='text' className='form-control' name='kualitas' value={form.kualitas} onChange={handleChange} required />
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

export default SilicaPowderPage; 