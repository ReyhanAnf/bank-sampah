import { Column } from 'react-table';

export interface Setoran {
    id: number;
    tanggal: string;
    nasabah: string;
    jenis: string;
    berat: string;
    nilai: string;
    status?: string;
    selected?: boolean;
}

export const riwayatSetoranColumns: Column<Setoran>[] = [
  {
    Header: 'Tanggal',
    accessor: 'tanggal',
  },
  {
    Header: 'Nasabah',
    accessor: 'nasabah',
  },
  {
    Header: 'Jenis',
    accessor: 'jenis',
  },
  {
    Header: 'Berat',
    accessor: 'berat',
  },
  {
    Header: 'Nilai',
    accessor: 'nilai',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
]; 