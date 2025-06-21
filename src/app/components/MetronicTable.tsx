import React, { useMemo, useState } from 'react';
import { useTable, Column, Row } from 'react-table';

interface MetronicTableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
}

export function MetronicTable<T extends object>({ columns, data, loading, emptyMessage }: MetronicTableProps<T>) {
  const [page, setPage] = useState(0);
  const pageSize = 10;
  const pagedData = useMemo(() => data.slice(page * pageSize, (page + 1) * pageSize), [data, page]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: pagedData });

  return (
    <div className='table-responsive'>
      <table className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer' {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
          {loading ? (
            <tr><td colSpan={columns.length}>Loading...</td></tr>
          ) : rows.length > 0 ? (
            rows.map((row: Row<T>, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={columns.length} className='text-center'>{emptyMessage || 'Tidak ada data.'}</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* Pagination */}
      {data.length > pageSize && (
        <div className='d-flex justify-content-end align-items-center gap-2 mt-2'>
          <button className='btn btn-sm btn-light' disabled={page === 0} onClick={() => setPage(p => p - 1)}>Sebelumnya</button>
          <span>Halaman {page + 1} / {Math.ceil(data.length / pageSize)}</span>
          <button className='btn btn-sm btn-light' disabled={(page + 1) * pageSize >= data.length} onClick={() => setPage(p => p + 1)}>Berikutnya</button>
        </div>
      )}
    </div>
  );
} 