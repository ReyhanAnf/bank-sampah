import {FC} from 'react'
import {ColumnInstance} from 'react-table'

type Props = {
  column: ColumnInstance<any>
}

const CustomHeaderColumn: FC<Props> = ({column}) => (
  <>
    {column.Header && typeof column.Header === 'string' ? <th {...column.getHeaderProps()}>{column.render('Header')}</th> : column.render('Header')}
  </>
)

export {CustomHeaderColumn}
