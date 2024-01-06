import React, { useEffect, useState } from 'react'
import { useData } from '../context/DataContext'

const AddEditModal = ({ modalRef, kandang, setKandang }) => {

    const { handleAddData, handleEditData} = useData();

    const [input, setInput] = useState({
        nama: "",
        luas: 0,
        jumlah_ternak: 0
    })

    const handleChangeInput = (e) => {
        const newInput = {
            ...input,
            [e.target.name]: e.target.value
        }

        setInput(newInput);
    }

    const handleSubmit = () => {

        kandang ? handleEditData(input) : handleAddData(input)
        handleCloseModal();
    }

    const resetField = () => {
        setInput({
            nama: "",
            luas: 0,
            jumlah_ternak: 0
        })
    }

    const handleCloseModal = () => {
        setKandang(null);
        modalRef.current?.close();
        resetField();
    }


    useEffect(() => {
        if (kandang) {
            setInput(kandang)
        }
    }, [kandang])


    return (
        <>
            <dialog id="my_modal" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-3"
                        onClick={handleCloseModal}
                    >✕</button>
                    <h3 className="font-bold text-lg">Tambah Kandang</h3>

                    <div className="flex flex-col gap-4 mt-6">
                        <div>
                            <label >Nama Kandang</label>
                            <input type="text" placeholder="Masukkan nama disini..." className="input input-bordered w-full my-2"
                                name='nama'
                                value={input.nama}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div>
                            <label >Luas Kandang</label>
                            <input type="number" placeholder="Masukkan luas disini..." className="input input-bordered w-full my-2"
                                name='luas'
                                value={input.luas}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div>
                            <label >Jumlah Ternak</label>
                            <input type="number" placeholder="Masukkan jumlah ternak disini..." className="input input-bordered w-full my-2"
                                name='jumlah_ternak'
                                value={input.jumlah_ternak}
                                onChange={handleChangeInput}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button className='px-3 py-1 border border-slate-400 bg-green-600 text-white rounded-md mt-4'
                            onClick={handleSubmit}
                            type='submit'
                        >Submit</button>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default AddEditModal