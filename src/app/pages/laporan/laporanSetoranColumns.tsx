import { Column } from 'react-table';

export interface LaporanSetoran {
    id: number;
    tanggal: string;
    nama: string;
    jenisSampah: string;
    berat: number;
    total: number;
}

export const laporanSetoranColumns: Column<LaporanSetoran>[] = [
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Nama Nasabah', accessor: 'nama' },
  { Header: 'Jenis Sampah', accessor: 'jenisSampah' },
  { Header: 'Berat (kg)', accessor: 'berat' },
  { Header: 'Total (Rp)', accessor: 'total' },
]; 