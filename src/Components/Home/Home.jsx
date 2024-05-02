import { RiArrowDropDownLine } from "react-icons/ri";
import user from "../../assets/icon/Menu home/peserta.svg";

import jadwal from "../../assets/icon/Menu home/jadwal.svg";
import tes from "../../assets/icon/Menu home/alat_tes.svg";
import pending from "../../assets/icon/Menu home/pending.svg";

const Home = () => {
  return (
    <div className="absolute z-1 m-auto md:left-60 top-[78px] bottom-0 right-0 px-16 py-12">
      <div className="h-full">
        <div>
          <p className="block text-[#575D6A]">Home</p>
          <p className="font-bold text-[25px] block">Home</p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="singleCard border border-lineColor p-4 min-w-[250px]">
            <div className="grid grid-cols-2">
              <div >
                <p>Peserta</p>
                <p className="font-bold text-[40px]">764</p>
              </div>
              <div className="justify-self-end">
                <p className="text-[12px] flex justify-end items-center">
                  Minggu ini
                  <RiArrowDropDownLine className="text-[22px]" />
                </p>
                <img src={user} alt="" />
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
            </div>
          </div>

          <div className="singleCard border border-lineColor p-4 min-w-[250px] ">
            <div className="grid grid-cols-2">
              <div>
                <p>Jadwal Tes</p>
                <p className="font-bold text-[40px]">17</p>
              </div>
              <div className="justify-self-end">
                <p className="text-[12px] flex justify-end items-center">
                  Minggu ini
                  <RiArrowDropDownLine className="text-[22px]" />
                </p>
                <img src={jadwal} alt="" />
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-orange-500 h-full rounded-full w-1/6"></div>
            </div>
          </div>

          <div className="singleCard border border-lineColor p-4 min-w-[250px]">
            <div className="grid grid-cols-2">
              <div>
                <p>Alat Tes</p>
                <p className="font-bold text-[40px]">25</p>
              </div>
              <div className="justify-self-end">
                <p className="text-[12px] flex justify-end items-center">
                  Minggu ini
                  <RiArrowDropDownLine className="text-[22px]" />
                </p>
                <img src={tes} alt="" />
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-green-500 h-2.5 rounded-full w-5/6"></div>
            </div>
          </div>

          <div className="singleCard border border-lineColor p-4 min-w-[250px]">
            <div className="grid grid-cols-2">
              <div>
                <p>Tes Pending</p>
                <p className="font-bold text-[40px]">1</p>
              </div>
              <div className="justify-self-end">
                <p className="text-[12px] flex justify-end items-center">
                  Minggu ini
                  <RiArrowDropDownLine className="text-[22px]" />
                </p>
                <img src={pending} alt="" />
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-[#F7418F] h-2.5 rounded-full w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
