import { Column } from 'react-table';

export interface Pengguna {
    id: number;
    nama: string;
    role: string;
    status: string;
}

export const manajemenPenggunaColumns: Column<Pengguna>[] = [
  {
    Header: 'Nama',
    accessor: 'nama',
  },
  {
    Header: 'Username',
    accessor: 'username',
  },
  {
    Header: 'Role',
    accessor: 'role',
  },
]; 