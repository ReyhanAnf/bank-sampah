import React, { useState } from 'react';
import { KTCard } from '../../../../_metronic/helpers/components/KTCard';
import { MetronicTable } from '../../../components/MetronicTable';

const initialData = [
  { tanggal: '2024-06-01', pembeli: 'PT. Kaca Jaya', jenis: 'Kaca Bening', jumlah: '100 kg', harga: 'Rp 1.200.000', status: 'Selesai' },
  { tanggal: '2024-06-02', pembeli: 'CV. Warna Abadi', jenis: 'Kaca Warna', jumlah: '50 kg', harga: 'Rp 700.000', status: 'Ditolak' },
];

const columns = [
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Pembeli', accessor: 'pembeli' },
  { Header: 'Jenis', accessor: 'jenis' },
  { Header: 'Jumlah', accessor: 'jumlah' },
  { Header: 'Harga', accessor: 'harga' },
  { Header: 'Status', accessor: 'status' },
];

const RiwayatPenjualanPage = () => {
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState({ pembeli: '', jenis: '', status: '' });

  const filteredData = data.filter(row =>
    row.pembeli.toLowerCase().includes(filter.pembeli.toLowerCase()) &&
    row.jenis.toLowerCase().includes(filter.jenis.toLowerCase()) &&
    row.status.toLowerCase().includes(filter.status.toLowerCase())
  );

  return (
    <div className='container-fluid py-10 px-10'>
      <h1 className='mb-4'>Riwayat Penjualan</h1>
      <KTCard>
        <div className='card-header border-0 pt-6 d-flex flex-wrap gap-2 justify-content-between align-items-center'>
          <div className='d-flex gap-2'>
            <input
              type='text'
              className='form-control form-control-sm'
              placeholder='Cari Pembeli...'
              name='pembeli'
              value={filter.pembeli}
              onChange={e => setFilter({ ...filter, pembeli: e.target.value })}
              style={{ maxWidth: 180 }}
            />
            <input
              type='text'
              className='form-control form-control-sm'
              placeholder='Cari Jenis...'
              name='jenis'
              value={filter.jenis}
              onChange={e => setFilter({ ...filter, jenis: e.target.value })}
              style={{ maxWidth: 180 }}
            />
            <input
              type='text'
              className='form-control form-control-sm'
              placeholder='Cari Status...'
              name='status'
              value={filter.status}
              onChange={e => setFilter({ ...filter, status: e.target.value })}
              style={{ maxWidth: 180 }}
            />
          </div>
        </div>
        <div className='card-body'>
          <MetronicTable columns={columns} data={filteredData} emptyMessage='Belum ada data penjualan.' />
        </div>
      </KTCard>
    </div>
  );
};

export default RiwayatPenjualanPage; 