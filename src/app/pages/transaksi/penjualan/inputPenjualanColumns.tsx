import { Column } from 'react-table';

export interface Penjualan {
  id: number;
  tanggal: string;
  namaBarang: string;
  jumlah: number;
  harga: number;
  total: number;
  pembeli: string;
  status?: string; // Optional status for other pages
  selected?: boolean;
}

export const inputPenjualanColumns: Column<Penjualan>[] = [
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
    Header: 'Pembeli',
    accessor: 'pembeli',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
]; 