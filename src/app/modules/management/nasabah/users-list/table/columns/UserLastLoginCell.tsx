import {FC} from 'react'

type Props = {
  saldo?: number
}

const UserLastLoginCell: FC<Props> = ({saldo}) => (
  <div className='badge badge-light fw-bolder'>
    Rp {saldo?.toLocaleString('id-ID') || '0'}
  </div>
)

export {UserLastLoginCell}
