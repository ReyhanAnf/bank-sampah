import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {KTCardBody} from '../../../../../../_metronic/helpers'

const UsersTable = () => {
  const users = useQueryResponseData()
  const isLoading = useQueryResponseLoading()

  if (isLoading) {
    return (
      <KTCardBody className='py-4'>
        <div className='d-flex justify-content-center'>
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      </KTCardBody>
    )
  }

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table className='table align-middle table-row-dashed fs-6 gy-5'>
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              <th>Nama</th>
              <th>Email</th>
              <th>No. Telp</th>
              <th>Saldo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold'>
            {users.length > 0 ? (
              users.map((user: any, index: number) => (
                <tr key={index}>
                  <td>{user.nama}</td>
                  <td>{user.email}</td>
                  <td>{user.noTelp}</td>
                  <td>Rp {user.saldo?.toLocaleString('id-ID') || '0'}</td>
                  <td>
                    <span className={`badge badge-light-${user.status === 'Aktif' ? 'success' : 'danger'} fw-bolder`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    Tidak ada data nasabah ditemukan
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </KTCardBody>
  )
}

export {UsersTable} 