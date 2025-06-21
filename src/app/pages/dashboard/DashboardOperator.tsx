import {FC} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import { ToolbarWrapper } from '../../../_metronic/layout/components/toolbar'
import { Content } from '../../../_metronic/layout/components/content'
import { KTCard } from '../../../_metronic/helpers'
import { KTIcon } from '../../../_metronic/helpers'

const DashboardOperator: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      {/* begin::Row - Quick Stats */}
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        <div className='col-md-3'>
          <KTCard className='bg-light-primary'>
            <div className='card-body p-6'>
              <div className='d-flex align-items-center'>
                <div className='symbol symbol-50px me-5'>
                  <span className='symbol-label bg-primary'>
                    <KTIcon iconName='plus' className='fs-2x text-white' />
                  </span>
                </div>
                <div className='d-flex flex-column'>
                  <span className='text-gray-800 fw-bold fs-6'>Setoran Hari Ini</span>
                  <span className='text-primary fw-bold fs-4'>24 Transaksi</span>
                </div>
              </div>
            </div>
          </KTCard>
        </div>
        <div className='col-md-3'>
          <KTCard className='bg-light-success'>
            <div className='card-body p-6'>
              <div className='d-flex align-items-center'>
                <div className='symbol symbol-50px me-5'>
                  <span className='symbol-label bg-success'>
                    <KTIcon iconName='user' className='fs-2x text-white' />
                  </span>
                </div>
                <div className='d-flex flex-column'>
                  <span className='text-gray-800 fw-bold fs-6'>Nasabah Aktif</span>
                  <span className='text-success fw-bold fs-4'>127 Orang</span>
                </div>
              </div>
            </div>
          </KTCard>
        </div>
        <div className='col-md-3'>
          <KTCard className='bg-light-warning'>
            <div className='card-body p-6'>
              <div className='d-flex align-items-center'>
                <div className='symbol symbol-50px me-5'>
                  <span className='symbol-label bg-warning'>
                    <KTIcon iconName='minus' className='fs-2x text-white' />
                  </span>
                </div>
                <div className='d-flex flex-column'>
                  <span className='text-gray-800 fw-bold fs-6'>Penarikan Pending</span>
                  <span className='text-warning fw-bold fs-4'>5 Transaksi</span>
                </div>
              </div>
            </div>
          </KTCard>
        </div>
        <div className='col-md-3'>
          <KTCard className='bg-light-info'>
            <div className='card-body p-6'>
              <div className='d-flex align-items-center'>
                <div className='symbol symbol-50px me-5'>
                  <span className='symbol-label bg-info'>
                    <KTIcon iconName='scale' className='fs-2x text-white' />
                  </span>
                </div>
                <div className='d-flex flex-column'>
                  <span className='text-gray-800 fw-bold fs-6'>Total Berat</span>
                  <span className='text-info fw-bold fs-4'>156.5 kg</span>
                </div>
              </div>
            </div>
          </KTCard>
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row - Quick Actions */}
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        <div className='col-12'>
          <KTCard>
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Aksi Cepat</span>
                <span className='text-muted mt-1 fw-semibold fs-7'>Pilih aksi yang ingin dilakukan</span>
              </h3>
            </div>
            <div className='card-body py-3'>
              <div className='row g-4'>
                <div className='col-md-3'>
                  <div className='d-flex flex-column align-items-center p-4 border border-dashed border-gray-300 rounded bg-light-primary cursor-pointer'>
                    <KTIcon iconName='plus' className='fs-2x text-primary mb-2' />
                    <span className='fw-bold text-gray-800 mb-1'>Input Setoran</span>
                    <span className='text-muted fs-7 text-center'>Catat setoran sampah dari nasabah</span>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='d-flex flex-column align-items-center p-4 border border-dashed border-gray-300 rounded bg-light-success cursor-pointer'>
                    <KTIcon iconName='minus' className='fs-2x text-success mb-2' />
                    <span className='fw-bold text-gray-800 mb-1'>Input Penarikan</span>
                    <span className='text-muted fs-7 text-center'>Proses penarikan saldo nasabah</span>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='d-flex flex-column align-items-center p-4 border border-dashed border-gray-300 rounded bg-light-warning cursor-pointer'>
                    <KTIcon iconName='user' className='fs-2x text-warning mb-2' />
                    <span className='fw-bold text-gray-800 mb-1'>Tambah Nasabah</span>
                    <span className='text-muted fs-7 text-center'>Daftarkan nasabah baru</span>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='d-flex flex-column align-items-center p-4 border border-dashed border-gray-300 rounded bg-light-info cursor-pointer'>
                    <KTIcon iconName='chart-line' className='fs-2x text-info mb-2' />
                    <span className='fw-bold text-gray-800 mb-1'>Lihat Laporan</span>
                    <span className='text-muted fs-7 text-center'>Akses laporan harian</span>
                  </div>
                </div>
              </div>
            </div>
          </KTCard>
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row - Recent Activities */}
      <div className='row gx-5 gx-xl-10'>
        {/* begin::Col - Recent Setoran */}
        <div className='col-xxl-6 mb-5 mb-xl-10'>
          <KTCard>
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Setoran Terbaru</span>
                <span className='text-muted mt-1 fw-semibold fs-7'>Daftar setoran hari ini</span>
              </h3>
            </div>
            <div className='card-body py-3'>
              <div className='table-responsive'>
                <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                  <thead>
                    <tr className='fw-bold text-muted'>
                      <th className='min-w-150px'>Nasabah</th>
                      <th className='min-w-140px'>Jenis Sampah</th>
                      <th className='min-w-120px'>Berat</th>
                      <th className='min-w-120px'>Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='symbol symbol-45px me-5'>
                            <img src={toAbsoluteUrl('media/avatars/300-1.jpg')} alt='' />
                          </div>
                          <div className='d-flex justify-content-start flex-column'>
                            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                              Ahmad Rizki
                            </a>
                            <span className='text-muted fw-semibold text-muted d-block fs-7'>
                              ID: NSB001
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='badge badge-light-primary fs-7 fw-bold'>Botol Plastik</span>
                      </td>
                      <td>
                        <span className='text-dark fw-bold text-hover-primary d-block fs-6'>
                          2.5 kg
                        </span>
                      </td>
                      <td>
                        <span className='text-dark fw-bold text-hover-primary d-block fs-6'>
                          Rp 12.500
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='symbol symbol-45px me-5'>
                            <img src={toAbsoluteUrl('media/avatars/300-2.jpg')} alt='' />
                          </div>
                          <div className='d-flex justify-content-start flex-column'>
                            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                              Siti Nurhaliza
                            </a>
                            <span className='text-muted fw-semibold text-muted d-block fs-7'>
                              ID: NSB002
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='badge badge-light-success fs-7 fw-bold'>Kertas</span>
                      </td>
                      <td>
                        <span className='text-dark fw-bold text-hover-primary d-block fs-6'>
                          1.8 kg
                        </span>
                      </td>
                      <td>
                        <span className='text-dark fw-bold text-hover-primary d-block fs-6'>
                          Rp 9.000
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </KTCard>
        </div>
        {/* end::Col */}

        {/* begin::Col - Penarikan Pending */}
        <div className='col-xxl-6 mb-5 mb-xl-10'>
          <KTCard>
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Penarikan Pending</span>
                <span className='text-muted mt-1 fw-semibold fs-7'>Menunggu verifikasi</span>
              </h3>
            </div>
            <div className='card-body py-3'>
              <div className='table-responsive'>
                <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                  <thead>
                    <tr className='fw-bold text-muted'>
                      <th className='min-w-150px'>Nasabah</th>
                      <th className='min-w-120px'>Jumlah</th>
                      <th className='min-w-120px'>Tanggal</th>
                      <th className='min-w-100px'>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='symbol symbol-45px me-5'>
                            <img src={toAbsoluteUrl('media/avatars/300-3.jpg')} alt='' />
                          </div>
                          <div className='d-flex justify-content-start flex-column'>
                            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                              Budi Santoso
                            </a>
                            <span className='text-muted fw-semibold text-muted d-block fs-7'>
                              ID: NSB003
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='text-dark fw-bold text-hover-primary d-block fs-6'>
                          Rp 50.000
                        </span>
                      </td>
                      <td>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Hari ini
                        </span>
                      </td>
                      <td>
                        <span className='badge badge-light-warning fs-7 fw-bold'>Pending</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </KTCard>
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
    </Content>
  </>
)

export {DashboardOperator} 