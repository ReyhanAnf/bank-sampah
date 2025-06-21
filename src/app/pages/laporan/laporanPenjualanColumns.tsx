import { Column } from 'react-table';

export interface LaporanPenjualan {
    id: number;
    tanggal: string;
    pembeli: string;
    namaBarang: string;
    jumlah: number;
    total: number;
}

export const laporanPenjualanColumns: Column<LaporanPenjualan>[] = [
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Pembeli', accessor: 'pembeli' },
  { Header: 'Nama Barang', accessor: 'namaBarang' },
  { Header: 'Jumlah', accessor: 'jumlah' },
  { Header: 'Total (Rp)', accessor: 'total' },
]; 