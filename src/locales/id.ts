export default {
  general: {
    error: {
      summary: 'Terjadi Kesalahan',
      detail: 'gagal melakukan aksi, coba lagi atau hubungi admin',
    },

    btn: {
      back: 'kembali',
    },
    copyright: '2023 PT. Mitra Pinasthika Mulia. All rights reserved.',

    field: {
      placeholder: 'Masukkan {field}',
    },
    
    message: {
      please_wait: 'Mohon menunggu...',
      loading: 'Memuat',
      success: 'Berhasil',
      failed: 'Gagal'
    }
  },

  pages: {
    login: {
      title: 'Login',
      username: 'Username',
      password: 'Password',
      dealer_code: 'Dealer Code',
      submit: 'Login',
      description: 'Quickly get started by signing in using your existing accounts',
      account_not_found: 'Akun tidak ditemukan',
    },
    home: {
      title: 'Selamat datang di MOSA Back Office'
    }
  },

  validation: {
    alpha: '{field} hanya boleh mengandung karakter alfabet',
    alpha_num: '{field} hanya boleh mengandung karakter alfanumerik',
    alpha_dash:
      '{field} boleh mengandung karakter alfanumerik, tanda hubung, dan garis bawah',
    alpha_spaces: '{field} hanya boleh berisi karakter alfabet serta spasi',
    between: '{field} harus di antara 0:{min} dan 1:{max}',
    confirmed: '{field} tidak cocok dengan {target}',
    digits: '{field} harus berupa 0:{length} digit angka',
    dimensions:
      '{field} harus berdimensi lebar 0:{width} pixel dan tinggi 1:{height} pixel',
    email: '{field} harus berupa alamat surel yang benar',
    excluded: '{field} harus berupa nilai yang sah',
    ext: '{field} harus berupa berkas yang benar',
    image: '{field} harus berupa gambar',
    integer: '{field} harus berupa bilangan bulat',
    length: 'Panjang {field} harus tepat 0:{length}',
    max_value: 'Nilai {field} tidak boleh lebih dari 0:{max}',
    max: '{field} tidak boleh lebih dari 0:{length} karakter',
    mimes: 'Tipe berkas {field} harus benar',
    min_value: 'Nilai {field} tidak boleh kurang dari 0:{min}',
    min: '{field} minimal mengandung 0:{length} karakter',
    numeric: '{field} harus berupa angka',
    one_of: '{field} harus berupa nilai yang sah',
    regex: 'Format {field} salah',
    required: '{field} tidak boleh kosong',
    required_if: '{field} tidak boleh kosong',
    size: '{field} harus lebih kecil dari 0:{size}KB',
  },
}
