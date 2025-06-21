import React, { useState } from 'react';
import { KTCard } from '../../../../_metronic/helpers/components/KTCard';
import { MetronicTable } from '../../../components/MetronicTable';
import { Column } from 'react-table';

const columns: Column<any>[] = [
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Nama Nasabah', accessor: 'nasabah' },
  { Header: 'Jumlah', accessor: 'jumlah' },
  { Header: 'Status', accessor: 'status' },
];

const initialData = [
  { tanggal: '2024-06-01', nasabah: 'Budi', jumlah: 'Rp 100.000', status: 'Menunggu' },
  { tanggal: '2024-06-02', nasabah: 'Siti', jumlah: 'Rp 50.000', status: 'Disetujui' },
];

const InputPenarikanPage = () => {
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ tanggal: '', nasabah: '', jumlah: '', status: 'Menunggu' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData([...data, form]);
    setForm({ tanggal: '', nasabah: '', jumlah: '', status: 'Menunggu' });
    setShowModal(false);
  };

  return (
    <div className='container-fluid py-10 px-10'>
      <KTCard>
        <div className='card-header border-0 pt-6 d-flex justify-content-between align-items-center'>
          <div className='card-title'>Input Penarikan Saldo</div>
          <button className='btn btn-primary' onClick={() => setShowModal(true)}>Tambah Penarikan</button>
        </div>
        <div className='card-body'>
          <MetronicTable columns={columns} data={data} emptyMessage='Belum ada data penarikan.' />
        </div>
      </KTCard>
      {showModal && (
        <div className='modal fade show d-block' tabIndex={-1} style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <form onSubmit={handleSubmit}>
                <div className='modal-header'>
                  <h5 className='modal-title'>Tambah Penarikan</h5>
                  <button type='button' className='btn-close' onClick={() => setShowModal(false)}></button>
                </div>
                <div className='modal-body'>
                  <div className='mb-3'><label className='form-label'>Tanggal</label><input type='date' className='form-control' name='tanggal' value={form.tanggal} onChange={handleChange} required /></div>
                  <div className='mb-3'><label className='form-label'>Nama Nasabah</label><input type='text' className='form-control' name='nasabah' value={form.nasabah} onChange={handleChange} required /></div>
                  <div className='mb-3'><label className='form-label'>Jumlah</label><input type='text' className='form-control' name='jumlah' value={form.jumlah} onChange={handleChange} required /></div>
                  <div className='mb-3'><label className='form-label'>Status</label><select className='form-select' name='status' value={form.status} onChange={handleChange}><option value='Menunggu'>Menunggu</option><option value='Disetujui'>Disetujui</option><option value='Ditolak'>Ditolak</option></select></div>
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

export default InputPenarikanPage; 