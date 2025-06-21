import { Column } from 'react-table';
import { Pembelian } from './inputPembelianColumns';

export const verifikasiPembelianColumns: ReadonlyArray<Column<Pembelian>> = [
  {
    Header: 'Tanggal',
    accessor: 'tanggal',
  },
  {
    Header: 'Nama Barang',
    accessor: 'namaBarang',
  },
  {
    Header: 'Jumlah',
    accessor: 'jumlah',
  },
  {
    Header: 'Harga',
    accessor: 'harga',
  },
  {
    Header: 'Total',
    accessor: 'total',
  },
  {
    Header: 'Pemasok',
    accessor: 'pemasok',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Aksi',
    accessor: 'aksi',
  },
]; 