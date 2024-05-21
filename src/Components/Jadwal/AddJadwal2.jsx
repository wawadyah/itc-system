import React from 'react';
import { FiPlus } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";

const AddJadwal2 = ({ addQuestions, questions, handleRemove }) => {
    const handleAddClick = () => {
        addQuestions();
    };



    return (
        <div className='mt-4'>
            <div className='overflow-auto max-h-[250px]'>
                {questions.map((question, index) => (
                    <div key={index} className='mb-6'>
                        <label htmlFor="alat" className='text-sm'>
                            Bagian {index + 1} / Alat Tes {index + 1}
                        </label>
                        <input
                            type="text"
                            className='w-full rounded-md text-sm border border-gray-300 border-2 py-1 px-2'
                            placeholder={`Bagian ${index + 1} / Alat Tes ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
           <div className='flex justify-between'>
                <button onClick={handleAddClick} className='bg-[#206BC4] px-2 py-1 rounded-md text-white flex text-sm content-center'>
                    <FiPlus /> Tambah Alat Tes
                </button>
                <button
                    onClick={() => handleRemove()}
                    className='ml-2 bg-red-700 text-sm text-white px-2 py-1 h-fit rounded-md flex items-center align-bottom'>
                    <FaTrashAlt /> Hapus
                </button>
           </div>
        </div>
    );
};

export default AddJadwal2;
