import {FC} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import { ToolbarWrapper } from '../../../_metronic/layout/components/toolbar'
import { Content } from '../../../_metronic/layout/components/content'
import { KTCard } from '../../../_metronic/helpers'
import { KTIcon } from '../../../_metronic/helpers'

const DashboardBendahara: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      {/* begin::Row - Financial Overview */}
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        <div className='col-md-3'>
          <KTCard className='bg-light-success'>
            <div className='card-body p-6'>
              <div className='d-flex align-items-center'>
                <div className='symbol symbol-50px me-5'>
                  <span className='symbol-label bg-success'>
                    <KTIcon iconName='arrow-up' className='fs-2x text-white' />
                  </span>
                </div>
                <div className='d-flex flex-column'>
                  <span className='text-gray-800 fw-bold fs-6'>Pemasukan</span>
                  <span className='text-gray-600 fw-semibold fs-7'>Hari ini</span>
                  <span className='text-success fw-bold fs-4'>Rp 850.000</span>
                </div>
              </div>
            </div>
          </KTCard>
        </div>
        <div className='col-md-3'>
          <KTCard className='bg-light-danger'>
            <div className='card-body p-6'>
              <div className='d-flex align-items-center'>
                <div className='symbol symbol-50px me-5'>
                  <span className='symbol-label bg-danger'>
                    <KTIcon iconName='arrow-down' className='fs-2x text-white' />
                  </span>
                </div>
                <div className='d-flex flex-column'>
                  <span className='text-gray-800 fw-bold fs-6'>Pengeluaran</span>
                  <span className='text-gray-600 fw-semibold fs-7'>Hari ini</span>
                  <span className='text-danger fw-bold fs-4'>Rp 320.000</span>
                </div>
              </div>
            </div>
          </KTCard>
        </div>
        <div className='col-md-3'>
          <KTCard className='bg-light-primary'>
            <div className='card-body p-6'>
              <div className='d-flex align-items-center'>
                <div className='symbol symbol-50px me-5'>
                  <span className='symbol-label bg-primary'>
                    <KTIcon iconName='wallet' className='fs-2x text-white' />
                  </span>
                </div>
                <div className='d-flex flex-column'>
                  <span className='text-gray-800 fw-bold fs-6'>Saldo Kas</span>
                  <span className='text-gray-600 fw-semibold fs-7'>Saat ini</span>
                  <span className='text-primary fw-bold fs-4'>Rp 2.150.000</span>
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
                    <KTIcon iconName='user-tick' className='fs-2x text-white' />
                  </span>
                </div>
                <div className='d-flex flex-column'>
                  <span className='text-gray-800 fw-bold fs-6'>Penarikan Pending</span>
                  <span className='text-gray-600 fw-semibold fs-7'>Menunggu</span>
                  <span className='text-warning fw-bold fs-4'>5 Transaksi</span>
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
                <span className='card-label fw-bold fs-3 mb-1'>Manajemen Keuangan</span>
                <span className='text-muted mt-1 fw-semibold fs-7'>Akses cepat ke fitur keuangan</span>
              </h3>
            </div>
            <div className='card-body py-3'>
              <div className='row g-4'>
                <div className='col-md-3'>
                  <div className='d-flex flex-column align-items-center p-4 border border-dashed border-gray-300 rounded bg-light-primary cursor-pointer'>
                    <KTIcon iconName='chart-pie' className='fs-2x text-primary mb-2' />
                    <span className='fw-bold text-gray-800 mb-1'>Laporan Keuangan</span>
                    <span className='text-muted fs-7 text-center'>Lihat laporan keuangan lengkap</span>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='d-flex flex-column align-items-center p-4 border border-dashed border-gray-300 rounded bg-light-success cursor-pointer'>
                    <KTIcon iconName='check-circle' className='fs-2x text-success mb-2' />
                    <span className='fw-bold text-gray-800 mb-1'>Verifikasi Penarikan</span>
                    <span className='text-muted fs-7 text-center'>Proses penarikan nasabah</span>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='d-flex flex-column align-items-center p-4 border border-dashed border-gray-300 rounded bg-light-warning cursor-pointer'>
                    <KTIcon iconName='calculator' className='fs-2x text-warning mb-2' />
                    <span className='fw-bold text-gray-800 mb-1'>Hitung Saldo</span>
                    <span className='text-muted fs-7 text-center'>Perhitungan saldo kas</span>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='d-flex flex-column align-items-center p-4 border border-dashed border-gray-300 rounded bg-light-info cursor-pointer'>
                    <KTIcon iconName='file-down' className='fs-2x text-info mb-2' />
                    <span className='fw-bold text-gray-800 mb-1'>Export Laporan</span>
                    <span className='text-muted fs-7 text-center'>Download laporan Excel</span>
                  </div>
                </div>
              </div>
            </div>
          </KTCard>
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row - Financial Data */}
      <div className='row gx-5 gx-xl-10'>
        {/* begin::Col - Recent Transactions */}
        <div className='col-xxl-6 mb-5 mb-xl-10'>
          <KTCard>
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Transaksi Keuangan Terbaru</span>
                <span className='text-muted mt-1 fw-semibold fs-7'>Daftar transaksi hari ini</span>
              </h3>
            </div>
            <div className='card-body py-3'>
              <div className='table-responsive'>
                <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                  <thead>
                    <tr className='fw-bold text-muted'>
                      <th className='min-w-150px'>Jenis</th>
                      <th className='min-w-140px'>Keterangan</th>
                      <th className='min-w-120px'>Jumlah</th>
                      <th className='min-w-120px'>Waktu</th>
                      <th className='min-w-100px'>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className='badge badge-light-success fs-7 fw-bold'>Pemasukan</span>
                      </td>
                      <td>
                        <span className='text-dark fw-bold text-hover-primary d-block fs-6'>
                          Setoran Sampah
                        </span>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Ahmad Rizki
                        </span>
                      </td>
                      <td>
                        <span className='text-success fw-bold text-hover-primary d-block fs-6'>
                          +Rp 12.500
                        </span>
                      </td>
                      <td>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          09:30
                        </span>
                      </td>
                      <td>
                        <span className='badge badge-light-success fs-7 fw-bold'>Selesai</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='badge badge-light-danger fs-7 fw-bold'>Pengeluaran</span>
                      </td>
                      <td>
                        <span className='text-dark fw-bold text-hover-primary d-block fs-6'>
                          Penarikan Saldo
                        </span>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Budi Santoso
                        </span>
                      </td>
                      <td>
                        <span className='text-danger fw-bold text-hover-primary d-block fs-6'>
                          -Rp 50.000
                        </span>
                      </td>
                      <td>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          10:15
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

        {/* begin::Col - Monthly Summary */}
        <div className='col-xxl-6 mb-5 mb-xl-10'>
          <KTCard>
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Ringkasan Bulanan</span>
                <span className='text-muted mt-1 fw-semibold fs-7'>Performa keuangan bulan ini</span>
              </h3>
            </div>
            <div className='card-body py-3'>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Total Pemasukan</span>
                  <span className='text-success fw-bold fs-5'>Rp 2.500.000</span>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Total Pengeluaran</span>
                  <span className='text-danger fw-bold fs-5'>Rp 1.200.000</span>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Laba Bersih</span>
                  <span className='text-primary fw-bold fs-5'>Rp 1.300.000</span>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Jumlah Transaksi</span>
                  <span className='text-info fw-bold fs-5'>156 Transaksi</span>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                  <span className='text-gray-800 fw-bold fs-6'>Rata-rata per Transaksi</span>
                  <span className='text-warning fw-bold fs-5'>Rp 16.025</span>
                </div>
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

export {DashboardBendahara} 