import { Column } from 'react-table';

export interface LaporanNasabah {
    id: number;
    nama: string;
    alamat: string;
    telepon: string;
    saldo: number;
    statusKeanggotaan: 'Aktif' | 'Tidak Aktif';
}

export const laporanNasabahColumns: Column<LaporanNasabah>[] = [
  { Header: 'Nama', accessor: 'nama' },
  { Header: 'Alamat', accessor: 'alamat' },
  { Header: 'Telepon', accessor: 'telepon' },
  { Header: 'Saldo (Rp)', accessor: 'saldo' },
  { Header: 'Status', accessor: 'statusKeanggotaan' },
]; 