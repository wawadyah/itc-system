import React from "react";
import logo1 from '../assets/icon/Menu left bar/logo_dtc.svg'

const Login = () => {
  return (
    <div className="bg-[#F3F4F6] h-screen top-0 left-0">
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px]">
      <div className="flex justify-center">
      <img src={logo1} alt="" className="w-56 mb-8"/>
      </div>
      <form className="shadow-md bg-white rounded-md p-8">
        <div className="flex justify-center mb-6">
          <h1 className="font-bold text-[25px] text-[#334155]">
            Masuk ke Hamalan Admin
          </h1>
        </div>
        <div>
          <div className="mt-2">
            <label className="" htmlFor="">
              Username
            </label>
            <input
              type="text"
              className="w-full border border-[#CBD5E1] rounded-md mt-2 p-1"
            />
          </div>
          <div className="mt-2">
            <label className="" htmlFor="">
              Password
            </label>
            <input
              type="text"
              className="w-full border border-[#CBD5E1] rounded-md mt-2 p-1"
            />
          </div>

          <div className="flex justify-between mt-4">
            <div>
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
                <label className="ms-2 text-sm ">Simpan kata sandi</label>
              </div>
            </div>
            <div className="text-sm underline text-gray-500">
              Lupa password?
            </div>
          </div>

          <button className="w-full bg-[#00C16A] rounded-md mt-4 text-white font-bold p-2">
            Masuk
          </button>

          <div className="text-gray-500 text-sm flex justify-center mt-6">
            Belum Punya Akun?{" "}
            <span className="underline text-[#00C16A]">Registrasi disini</span>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
