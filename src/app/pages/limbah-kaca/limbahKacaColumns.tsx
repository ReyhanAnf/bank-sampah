import { Column } from 'react-table';

export interface LimbahKaca {
  tanggal: string;
  jenis: string;
  berat: string;
  sumber: string;
}

export const limbahKacaColumns: Column<LimbahKaca>[] = [
  {
    Header: 'Tanggal',
    accessor: 'tanggal',
  },
  {
    Header: 'Jenis',
    accessor: 'jenis',
  },
  {
    Header: 'Berat/Volume',
    accessor: 'berat',
  },
  {
    Header: 'Sumber',
    accessor: 'sumber',
  },
]; 