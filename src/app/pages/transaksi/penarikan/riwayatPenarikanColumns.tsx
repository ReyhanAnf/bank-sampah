import { Column } from 'react-table';

export interface Penarikan {
    id: number;
    tanggal: string;
    nasabah: string;
    jumlah: string;
    status: string;
}

export const riwayatPenarikanColumns: Column<Penarikan>[] = [
  {
    Header: 'Tanggal',
    accessor: 'tanggal',
  },
  {
    Header: 'Nasabah',
    accessor: 'nasabah',
  },
  {
    Header: 'Jumlah',
    accessor: 'jumlah',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
]; 