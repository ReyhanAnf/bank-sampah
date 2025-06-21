import { Column } from 'react-table';

export interface LaporanPembelian {
    id: number;
    tanggal: string;
    pemasok: string;
    namaBarang: string;
    jumlah: number;
    total: number;
}

export const laporanPembelianColumns: Column<LaporanPembelian>[] = [
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Pemasok', accessor: 'pemasok' },
  { Header: 'Nama Barang', accessor: 'namaBarang' },
  { Header: 'Jumlah', accessor: 'jumlah' },
  { Header: 'Total (Rp)', accessor: 'total' },
]; 