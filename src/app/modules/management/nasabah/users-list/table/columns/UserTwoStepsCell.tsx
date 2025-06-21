import {FC} from 'react'

type Props = {
  status?: string
}

const UserTwoStepsCell: FC<Props> = ({status}) => {
  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'Aktif':
        return <div className='badge badge-light-success fw-bolder'>Aktif</div>
      case 'Tidak Aktif':
        return <div className='badge badge-light-danger fw-bolder'>Tidak Aktif</div>
      case 'Suspended':
        return <div className='badge badge-light-warning fw-bolder'>Suspended</div>
      default:
        return <div className='badge badge-light-secondary fw-bolder'>-</div>
    }
  }

  return <>{getStatusBadge(status)}</>
}

export {UserTwoStepsCell} 