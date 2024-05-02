import { SlArrowRight } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const RiwayatSoal = ({ handleOrderPopup }) => {
  return (
    <div className="absolute z-1 m-auto md:left-60 top-[78px] bottom-0 right-0 p-6">
      <div className="text-gray-400 text-sm flex items-center">
        <div className="flex items-center">
          Jadwal Tes <SlArrowRight className="text-[10px] ml-2" />
        </div>
        <div className="inline-block ml-2 text text-[#20C462] cursor-pointer hover:underline">Jadwal</div>
      </div>

      <div className="w-full mt-4 flex justify-between">
        <div className="font-bold text-lg">Jadwal Tes</div>
        <button 
        onClick={() => handleOrderPopup()}
        className="rounded-sm bg-[#20C462] text-white font-medium flex items-center px-2 py-1 text-sm mb-4">
          {" "}
          <FaPlus className="" /> Tambah Jadwal{" "}
        </button>
      </div>

      <div className="w-full border border-gray-100">
        <div className="grid grid-cols-12 items-center border-b">
          <div className="flex h-full py-4 gap-8 font-semibold text-gray-400 pl-2">          
              <Link to={'/jadwal'} className="tes hover:text-[#20C462]">Jadwal</Link>
              <Link to={'/jadwal-riwayat'} className="tes hover:text-[#20C462]">Riwayat</Link>
          </div>
        </div>

          {/* table section */}
          <div className="py-12 px-8">

            <div className="text-gray-500  text-sm flex justify-between w-full">
              <p>Daftar jadwal event yang sedang atau akan berlangsung</p>
              <input
                type="text"
                className="w-[200px] sm:w-[200px] transition-all duration-300 rounded-sm border
                        border-gray-300 px-2 py-1 focus:outline-none
                        "
                placeholder="Cari Jadwal"
              />
            </div>

            <div className="relative overflow-x-auto sm:rounded-lg mt-8">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      No
                    </th>
                    <th scope="col" className="px-2 py-3">
                      <div className="flex items-center">
                        Nama Jadwal
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
                        Tgl/Jam Mulai
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
                        Tgl/Jam Selesai
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
                        Jumlah Peserta
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
                        Status
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
                    <td className="px-4 py-4">Psikotes Mandiri Taspen</td>
                    <td className="px-2 py-4">25 Des 2022 - 08:00 WIB</td>
                    <td className="px-2 py-4">25 Des 2022 - 08:00 WIB</td>
                    <td className="px-2 py-4 ">25</td>
                    <td className="px-2 py-4 flex items-center">
                      <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                      <p className="text-sm">Batal</p>
                    </td>
                    <td className="px-2 py-4 text-right">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex gap-4 text-[20px]"
                      >
                        <FaEye className="text-gray-600 cursor-pointer hover:text-lineColor"/> 
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
                    <td className="px-4 py-4">Psikotes Media</td>
                    <td className="px-2 py-4">25 Des 2023 - 06:00 WIB</td>
                    <td className="px-2 py-4">25 Des 2022 - 11:00 WIB</td>
                    <td className="px-2 py-4 ">32</td>
                    <td className="px-2 py-4 flex items-center">
                      <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                      <p className="text-sm">Selesai</p>
                    </td>
                    <td className="px-2 py-4 text-right">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex gap-4 text-[20px]"
                      >
                        <FaEye className="text-gray-600 cursor-pointer hover:text-lineColor"/> 
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

export default RiwayatSoal
