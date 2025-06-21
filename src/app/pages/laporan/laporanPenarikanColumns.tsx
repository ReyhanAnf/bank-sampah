import { Column } from 'react-table';

export interface LaporanPenarikan {
    id: number;
    tanggal: string;
    nama: string;
    jumlah: number;
    status: string;
}

export const laporanPenarikanColumns: Column<LaporanPenarikan>[] = [
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Nama Nasabah', accessor: 'nama' },
  { Header: 'Jumlah (Rp)', accessor: 'jumlah' },
  { Header: 'Status', accessor: 'status' },
]; 