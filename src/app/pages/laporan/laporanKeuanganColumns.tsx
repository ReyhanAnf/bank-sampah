import { Column } from 'react-table';

export interface LaporanKeuangan {
    id: number;
    tanggal: string;
    keterangan: string;
    jenisTransaksi: 'Pemasukan' | 'Pengeluaran';
    jumlah: number;
}

export const laporanKeuanganColumns: Column<LaporanKeuangan>[] = [
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Keterangan', accessor: 'keterangan' },
  { Header: 'Jenis Transaksi', accessor: 'jenisTransaksi' },
  { Header: 'Jumlah (Rp)', accessor: 'jumlah' },
]; 