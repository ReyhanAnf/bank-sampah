import { Column } from 'react-table';
import { toAbsoluteUrl } from '../../../_metronic/helpers';

export interface Nasabah {
    id: number;
    nama: string;
    noTelp: string;
    saldo: number;
    status: string;
    tanggalBergabung: string;
    alamat: string;
}

export const nasabahColumns: Column<Nasabah>[] = [
  {
    Header: 'Nama',
    accessor: 'nama',
    Cell: ({ row }) => (
      <div className='d-flex align-items-center'>
        <div className='symbol symbol-45px me-5'>
          <img src={toAbsoluteUrl(`media/avatars/300-${(row.index % 5) + 1}.jpg`)} alt='' />
        </div>
        <div className='d-flex justify-content-start flex-column'>
          <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
            {row.original.nama}
          </a>
          <span className='text-muted fw-semibold text-muted d-block fs-7'>
            ID: NSB{String(row.original.id).padStart(3, '0')}
          </span>
        </div>
      </div>
    ),
  },
  {
    Header: 'No. Telepon',
    accessor: 'noTelp',
  },
  {
    Header: 'Saldo',
    accessor: 'saldo',
    Cell: ({ value }) => (
      <span className='text-success fw-bold fs-6'>
        Rp {value.toLocaleString('id-ID')}
      </span>
    ),
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ value }) => (
      <span className={`badge badge-light-${value === 'Aktif' ? 'success' : 'danger'} fs-7 fw-bold`}>
        {value}
      </span>
    ),
  },
  {
    Header: 'Tanggal Bergabung',
    accessor: 'tanggalBergabung',
    Cell: ({ value }) => {
      const date = new Date(value);
      return (
        <span className='text-muted fw-semibold text-muted d-block fs-7'>
          {date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })}
        </span>
      );
    },
  },
  {
    Header: 'Alamat',
    accessor: 'alamat',
    Cell: ({ value }) => (
      <span className='text-muted fw-semibold text-muted d-block fs-7' style={{ maxWidth: '200px' }}>
        {value}
      </span>
    ),
  },
]; 