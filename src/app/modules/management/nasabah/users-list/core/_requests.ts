import { ID, Response } from "../../../../../../_metronic/helpers";
import { Nasabah, UsersQueryResponse } from "./_models";

// Dummy data for nasabah
const dummyNasabahData: Nasabah[] = [
  {
    id: 1,
    nama: 'Ahmad Rizki',
    avatar: 'avatars/300-1.jpg',
    email: 'ahmad.rizki@email.com',
    noTelp: '081234567890',
    alamat: 'Jl. Sudirman No. 123, Jakarta',
    saldo: 1500000,
    status: 'Aktif',
    tanggalBergabung: '2024-01-15',
    totalSetoran: 2500000,
    totalPenarikan: 1000000,
    online: true,
    initials: {
      label: 'AR',
      state: 'success'
    }
  },
  {
    id: 2,
    nama: 'Siti Nurhaliza',
    avatar: 'avatars/300-2.jpg',
    email: 'siti.nurhaliza@email.com',
    noTelp: '081234567891',
    alamat: 'Jl. Thamrin No. 456, Jakarta',
    saldo: 750000,
    status: 'Aktif',
    tanggalBergabung: '2024-02-20',
    totalSetoran: 1200000,
    totalPenarikan: 450000,
    online: false,
    initials: {
      label: 'SN',
      state: 'warning'
    }
  },
  {
    id: 3,
    nama: 'Budi Santoso',
    avatar: 'avatars/300-3.jpg',
    email: 'budi.santoso@email.com',
    noTelp: '081234567892',
    alamat: 'Jl. Gatot Subroto No. 789, Jakarta',
    saldo: 2500000,
    status: 'Aktif',
    tanggalBergabung: '2024-03-10',
    totalSetoran: 3500000,
    totalPenarikan: 1000000,
    online: true,
    initials: {
      label: 'BS',
      state: 'success'
    }
  },
  {
    id: 4,
    nama: 'Dewi Sartika',
    avatar: 'avatars/300-4.jpg',
    email: 'dewi.sartika@email.com',
    noTelp: '081234567893',
    alamat: 'Jl. Rasuna Said No. 321, Jakarta',
    saldo: 500000,
    status: 'Tidak Aktif',
    tanggalBergabung: '2024-01-05',
    totalSetoran: 800000,
    totalPenarikan: 300000,
    online: false,
    initials: {
      label: 'DS',
      state: 'danger'
    }
  },
  {
    id: 5,
    nama: 'Rudi Hermawan',
    avatar: 'avatars/300-5.jpg',
    email: 'rudi.hermawan@email.com',
    noTelp: '081234567894',
    alamat: 'Jl. Sudirman No. 654, Jakarta',
    saldo: 1800000,
    status: 'Aktif',
    tanggalBergabung: '2024-02-28',
    totalSetoran: 2200000,
    totalPenarikan: 400000,
    online: true,
    initials: {
      label: 'RH',
      state: 'success'
    }
  }
];

const getUsers = (query: string): Promise<UsersQueryResponse> => {
  // Return dummy data instead of making API call
  return Promise.resolve({
    data: dummyNasabahData,
    payload: {
      pagination: {
        links: [],
        page: 1,
        per_page: 10,
        total: dummyNasabahData.length,
        total_pages: 1
      }
    }
  });
};

const getUserById = (id: ID): Promise<Nasabah | undefined> => {
  const user = dummyNasabahData.find(u => u.id === id);
  return Promise.resolve(user);
};

const createUser = (user: Nasabah): Promise<Nasabah | undefined> => {
  const newUser = { ...user, id: Math.max(...dummyNasabahData.map(u => u.id || 0)) + 1 };
  dummyNasabahData.push(newUser);
  return Promise.resolve(newUser);
};

const updateUser = (user: Nasabah): Promise<Nasabah | undefined> => {
  const index = dummyNasabahData.findIndex(u => u.id === user.id);
  if (index !== -1) {
    dummyNasabahData[index] = { ...dummyNasabahData[index], ...user };
    return Promise.resolve(dummyNasabahData[index]);
  }
  return Promise.resolve(undefined);
};

const deleteUser = (userId: ID): Promise<void> => {
  const index = dummyNasabahData.findIndex(u => u.id === userId);
  if (index !== -1) {
    dummyNasabahData.splice(index, 1);
  }
  return Promise.resolve();
};

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  userIds.forEach(id => {
    const index = dummyNasabahData.findIndex(u => u.id === id);
    if (index !== -1) {
      dummyNasabahData.splice(index, 1);
    }
  });
  return Promise.resolve();
};

export {
  getUsers,
  deleteUser,
  deleteSelectedUsers,
  getUserById,
  createUser,
  updateUser,
}; 