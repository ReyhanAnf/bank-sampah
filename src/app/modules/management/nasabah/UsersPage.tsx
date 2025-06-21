import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/UsersList'

const nasabahBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manajemen Nasabah',
    path: '/management/nasabah',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const UsersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path=''
          element={
            <>
              <PageTitle breadcrumbs={nasabahBreadcrumbs}>Daftar Nasabah</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/management/nasabah' />} />
    </Routes>
  )
}

export default UsersPage
