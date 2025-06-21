import {ID, Response} from '../../../../../../_metronic/helpers'
export type Nasabah = {
  id?: ID
  nama?: string
  avatar?: string
  email?: string
  noTelp?: string
  alamat?: string
  saldo?: number
  status?: string
  tanggalBergabung?: string
  totalSetoran?: number
  totalPenarikan?: number
  online?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type NasabahQueryResponse = Response<Array<Nasabah>>
export type UsersQueryResponse = Response<Array<Nasabah>>

export const initialNasabah: Nasabah = {
  avatar: 'avatars/300-6.jpg',
  nama: '',
  email: '',
  noTelp: '',
  alamat: '',
  saldo: 0,
  status: 'Aktif',
  tanggalBergabung: '',
  totalSetoran: 0,
  totalPenarikan: 0,
}
