import { Column } from 'react-table';

export interface Aktivitas {
    waktu: string;
    nama: string;
    aktivitas: string;
}

export const aktivitasPenggunaColumns: Column<Aktivitas>[] = [
  {
    Header: 'Waktu',
    accessor: 'waktu',
  },
  {
    Header: 'Nama Pengguna',
    accessor: 'nama',
  },
  {
    Header: 'Aktivitas',
    accessor: 'aktivitas',
  },
]; 