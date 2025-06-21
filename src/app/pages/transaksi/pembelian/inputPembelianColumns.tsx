import { Column } from 'react-table';

export interface Pembelian {
    id: number;
    tanggal: string;
    namaBarang: string;
    jumlah: number;
    harga: number;
    total: number;
    pemasok: string;
    status?: string;
    selected?: boolean;
}

export const inputPembelianColumns: Column<Pembelian>[] = [
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
]; 