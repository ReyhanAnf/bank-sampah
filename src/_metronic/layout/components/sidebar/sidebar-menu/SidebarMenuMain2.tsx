import {SidebarMenuItem} from './SidebarMenuItem';
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub';

const SidebarMenuMain2 = () => {
  return (
    <>
      {/* Section: Dashboard */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Dashboard</span>
        </div>
      </div>
      <SidebarMenuItem
        to='/dashboard'
        title='Dashboard'
        icon='element-11'
        fontIcon='bi-speedometer2'
      />

      {/* Section: Manajemen */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Manajemen</span>
        </div>
      </div>
      <SidebarMenuItem
        to='/management/nasabah'
        title='Nasabah'
        icon='profile-circle'
        fontIcon='bi-people'
      />

      {/* Section: Transaksi */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Transaksi</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/transaksi/setoran'
        title='Setoran Sampah'
        icon='arrow-down-left'
        fontIcon='bi-arrow-down-left'
      >
        <SidebarMenuItem to='/transaksi/setoran/input' title='Input Setoran' hasBullet={true} />
        <SidebarMenuItem to='/transaksi/setoran/verifikasi' title='Verifikasi Setoran' hasBullet={true} />
        <SidebarMenuItem to='/transaksi/setoran/riwayat' title='Riwayat Setoran' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/transaksi/penarikan'
        title='Penarikan Saldo'
        icon='arrow-up-right'
        fontIcon='bi-arrow-up-right'
      >
        <SidebarMenuItem to='/transaksi/penarikan/input' title='Input Penarikan' hasBullet={true} />
        <SidebarMenuItem to='/transaksi/penarikan/verifikasi' title='Verifikasi Penarikan' hasBullet={true} />
        <SidebarMenuItem to='/transaksi/penarikan/riwayat' title='Riwayat Penarikan' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/transaksi/pembelian'
        title='Transaksi Pembelian'
        icon='cart'
        fontIcon='bi-cart'
      >
        <SidebarMenuItem to='/transaksi/pembelian/input' title='Input Pembelian' hasBullet={true} />
        <SidebarMenuItem to='/transaksi/pembelian/verifikasi' title='Verifikasi Pembelian' hasBullet={true} />
        <SidebarMenuItem to='/transaksi/pembelian/riwayat' title='Riwayat Pembelian' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/transaksi/penjualan'
        title='Transaksi Penjualan'
        icon='cash-stack'
        fontIcon='bi-cash-stack'
      >
        <SidebarMenuItem to='/transaksi/penjualan/input' title='Input Penjualan' hasBullet={true} />
        <SidebarMenuItem to='/transaksi/penjualan/verifikasi' title='Verifikasi Penjualan' hasBullet={true} />
        <SidebarMenuItem to='/transaksi/penjualan/riwayat' title='Riwayat Penjualan' hasBullet={true} />
      </SidebarMenuItemWithSub>

      {/* Section: Produksi */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Produksi</span>
        </div>
      </div>
      <SidebarMenuItem
        to='/produksi/limbah-kaca'
        title='Limbah Kaca'
        icon='cube-2'
        fontIcon='bi-gem'
      />
      <SidebarMenuItem
        to='/produksi/silica-powder'
        title='Silica Powder'
        icon='flask'
        fontIcon='bi-droplet-half'
      />

      {/* Section: Keuangan */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Keuangan</span>
        </div>
      </div>
      <SidebarMenuItem
        to='/keuangan/saldo-kas'
        icon='dollar'
        title='Keuangan'
        fontIcon='bi-cash-stack'
      />

      {/* Section: Laporan */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Laporan</span>
        </div>
      </div>
      <SidebarMenuItem to='/laporan/setoran' title='Laporan Setoran' icon='document' fontIcon='bi-file-earmark-arrow-down' />
      <SidebarMenuItem to='/laporan/penarikan' title='Laporan Penarikan' icon='document' fontIcon='bi-file-earmark-arrow-up' />
      <SidebarMenuItem to='/laporan/pembelian' title='Laporan Pembelian' icon='cart' fontIcon='bi-cart' />
      <SidebarMenuItem to='/laporan/penjualan' title='Laporan Penjualan' icon='cash-stack' fontIcon='bi-cash-stack' />
      <SidebarMenuItem to='/laporan/produksi' title='Laporan Produksi' icon='chart-line' fontIcon='bi-graph-up' />
      <SidebarMenuItem to='/laporan/keuangan' title='Laporan Keuangan' icon='dollar' fontIcon='bi-cash-stack' />
      <SidebarMenuItem to='/laporan/nasabah' title='Laporan Nasabah' icon='profile-circle' fontIcon='bi-people' />
      <SidebarMenuItem to='/laporan/stok-sampah' title='Laporan Stok Sampah' icon='box' fontIcon='bi-box' />
      <SidebarMenuItem to='/laporan/limbah-kaca' title='Laporan Limbah Kaca' icon='cube-2' fontIcon='bi-gem' />
      <SidebarMenuItem to='/laporan/silica-powder' title='Laporan Silica Powder' icon='flask' fontIcon='bi-droplet-half' />

      {/* Section: Pengguna */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Pengguna</span>
        </div>
      </div>
      <SidebarMenuItem
        to='/pengaturan/manajemen-pengguna'
        icon='user-square'
        title='Manajemen Pengguna'
        fontIcon='bi-person-rolodex'
      />
      <SidebarMenuItem
        to='/pengaturan/aktivitas-pengguna'
        icon='eye'
        title='Aktivitas Pengguna'
        fontIcon='bi-person-lines-fill'
      />
    </>
  )
}

export {SidebarMenuMain2}