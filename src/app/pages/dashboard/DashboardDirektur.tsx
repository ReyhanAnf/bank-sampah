import {FC} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import { ToolbarWrapper } from '../../../_metronic/layout/components/toolbar'
import { Content } from '../../../_metronic/layout/components/content'
import { KTCard } from '../../../_metronic/helpers'
import { KTIcon } from '../../../_metronic/helpers'

const DashboardDirektur: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      {/* begin::Row - Key Performance Indicators */}
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        <div className='col-md-3'>
          <KTCard className='bg-light-primary'>
            <div className='card-body p-6'>
              <div className='d-flex align-items-center'>
                <div className='symbol symbol-50px me-5'>
                  <span className='symbol-label bg-primary'>
                    <KTIcon iconName='chart-line' className='fs-2x text-white' />
                  </span>
                </div>
                <div className='d-flex flex-column'>
                  <span className='text-gray-800 fw-bold fs-6'>Pertumbuhan</span>
                  <span className='text-gray-600 fw-semibold fs-7'>Bulan ini</span>
                  <span className='text-primary fw-bold fs-4'>+15.2%</span>
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
                    <KTIcon iconName='user-plus' className='fs-2x text-white' />
                  </span>
                </div>
                <div className='d-flex flex-column'>
                  <span className='text-gray-800 fw-bold fs-6'>Nasabah Baru</span>
                  <span className='text-gray-600 fw-semibold fs-7'>Bulan ini</span>
                  <span className='text-success fw-bold fs-4'>28</span>
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
                    <KTIcon iconName='scale' className='fs-2x text-white' />
                  </span>
                </div>
                <div className='d-flex flex-column'>
                  <span className='text-gray-800 fw-bold fs-6'>Total Sampah</span>
                  <span className='text-gray-600 fw-semibold fs-7'>Bulan ini</span>
                  <span className='text-warning fw-bold fs-4'>2.5 Ton</span>
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
                    <KTIcon iconName='dollar' className='fs-2x text-white' />
                  </span>
                </div>
                <div className='d-flex flex-column'>
                  <span className='text-gray-800 fw-bold fs-6'>Laba Bersih</span>
                  <span className='text-gray-600 fw-semibold fs-7'>Bulan ini</span>
                  <span className='text-info fw-bold fs-4'>Rp 1.3M</span>
                </div>
              </div>
            </div>
          </KTCard>
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row - Strategic Overview */}
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        <div className='col-12'>
          <KTCard>
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Overview Strategis</span>
                <span className='text-muted mt-1 fw-semibold fs-7'>Analisis performa dan tren bisnis</span>
              </h3>
            </div>
            <div className='card-body py-3'>
              <div className='row g-4'>
                <div className='col-md-3'>
                  <div className='d-flex flex-column align-items-center p-4 border border-dashed border-gray-300 rounded bg-light-primary cursor-pointer'>
                    <KTIcon iconName='chart-simple' className='fs-2x text-primary mb-2' />
                    <span className='fw-bold text-gray-800 mb-1'>Analisis Performa</span>
                    <span className='text-muted fs-7 text-center'>Lihat tren dan analisis data</span>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='d-flex flex-column align-items-center p-4 border border-dashed border-gray-300 rounded bg-light-success cursor-pointer'>
                    <KTIcon iconName='file-text' className='fs-2x text-success mb-2' />
                    <span className='fw-bold text-gray-800 mb-1'>Laporan Strategis</span>
                    <span className='text-muted fs-7 text-center'>Laporan eksekutif bulanan</span>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='d-flex flex-column align-items-center p-4 border border-dashed border-gray-300 rounded bg-light-warning cursor-pointer'>
                    <KTIcon iconName='users' className='fs-2x text-warning mb-2' />
                    <span className='fw-bold text-gray-800 mb-1'>Manajemen SDM</span>
                    <span className='text-muted fs-7 text-center'>Monitor kinerja tim</span>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='d-flex flex-column align-items-center p-4 border border-dashed border-gray-300 rounded bg-light-info cursor-pointer'>
                    <KTIcon iconName='gear' className='fs-2x text-info mb-2' />
                    <span className='fw-bold text-gray-800 mb-1'>Pengaturan Sistem</span>
                    <span className='text-muted fs-7 text-center'>Konfigurasi aplikasi</span>
                  </div>
                </div>
              </div>
            </div>
          </KTCard>
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row - Performance Data */}
      <div className='row gx-5 gx-xl-10'>
        {/* begin::Col - Top Performers */}
        <div className='col-xxl-6 mb-5 mb-xl-10'>
          <KTCard>
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Top Performers</span>
                <span className='text-muted mt-1 fw-semibold fs-7'>Operator dengan kinerja terbaik</span>
              </h3>
            </div>
            <div className='card-body py-3'>
              <div className='table-responsive'>
                <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                  <thead>
                    <tr className='fw-bold text-muted'>
                      <th className='min-w-150px'>Operator</th>
                      <th className='min-w-140px'>Setoran</th>
                      <th className='min-w-120px'>Nasabah</th>
                      <th className='min-w-120px'>Pendapatan</th>
                      <th className='min-w-100px'>Rating</th>
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
                              Operator Senior
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='text-dark fw-bold text-hover-primary d-block fs-6'>
                          156 Setoran
                        </span>
                      </td>
                      <td>
                        <span className='text-dark fw-bold text-hover-primary d-block fs-6'>
                          45 Nasabah
                        </span>
                      </td>
                      <td>
                        <span className='text-success fw-bold text-hover-primary d-block fs-6'>
                          Rp 2.8M
                        </span>
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <span className='text-warning fw-bold fs-6 me-2'>4.9</span>
                          <div className='d-flex align-items-center'>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <KTIcon key={star} iconName='star' className='fs-7 text-warning' />
                            ))}
                          </div>
                        </div>
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
                              Operator
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='text-dark fw-bold text-hover-primary d-block fs-6'>
                          142 Setoran
                        </span>
                      </td>
                      <td>
                        <span className='text-dark fw-bold text-hover-primary d-block fs-6'>
                          38 Nasabah
                        </span>
                      </td>
                      <td>
                        <span className='text-success fw-bold text-hover-primary d-block fs-6'>
                          Rp 2.5M
                        </span>
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <span className='text-warning fw-bold fs-6 me-2'>4.7</span>
                          <div className='d-flex align-items-center'>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <KTIcon key={star} iconName='star' className='fs-7 text-warning' />
                            ))}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </KTCard>
        </div>
        {/* end::Col */}

        {/* begin::Col - Business Trends */}
        <div className='col-xxl-6 mb-5 mb-xl-10'>
          <KTCard>
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Tren Bisnis</span>
                <span className='text-muted mt-1 fw-semibold fs-7'>Analisis tren 6 bulan terakhir</span>
              </h3>
            </div>
            <div className='card-body py-3'>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Pertumbuhan Nasabah</span>
                  <span className='text-success fw-bold fs-6'>+12.5%</span>
                </div>
                <div className='progress h-7px bg-light-success mb-4'>
                  <div className='progress-bar bg-success' style={{width: '75%'}}></div>
                </div>
                
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Peningkatan Pendapatan</span>
                  <span className='text-primary fw-bold fs-6'>+18.3%</span>
                </div>
                <div className='progress h-7px bg-light-primary mb-4'>
                  <div className='progress-bar bg-primary' style={{width: '85%'}}></div>
                </div>
                
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Efisiensi Operasional</span>
                  <span className='text-warning fw-bold fs-6'>+8.7%</span>
                </div>
                <div className='progress h-7px bg-light-warning mb-4'>
                  <div className='progress-bar bg-warning' style={{width: '65%'}}></div>
                </div>
                
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Kepuasan Nasabah</span>
                  <span className='text-info fw-bold fs-6'>+15.2%</span>
                </div>
                <div className='progress h-7px bg-light-info mb-4'>
                  <div className='progress-bar bg-info' style={{width: '90%'}}></div>
                </div>
                
                <div className='d-flex justify-content-between align-items-center'>
                  <span className='text-gray-800 fw-bold fs-6'>Retensi Nasabah</span>
                  <span className='text-danger fw-bold fs-6'>+22.1%</span>
                </div>
                <div className='progress h-7px bg-light-danger'>
                  <div className='progress-bar bg-danger' style={{width: '95%'}}></div>
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

export {DashboardDirektur} 