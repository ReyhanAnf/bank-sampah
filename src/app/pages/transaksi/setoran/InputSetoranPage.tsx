import React, { useState, useEffect } from 'react';
import { KTCard } from '../../../../_metronic/helpers/components/KTCard';
import { MetronicTable } from '../../../components/MetronicTable';
import { Column } from 'react-table';
import { inputSetoranColumns, Setoran } from './inputSetoranColumns';
import { KTIcon } from '../../../../_metronic/helpers';
import { MenuComponent } from '../../../../_metronic/assets/ts/components';

const columns: Column<any>[] = [
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Nama Nasabah', accessor: 'nasabah' },
  { Header: 'Jenis Sampah', accessor: 'jenis' },
  { Header: 'Berat', accessor: 'berat' },
  { Header: 'Nilai Setoran', accessor: 'nilai' },
];

const initialData: Setoran[] = [
  { tanggal: '2024-06-01', nasabah: 'Budi', jenis: 'Plastik', berat: '5 kg', nilai: 'Rp 50.000' },
  { tanggal: '2024-06-02', nasabah: 'Siti', jenis: 'Kertas', berat: '3 kg', nilai: 'Rp 30.000' },
];

const InputSetoranPage = () => {
  const [data, setData] = useState<Setoran[]>(initialData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<Setoran>({ id: 0, tanggal: '', nama: '', jenisSampah: '', berat: 0, harga: 0, total: 0 });
  const [filter, setFilter] = useState({ nama: '', jenisSampah: '' });
  const [filterState, setFilterState] = useState({ nama: '', jenisSampah: '' });

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
    setFilterState({ nama: '', jenisSampah: '' });
    setFilter({ nama: '', jenisSampah: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData([...data, form]);
    setForm({ id: 0, tanggal: '', nama: '', jenisSampah: '', berat: 0, harga: 0, total: 0 });
    setShowModal(false);
  };

  const handleExport = () => {
    const headers = inputSetoranColumns.map(c => c.Header).join(',');
    const rows = data.map(row => 
        inputSetoranColumns.map(col => (row as any)[col.accessor as string]).join(',')
    );
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'input-setoran.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='container-fluid py-10 px-10'>
      <h1 className='mb-4'>Input Setoran</h1>
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
                    <label className='form-label fs-6 fw-bold'>Jenis Sampah:</label>
                    <input
                      type='text'
                      className='form-control'
                      name='jenisSampah'
                      value={filterState.jenisSampah}
                      onChange={handleFilterChange}
                      placeholder='Cari Jenis Sampah...'
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
                Input Setoran
              </button>
              {/* end::Add */}
            </div>
          </div>
          {/* end::Card toolbar */}
        </div>
        <div className='card-body'>
          <MetronicTable columns={columns} data={data} emptyMessage='Belum ada data setoran.' />
        </div>
      </KTCard>
      {showModal && (
        <div className='modal fade show d-block' tabIndex={-1} style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <form onSubmit={handleSubmit}>
                <div className='modal-header'>
                  <h5 className='modal-title'>Tambah Setoran</h5>
                  <button type='button' className='btn-close' onClick={() => setShowModal(false)}></button>
                </div>
                <div className='modal-body'>
                  <div className='mb-3'><label className='form-label'>Tanggal</label><input type='date' className='form-control' name='tanggal' value={form.tanggal} onChange={handleChange} required /></div>
                  <div className='mb-3'><label className='form-label'>Nama Nasabah</label><input type='text' className='form-control' name='nasabah' value={form.nasabah} onChange={handleChange} required /></div>
                  <div className='mb-3'><label className='form-label'>Jenis Sampah</label><input type='text' className='form-control' name='jenis' value={form.jenis} onChange={handleChange} required /></div>
                  <div className='mb-3'><label className='form-label'>Berat</label><input type='text' className='form-control' name='berat' value={form.berat} onChange={handleChange} required /></div>
                  <div className='mb-3'><label className='form-label'>Nilai Setoran</label><input type='text' className='form-control' name='nilai' value={form.nilai} onChange={handleChange} required /></div>
                </div>
                <div className='modal-footer'>
                  <button type='button' className='btn btn-secondary' onClick={() => setShowModal(false)}>Batal</button>
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

export default InputSetoranPage; 