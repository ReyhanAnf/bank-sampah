import { Column } from 'react-table';
import { KTIcon } from '../../../../_metronic/helpers';

export interface Setoran {
    id: number;
    tanggal: string;
    nasabah: string;
    jenis: string;
    berat: string;
    nilai: string;
    status: string;
    selected?: boolean;
}

export const verifikasiSetoranColumns: Column<Setoran>[] = [
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
  {
    Header: 'Tanggal',
    accessor: 'tanggal',
  },
  {
    Header: 'Nasabah',
    accessor: 'nasabah',
  },
  {
    Header: 'Jenis',
    accessor: 'jenis',
  },
  {
    Header: 'Berat',
    accessor: 'berat',
  },
  {
    Header: 'Nilai',
    accessor: 'nilai',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
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