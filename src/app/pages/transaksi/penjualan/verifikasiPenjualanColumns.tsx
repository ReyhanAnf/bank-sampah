import { Column } from 'react-table';
import { Penjualan } from './inputPenjualanColumns';

export const verifikasiPenjualanColumns: Column<Penjualan>[] = [
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Pembeli', accessor: 'pembeli' },
  { Header: 'Total', accessor: 'total' },
  { Header: 'Status', accessor: 'status' },
  {
    Header: 'Aksi',
    accessor: 'id',
    Cell: ({ row }) => (
        <button className="btn btn-sm btn-primary" disabled={row.original.status !== 'Menunggu'}>
            Verifikasi
        </button>
    ),
  },
]; 