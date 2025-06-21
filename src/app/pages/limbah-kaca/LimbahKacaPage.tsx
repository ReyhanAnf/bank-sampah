import React, { useState, useEffect } from 'react';
import { MetronicTable } from '../../components/MetronicTable';
import { limbahKacaColumns, LimbahKaca } from './limbahKacaColumns';
import { KTCard } from '../../../_metronic/helpers/components/KTCard';
import { KTIcon } from '../../../_metronic/helpers';
import { MenuComponent } from '../../../_metronic/assets/ts/components';

const initialData: LimbahKaca[] = [
  { tanggal: '2024-06-01', jenis: 'Kaca Bening', berat: '10 kg', sumber: 'PT. Sumber Jaya' },
  { tanggal: '2024-06-02', jenis: 'Kaca Warna', berat: '5 kg', sumber: 'CV. Warna Abadi' },
];

const LimbahKacaPage = () => {
  const [data, setData] = useState<LimbahKaca[]>(initialData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<LimbahKaca>({ tanggal: '', jenis: '', berat: '', sumber: '' });
  const [filter, setFilter] = useState({ jenis: '', sumber: '' });
  const [filterState, setFilterState] = useState({ jenis: '', sumber: '' });

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
    setFilterState({ jenis: '', sumber: '' });
    setFilter({ jenis: '', sumber: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData([...data, form]);
    setForm({ tanggal: '', jenis: '', berat: '', sumber: '' });
    setShowModal(false);
  };

  const filteredData = data.filter(row =>
    row.jenis.toLowerCase().includes(filter.jenis.toLowerCase()) &&
    row.sumber.toLowerCase().includes(filter.sumber.toLowerCase())
  );

  const handleExport = () => {
    const headers = limbahKacaColumns.map(c => c.Header).join(',');
    const rows = filteredData.map(row => 
        limbahKacaColumns.map(col => (row as any)[col.accessor as string]).join(',')
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
      <h1 className='mb-4'>Manajemen Limbah Kaca</h1>
      <KTCard>
        <div className='card-header border-0 pt-6'>
            <div className='card-title'>
                {/* begin::Search */}
                <div className='d-flex align-items-center position-relative my-1'>
                    {/* Simple search can be added here if needed */}
                </div>
                {/* end::Search */}
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
                                <label className='form-label fs-6 fw-bold'>Jenis:</label>
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

                    {/* begin::Add user */}
                    <button className='btn btn-primary' onClick={() => setShowModal(true)}>
                        <KTIcon iconName='plus' className='fs-2' />
                        Tambah Limbah Kaca
                    </button>
                    {/* end::Add user */}
                </div>
            </div>
            {/* end::Card toolbar */}
        </div>
        <div className='card-body'>
          <MetronicTable columns={limbahKacaColumns} data={filteredData} emptyMessage='Belum ada data limbah kaca.' />
        </div>
      </KTCard>
      {/* Modal Tambah */}
      {showModal && (
        <div className='modal fade show d-block' tabIndex={-1} style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <form onSubmit={handleSubmit}>
                <div className='modal-header'>
                  <h5 className='modal-title'>Tambah Limbah Kaca</h5>
                  <button type='button' className='btn-close' onClick={() => setShowModal(false)}></button>
                </div>
                <div className='modal-body'>
                  <div className='mb-3'>
                    <label className='form-label'>Tanggal</label>
                    <input type='date' className='form-control' name='tanggal' value={form.tanggal} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Jenis</label>
                    <input type='text' className='form-control' name='jenis' value={form.jenis} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Berat/Volume</label>
                    <input type='text' className='form-control' name='berat' value={form.berat} onChange={handleChange} required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Sumber</label>
                    <input type='text' className='form-control' name='sumber' value={form.sumber} onChange={handleChange} required />
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

export default LimbahKacaPage; 