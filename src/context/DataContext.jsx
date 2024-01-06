import React, { createContext, useContext, useState } from 'react';
import kandangData from '../resources/dataKandang';


const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState(kandangData);

    const handleAddData = (newData) => {
        const temp = {
            ...newData,
            id: data.length + 1
        }

        setData([...data, temp]);
    }

    const handleEditData = (updatedData) => {
        const index = data.findIndex((obj) => obj.id === updatedData.id);
        if (index !== -1) {
            const newData = [...data];

            newData[index] = updatedData;

            setData(newData);
        }

    };

    const handleDeleteData = (nama) => {
        const index = data.findIndex((obj) => obj.nama === nama);

        if (index !== -1) {
            const newData = [...data];
            newData.splice(index, 1);
            setData(newData);
        }

    }




    return (
        <DataContext.Provider value={{ data, handleAddData, handleEditData, handleDeleteData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};
