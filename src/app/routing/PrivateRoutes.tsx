import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const NasabahPage = lazy(() => import('../pages/nasabah/NasabahPage'))
  const LimbahKacaPage = lazy(() => import('../pages/limbah-kaca/LimbahKacaPage'))
  const SilicaPowderPage = lazy(() => import('../pages/silica-powder/SilicaPowderPage'))
  const KeuanganPage = lazy(() => import('../pages/keuangan/KeuanganPage'))
  const ManajemenPenggunaPage = lazy(() => import('../pages/manajemen-pengguna/ManajemenPenggunaPage'))
  const AktivitasPenggunaPage = lazy(() => import('../pages/aktivitas-pengguna/AktivitasPenggunaPage'))

  // Laporan
  const LaporanSetoranPage = lazy(() => import('../pages/laporan/LaporanSetoranPage'))
  const LaporanPenarikanPage = lazy(() => import('../pages/laporan/LaporanPenarikanPage'))
  const LaporanPembelianPage = lazy(() => import('../pages/laporan/LaporanPembelianPage'))
  const LaporanPenjualanPage = lazy(() => import('../pages/laporan/LaporanPenjualanPage'))
  const LaporanProduksiPage = lazy(() => import('../pages/laporan/LaporanProduksiPage'))
  const LaporanKeuanganPage = lazy(() => import('../pages/laporan/LaporanKeuanganPage'))
  const LaporanNasabahPage = lazy(() => import('../pages/laporan/LaporanNasabahPage'))
  const LaporanAktivitasPenggunaPage = lazy(() => import('../pages/laporan/LaporanAktivitasPenggunaPage'))
  const LaporanStokSampahPage = lazy(() => import('../pages/laporan/LaporanStokSampahPage'))
  const LaporanLimbahKacaPage = lazy(() => import('../pages/laporan/LaporanLimbahKacaPage'))
  const LaporanSilicaPowderPage = lazy(() => import('../pages/laporan/LaporanSilicaPowderPage'))

  // Transaksi Setoran
  const InputSetoranPage = lazy(() => import('../pages/transaksi/setoran/InputSetoranPage'))
  const RiwayatSetoranPage = lazy(() => import('../pages/transaksi/setoran/RiwayatSetoranPage'))
  const VerifikasiSetoranPage = lazy(() => import('../pages/transaksi/setoran/VerifikasiSetoranPage'))
  // Transaksi Penarikan
  const InputPenarikanPage = lazy(() => import('../pages/transaksi/penarikan/InputPenarikanPage'))
  const RiwayatPenarikanPage = lazy(() => import('../pages/transaksi/penarikan/RiwayatPenarikanPage'))
  const VerifikasiPenarikanPage = lazy(() => import('../pages/transaksi/penarikan/VerifikasiPenarikanPage'))
  // Transaksi Pembelian
  const InputPembelianPage = lazy(() => import('../pages/transaksi/pembelian/InputPembelianPage'))
  const RiwayatPembelianPage = lazy(() => import('../pages/transaksi/pembelian/RiwayatPembelianPage'))
  const VerifikasiPembelianPage = lazy(() => import('../pages/transaksi/pembelian/VerifikasiPembelianPage'))
  // Transaksi Penjualan
  const InputPenjualanPage = lazy(() => import('../pages/transaksi/penjualan/InputPenjualanPage'))
  const RiwayatPenjualanPage = lazy(() => import('../pages/transaksi/penjualan/RiwayatPenjualanPage'))
  const VerifikasiPenjualanPage = lazy(() => import('../pages/transaksi/penjualan/VerifikasiPenjualanPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Custom Bank Sampah Pages */}
        <Route
          path='management/nasabah/*'
          element={
            <SuspensedView>
              <NasabahPage />
            </SuspensedView>
          }
        />
        <Route
          path='produksi/limbah-kaca/*'
          element={
            <SuspensedView>
              <LimbahKacaPage />
            </SuspensedView>
          }
        />
        <Route
          path='produksi/silica-powder/*'
          element={
            <SuspensedView>
              <SilicaPowderPage />
            </SuspensedView>
          }
        />
        <Route
          path='keuangan/saldo-kas/*'
          element={
            <SuspensedView>
              <KeuanganPage />
            </SuspensedView>
          }
        />
        <Route
          path='pengaturan/manajemen-pengguna/*'
          element={
            <SuspensedView>
              <ManajemenPenggunaPage />
            </SuspensedView>
          }
        />
        <Route
          path='pengaturan/aktivitas-pengguna/*'
          element={
            <SuspensedView>
              <AktivitasPenggunaPage />
            </SuspensedView>
          }
        />
        {/* Laporan */}
        <Route path='laporan/setoran' element={<SuspensedView><LaporanSetoranPage /></SuspensedView>} />
        <Route path='laporan/penarikan' element={<SuspensedView><LaporanPenarikanPage /></SuspensedView>} />
        <Route path='laporan/pembelian' element={<SuspensedView><LaporanPembelianPage /></SuspensedView>} />
        <Route path='laporan/penjualan' element={<SuspensedView><LaporanPenjualanPage /></SuspensedView>} />
        <Route path='laporan/produksi' element={<SuspensedView><LaporanProduksiPage /></SuspensedView>} />
        <Route path='laporan/keuangan' element={<SuspensedView><LaporanKeuanganPage /></SuspensedView>} />
        <Route path='laporan/nasabah' element={<SuspensedView><LaporanNasabahPage /></SuspensedView>} />
        <Route path='laporan/aktivitas-pengguna' element={<SuspensedView><LaporanAktivitasPenggunaPage /></SuspensedView>} />
        <Route path='laporan/stok-sampah' element={<SuspensedView><LaporanStokSampahPage /></SuspensedView>} />
        <Route path='laporan/limbah-kaca' element={<SuspensedView><LaporanLimbahKacaPage /></SuspensedView>} />
        <Route path='laporan/silica-powder' element={<SuspensedView><LaporanSilicaPowderPage /></SuspensedView>} />
        {/* Transaksi Setoran */}
        <Route path='transaksi/setoran/input' element={<SuspensedView><InputSetoranPage /></SuspensedView>} />
        <Route path='transaksi/setoran/riwayat' element={<SuspensedView><RiwayatSetoranPage /></SuspensedView>} />
        <Route path='transaksi/setoran/verifikasi' element={<SuspensedView><VerifikasiSetoranPage /></SuspensedView>} />
        {/* Transaksi Penarikan */}
        <Route path='transaksi/penarikan/input' element={<SuspensedView><InputPenarikanPage /></SuspensedView>} />
        <Route path='transaksi/penarikan/riwayat' element={<SuspensedView><RiwayatPenarikanPage /></SuspensedView>} />
        <Route path='transaksi/penarikan/verifikasi' element={<SuspensedView><VerifikasiPenarikanPage /></SuspensedView>} />
        {/* Transaksi Pembelian */}
        <Route path='transaksi/pembelian/input' element={<SuspensedView><InputPembelianPage /></SuspensedView>} />
        <Route path='transaksi/pembelian/riwayat' element={<SuspensedView><RiwayatPembelianPage /></SuspensedView>} />
        <Route path='transaksi/pembelian/verifikasi' element={<SuspensedView><VerifikasiPembelianPage /></SuspensedView>} />
        {/* Transaksi Penjualan */}
        <Route path='transaksi/penjualan/input' element={<SuspensedView><InputPenjualanPage /></SuspensedView>} />
        <Route path='transaksi/penjualan/riwayat' element={<SuspensedView><RiwayatPenjualanPage /></SuspensedView>} />
        <Route path='transaksi/penjualan/verifikasi' element={<SuspensedView><VerifikasiPenjualanPage /></SuspensedView>} />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
