import React, { useState } from 'react';
import { KTCard } from '../../../_metronic/helpers/components/KTCard';
import { MetronicTable } from '../../components/MetronicTable';

const initialData = [
  { tanggal: '2024-06-01', produk: 'Silica Powder', jumlah: '20 kg', sumber: 'Kaca Bening' },
  { tanggal: '2024-06-02', produk: 'Silica Powder', jumlah: '15 kg', sumber: 'Kaca Warna' },
];

const columns = [
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Produk', accessor: 'produk' },
  { Header: 'Jumlah', accessor: 'jumlah' },
  { Header: 'Sumber', accessor: 'sumber' },
];

const LaporanProduksiPage = () => {
  const [data] = useState(initialData);
  const [filter, setFilter] = useState({ produk: '', sumber: '' });

  const filteredData = data.filter(row =>
    row.produk.toLowerCase().includes(filter.produk.toLowerCase()) &&
    row.sumber.toLowerCase().includes(filter.sumber.toLowerCase())
  );

  return (
    <div className='container py-10'>
      <h1 className='mb-4'>Laporan Produksi</h1>
      <KTCard>
        <div className='card-header border-0 pt-6 d-flex flex-wrap gap-2 justify-content-between align-items-center'>
          <div className='d-flex gap-2'>
            <input
              type='text'
              className='form-control form-control-sm'
              placeholder='Cari Produk...'
              name='produk'
              value={filter.produk}
              onChange={e => setFilter({ ...filter, produk: e.target.value })}
              style={{ maxWidth: 180 }}
            />
            <input
              type='text'
              className='form-control form-control-sm'
              placeholder='Cari Sumber...'
              name='sumber'
              value={filter.sumber}
              onChange={e => setFilter({ ...filter, sumber: e.target.value })}
              style={{ maxWidth: 180 }}
            />
          </div>
        </div>
        <div className='card-body'>
          <MetronicTable columns={columns} data={filteredData} emptyMessage='Belum ada data produksi.' />
        </div>
      </KTCard>
    </div>
  );
};

export default LaporanProduksiPage; 