import React from 'react'

const AddJadwal3 = () => {
  return (
    <div className='my-2'>
      <p className='text-xs'>Data apa saja yang ingin diambil dari proses registrasi?</p>

      <div className='grid grid-cols-3 mt-2'>
        <div className='flex flex-col gap-1'>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Nama</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Jenis Kelamin</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Nomor Telepon</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Email</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Alamat</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">NIK</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">No KK</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">NIP</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">NIS</label>
            </ul>
        </div>

        <div className='flex flex-col gap-1'>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Nama Ayah</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Nama Ibu</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Pekerjaan</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Jenjang Pendidikan</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Instansi/Sekolah</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Jurusan</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Kelas</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Hobi</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Jumlah Saudara</label>
            </ul>
        </div>

        <div className='flex flex-col gap-1'>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Kewarganegaraan</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Status Perkawinan</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Penghasilan</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Jabatan</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Lama Bekerja</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Pekerjaan Lain</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Nama Perusahaan</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">jenis Usaha</label>
            </ul>
            <ul className='flex gap-4'>
                <input type="checkbox" />
                <label htmlFor="" className="text-xs">Alamat Perusahaan</label>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default AddJadwal3
