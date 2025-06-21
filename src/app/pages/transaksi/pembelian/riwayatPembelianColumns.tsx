import { Column } from 'react-table';
import { Pembelian } from './inputPembelianColumns';

export const riwayatPembelianColumns: Column<Pembelian>[] = [
  {
    Header: 'Tanggal',
    accessor: 'tanggal',
  },
  {
    Header: 'Nama Pemasok',
    accessor: 'pemasok',
  },
  {
    Header: 'Total',
    accessor: 'total',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
]; 