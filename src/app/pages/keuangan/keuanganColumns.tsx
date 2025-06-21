import {Column} from 'react-table';

export type Keuangan = {
  tanggal: string;
  keterangan: string;
  jenis: string;
  jumlah: string;
};

export const keuanganColumns: Column<Keuangan>[] = [
  {
    Header: 'Tanggal',
    accessor: 'tanggal',
  },
  {
    Header: 'Keterangan',
    accessor: 'keterangan',
  },
  {
    Header: 'Jenis',
    accessor: 'jenis',
  },
  {
    Header: 'Jumlah',
    accessor: 'jumlah',
  },
]; 