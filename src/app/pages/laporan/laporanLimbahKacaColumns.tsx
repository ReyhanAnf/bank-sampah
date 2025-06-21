import { Column } from 'react-table';

export interface LaporanLimbahKaca {
    id: number;
    tanggal: string;
    jenis: string;
    berat: number;
    sumber: string;
}

export const laporanLimbahKacaColumns: Column<LaporanLimbahKaca>[] = [
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Jenis Kaca', accessor: 'jenis' },
  { Header: 'Berat (kg)', accessor: 'berat' },
  { Header: 'Sumber', accessor: 'sumber' },
]; 