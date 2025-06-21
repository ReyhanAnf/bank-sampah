import {Column} from 'react-table';

export type SilicaPowder = {
  tanggal: string;
  jumlah: string;
  kualitas: string;
  sumber: string;
};

export const silicaPowderColumns: Column<SilicaPowder>[] = [
  {
    Header: 'Tanggal Produksi',
    accessor: 'tanggal',
  },
  {
    Header: 'Jumlah',
    accessor: 'jumlah',
  },
  {
    Header: 'Kualitas',
    accessor: 'kualitas',
  },
  {
    Header: 'Sumber',
    accessor: 'sumber',
  },
]; 