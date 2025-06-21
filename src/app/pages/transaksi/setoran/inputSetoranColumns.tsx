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

export const inputSetoranColumns: Column<Setoran>[] = [
  {
    Header: 'Tanggal',
    accessor: 'tanggal',
  }
]; 