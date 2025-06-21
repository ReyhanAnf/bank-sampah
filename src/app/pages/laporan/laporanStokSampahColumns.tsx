import { Column } from 'react-table';

export interface LaporanStokSampah {
  id: number;
  tanggal: string;
  jenisSampah: string;
  jumlah: number;
  nilai: number;
  stok: string;
  status: string;
}

export const laporanStokSampahColumns: Column<LaporanStokSampah>[] = [
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Jenis Sampah', accessor: 'jenisSampah' },
  { Header: 'Jumlah', accessor: 'jumlah' },
  { Header: 'Nilai', accessor: 'nilai' },
  { Header: 'Stok', accessor: 'stok' },
  { Header: 'Status', accessor: 'status' },
]; 