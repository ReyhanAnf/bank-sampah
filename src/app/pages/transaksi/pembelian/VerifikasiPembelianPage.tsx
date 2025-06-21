import React, { useState, useEffect } from 'react';
import { MetronicTable } from '../../../components/MetronicTable';
import { verifikasiPembelianColumns, Pembelian } from './verifikasiPembelianColumns';
import { KTCard } from '../../../../_metronic/helpers/components/KTCard';
import { KTIcon } from '../../../../_metronic/helpers';
import { MenuComponent } from '../../../../_metronic/assets/ts/components';

const initialData: Pembelian[] = [
  { tanggal: '2024-06-01', supplier: 'PT. Kaca Jaya', jenis: 'Kaca Bening', jumlah: '100 kg', harga: 'Rp 1.000.000', status: 'Menunggu' },
  { tanggal: '2024-06-02', supplier: 'CV. Warna Abadi', jenis: 'Kaca Warna', jumlah: '50 kg', harga: 'Rp 600.000', status: 'Disetujui' },
];

const VerifikasiPembelianPage = () => {
  const [data, setData] = useState<Pembelian[]>(initialData);
  const [filter, setFilter] = useState({ pemasok: '', status: '' });
  const [filterState, setFilterState] = useState({ pemasok: '', status: '' });

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilterState({ ...filterState, [e.target.name]: e.target.value });
  };

  const handleApplyFilter = () => {
    setFilter(filterState);
  };
  
  const handleResetFilter = () => {
    setFilterState({ pemasok: '', status: '' });
    setFilter({ pemasok: '', status: '' });
  };

  const filteredData = data.filter(row =>
    row.supplier.toLowerCase().includes(filter.pemasok.toLowerCase()) &&
    row.status.toLowerCase().includes(filter.status.toLowerCase())
  );

  const handleExport = () => {
    const headers = verifikasiPembelianColumns.map(c => c.Header).join(',');
    const rows = filteredData.map(row => 
        verifikasiPembelianColumns.map(col => (row as any)[col.accessor as string]).join(',')
    );
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'verifikasi-pembelian.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='container-fluid py-10 px-10'>
      <h1 className='mb-4'>Verifikasi Pembelian</h1>
      <KTCard>
        <div className='card-header border-0 pt-6'>
          <div className='card-title'>
          </div>
          {/* begin::Card toolbar */}
          <div className='card-toolbar'>
            <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
              {/* begin::Filter */}
              <button
                type='button'
                className='btn btn-light-primary me-3'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
              >
                <KTIcon iconName='filter' className='fs-2' />
                Filter
              </button>
              {/* end::Filter */}
              {/* begin::Menu */}
              <div className='menu menu-sub menu-sub-dropdown w-300px w-md-325px' data-kt-menu='true'>
                <div className='px-7 py-5'>
                  <div className='fs-5 text-gray-900 fw-bolder'>Filter Options</div>
                </div>
                <div className='separator border-gray-200'></div>
                <div className='px-7 py-5'>
                  <div className='mb-10'>
                    <label className='form-label fs-6 fw-bold'>Pemasok:</label>
                    <input
                      type='text'
                      className='form-control'
                      name='pemasok'
                      value={filterState.pemasok}
                      onChange={handleFilterChange}
                      placeholder='Cari Pemasok...'
                    />
                  </div>
                  <div className='mb-10'>
                    <label className='form-label fs-6 fw-bold'>Status:</label>
                    <select
                      className='form-select'
                      name='status'
                      value={filterState.status}
                      onChange={handleFilterChange}
                    >
                      <option value=''>Semua Status</option>
                      <option value='Diverifikasi'>Diverifikasi</option>
                      <option value='Menunggu'>Menunggu</option>
                    </select>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button type='button' onClick={handleResetFilter} className='btn btn-light btn-active-light-primary fw-bold me-2 px-6'>
                      Reset
                    </button>
                    <button type='button' onClick={handleApplyFilter} className='btn btn-primary fw-bold px-6' data-kt-menu-dismiss='true'>
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              {/* end::Menu */}
              
              {/* begin::Export */}
              <button type='button' className='btn btn-light-primary me-3' onClick={handleExport}>
                <KTIcon iconName='exit-up' className='fs-2' />
                Export
              </button>
              {/* end::Export */}
            </div>
          </div>
          {/* end::Card toolbar */}
        </div>
        <div className='card-body'>
          <MetronicTable columns={verifikasiPembelianColumns} data={filteredData} />
        </div>
      </KTCard>
    </div>
  );
};

export default VerifikasiPembelianPage; 