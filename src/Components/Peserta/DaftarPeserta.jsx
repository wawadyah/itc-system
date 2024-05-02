import { FaPlus } from "react-icons/fa6";
import { BsFillTrashFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { RiArrowDropDownFill } from "react-icons/ri";

const DaftarPeserta = () => {
  return (
    <div className="absolute z-1 m-auto md:left-60 top-[78px] bottom-0 right-0 p-6">
    <div className="text-gray-400 text-sm flex items-center">
      <div className="flex items-center">Soal</div>
    </div>

    <div className="w-full mt-4 flex justify-between">
      <div className="font-bold text-lg">Soal</div>
      <button className="rounded-sm bg-[#20C462] text-white font-medium flex items-center px-2 py-1 text-sm mb-4">
        {" "}
        <FaPlus className="" /> Tambah Jadwal{" "}
      </button>
    </div>

    <div className="w-full border border-gray-100">
      <div className="grid grid-cols-1 items-center border-b">
        <div className="flex h-full py-4 gap-8 font-semibold text-gray-400 pl-2">
          <li className="list-none hover:text-[#20C462]">
            Daftar Peserta
          </li>
        </div>
      </div>

      {/* table section */}
      <div className="py-12 px-8">
        <div className="text-gray-500  text-sm flex justify-between w-full">
          <div className="relative ">
            <input type="text" placeholder="cari" 
            className="rounded-md p-[2px] border border-gray-300 text-gray-300 w-[40px]" value={'10'} />
            <div className="absolute -top-[1px] right-0">
              <div className="text-[20px] relative">
                <RiArrowDropDownFill className="rotate-180 hover:text-gray-200 cursor-pointer"/>
                <RiArrowDropDownFill className="absolute top-[7px] hover:text-gray-200 cursor-pointer"/>
              </div>
            </div>
          </div>
          <input
            type="text"
            className="w-[200px] sm:w-[200px] transition-all duration-300 rounded-sm border
                      border-gray-300 px-2 py-1 focus:outline-none
                      "
            placeholder="Cari Soal"
          />
        </div>

        <div className="relative overflow-x-auto sm:rounded-lg mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 ">
              <tr>
                <th scope="col" className="px-4 py-3">
                  No
                </th>
                <th scope="col" className="px-2 py-3">
                  <div className="flex items-center">
                    Nama Soal
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-2 py-3">
                  <div className="flex items-center">
                    Tujuan Tes
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-2 py-3">
                  <div className="flex items-center">
                    Jumlah Bagian
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-2 py-3">
                  <div className="flex items-center">
                    Tanggal Pembuatan
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>

                <th scope="col" className="px-2 py-3">
                  <div className="flex items-center">
                    Tanggal Update
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>

                <th scope="col" className="px-2 py-3">
                  <div className="flex items-center">Aksi</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-4 py-4">IST</td>
                <td className="px-2 py-4">Tes Intelegensi</td>
                <td className="px-2 py-4">9</td>
                <td className="px-2 py-4 ">13 Okt 2022 - 09:00 WIB</td>
                <td className="px-2 py-4 flex items-center">
                  <p className="text-sm">14 Okt 2022 - 09:00 WIB</p>
                </td>
                <td className="px-2 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex gap-4 text-[20px]"
                  >
                    <FaPencilAlt className="text-gray-600 cursor-pointer hover:text-lineColor" />
                    <BsFillTrashFill className="text-gray-600 cursor-pointer hover:text-lineColor" />
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  2
                </th>
                <td className="px-4 py-4">IST</td>
                <td className="px-2 py-4">Tes Intelegensi</td>
                <td className="px-2 py-4">9</td>
                <td className="px-2 py-4 ">13 Okt 2022 - 09:00 WIB</td>
                <td className="px-2 py-4 flex items-center">
                  <p className="text-sm">14 Okt 2022 - 09:00 WIB</p>
                </td>
                <td className="px-2 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex gap-4 text-[20px]"
                  >
                    <FaPencilAlt className="text-gray-600 cursor-pointer hover:text-lineColor" />
                    <BsFillTrashFill className="text-gray-600 cursor-pointer hover:text-lineColor" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          {/* pagination */}
          <div className="flex flex-col items-end mt-6">
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="flex items-center justify-center px-3 h-8 text-sm font-medium  rounded-sm bg-gray-100 hover:bg-gray-500 hover:text-white  ">
                First
              </button>
              <button className="flex items-center justify-center px-5 h-8 text-sm font-medium bg-gray-300 hover:bg-gray-600 rounded-sm mx-[2px]">
                1
              </button>
              <button className="flex items-center justify-center px-3 h-8 text-sm font-medium  rounded-sm bg-gray-100 hover:bg-gray-500 hover:text-white ">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* table section */}
  </div>
  )
}

export default DaftarPeserta
DaftarPeserta