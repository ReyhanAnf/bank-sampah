import React, { useState } from 'react';
import { KTCard } from '../../../_metronic/helpers/components/KTCard';
import { MetronicTable } from '../../components/MetronicTable';

const initialData = [
  { tanggal: '2024-06-01', pengguna: 'Operator', aktivitas: 'Input Setoran' },
  { tanggal: '2024-06-02', pengguna: 'Bendahara', aktivitas: 'Verifikasi Penarikan' },
];

const columns = [
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Pengguna', accessor: 'pengguna' },
  { Header: 'Aktivitas', accessor: 'aktivitas' },
];

const LaporanAktivitasPenggunaPage = () => {
  const [data] = useState(initialData);
  const [filter, setFilter] = useState({ pengguna: '', aktivitas: '' });

  const filteredData = data.filter(row =>
    row.pengguna.toLowerCase().includes(filter.pengguna.toLowerCase()) &&
    row.aktivitas.toLowerCase().includes(filter.aktivitas.toLowerCase())
  );

  return (
    <div className='container py-10'>
      <h1 className='mb-4'>Laporan Aktivitas Pengguna</h1>
      <KTCard>
        <div className='card-header border-0 pt-6 d-flex flex-wrap gap-2 justify-content-between align-items-center'>
          <div className='d-flex gap-2'>
            <input
              type='text'
              className='form-control form-control-sm'
              placeholder='Cari Pengguna...'
              name='pengguna'
              value={filter.pengguna}
              onChange={e => setFilter({ ...filter, pengguna: e.target.value })}
              style={{ maxWidth: 180 }}
            />
            <input
              type='text'
              className='form-control form-control-sm'
              placeholder='Cari Aktivitas...'
              name='aktivitas'
              value={filter.aktivitas}
              onChange={e => setFilter({ ...filter, aktivitas: e.target.value })}
              style={{ maxWidth: 180 }}
            />
          </div>
        </div>
        <div className='card-body'>
          <MetronicTable columns={columns} data={filteredData} emptyMessage='Belum ada data aktivitas.' />
        </div>
      </KTCard>
    </div>
  );
};

export default LaporanAktivitasPenggunaPage; 