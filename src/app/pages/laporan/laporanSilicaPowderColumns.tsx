import { Column } from 'react-table';

export interface LaporanSilicaPowder {
  id: number;
  tanggal: string;
  kualitas: string;
  berat: number;
  sumber: string;
}

export const laporanSilicaPowderColumns: ReadonlyArray<Column<LaporanSilicaPowder>> = [
  {
    Header: 'Tanggal',
    accessor: 'tanggal',
  },
  {
    Header: 'Kualitas',
    accessor: 'kualitas',
  },
  {
    Header: 'Berat (kg)',
    accessor: 'berat',
  },
  {
    Header: 'Sumber',
    accessor: 'sumber',
  },
]; 