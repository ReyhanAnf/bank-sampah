import { Column } from 'react-table';

export interface Setoran {
    id: number;
    tanggal: string;
    nama: string;
    jenisSampah: string;
    berat: number;
    harga: number;
    total: number;
    status?: string;
}

export const inputSetoranColumns: Column<Setoran>[] = [
  {
    Header: 'Tanggal',
    accessor: 'tanggal',
  }
]; 