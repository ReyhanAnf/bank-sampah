import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {StatusCell} from './StatusCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {Nasabah} from '../../core/_models'

const nasabahColumns: ReadonlyArray<Column<Nasabah>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Nama' className='min-w-125px' />,
    id: 'nama',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='No. Telp' className='min-w-125px' />,
    accessor: 'noTelp',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Saldo' className='min-w-125px' />
    ),
    id: 'saldo',
    Cell: ({...props}) => <UserLastLoginCell saldo={props.data[props.row.index].saldo} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    id: 'status',
    Cell: ({...props}) => <StatusCell status={props.data[props.row.index].status} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Tanggal Bergabung' className='min-w-125px' />
    ),
    accessor: 'tanggalBergabung',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Aksi' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {nasabahColumns} 