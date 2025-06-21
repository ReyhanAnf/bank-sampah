import { Column } from 'react-table';
import { KTIcon } from '../../../../_metronic/helpers';

export interface Penjualan {
  id: number;
  tanggal: string;
  namaBarang: string;
  jumlah: number;
  harga: number;
  total: number;
  pembeli: string;
  status?: string;
  selected?: boolean;
}

export const verifikasiPenjualanColumns: Column<Penjualan>[] = [
  {
    Header: '',
    accessor: 'selected',
    Cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.original.selected || false}
        onChange={(e) => {
          // Handle checkbox change
          console.log('Checkbox changed for row:', row.original.id);
        }}
        className="form-check-input"
      />
    ),
  },
  { Header: 'Tanggal', accessor: 'tanggal' },
  { Header: 'Pembeli', accessor: 'pembeli' },
  { Header: 'Total', accessor: 'total' },
  { Header: 'Status', accessor: 'status' },
  {
    Header: 'Aksi',
    accessor: 'id',
    Cell: ({ row }) => (
      <div className="d-flex gap-2">
        <button
          className="btn btn-sm btn-success"
          onClick={() => {
            // Handle approve
            console.log('Approve clicked for row:', row.original.id);
          }}
        >
          <KTIcon iconName="check" className="fs-2" />
          Setujui
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            // Handle reject
            console.log('Reject clicked for row:', row.original.id);
          }}
        >
          <KTIcon iconName="cross" className="fs-2" />
          Tolak
        </button>
      </div>
    ),
  },
]; 