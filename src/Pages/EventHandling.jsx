import React, { useState } from 'react';

const EventHandling = () => {
  const [name, setName] = useState('');
  const [selectedOption, setSelectedOption] = useState('S1 tekhnik informatika');
  const [gender, setGender] = useState('Pria');
  const [alamat, setAlamat] = useState('');
  const [prestasi, setPrestasi] = useState('akademik');
  const [masukan, setMasukan] = useState('');

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return(
    <div className="container mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4">
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4"
        onClick={() => alert("tombol ini di klik")}
      >
        Klik saya
      </button>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Nama:
        </label>
        <input
        type="text"
        id="name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-otuline"
        placeholder="Masukan nama anda"
        value={name}
        onChange={handleInputChange(setName)}
      />
      </div>
      
      <div className="mb-4">
        <label htmlFor="alamat" className="block text-gray-700 font-bold mb-2">
          Alamat:
        </label>
        <input
        type="text"
        id="alamat"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-otuline"
        placeholder="Masukan nama anda"
        value={alamat}
        onChange={handleInputChange(setAlamat)}
      />
      </div>

      <div className="mb-4">
        <span className="block text-gray-700 font-bold mb-2">Gender</span>
        <div className="flex item-center">
          <label className="inline-flex items-center mr-4">
            <input
            type="radio"
            className="form-radio text-indigo-600"
            name="gender"
            value="pria"
            checked={gender === 'Pria'}
            onChange={handleInputChange(setGender)}
          />
          <span className="ml-2">Pria</span>
          </label>
          <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="gender"
            value="wanita"
            checked={gender === 'Wanita'}
            onChange={handleInputChange(setGender)}
          />
          <span className="ml-2">Wanita</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="program studi" className="block text-gray-700 font-bold mb-2">
          Program studi
        </label>
        <select
        id="program-studi"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-otuline"
        value={selectedOption}
        onChange={handleInputChange(setSelectedOption)}
      >
        <option value="S1 Tekhnik informatika">S1 Tekhnik Informatika</option>
        <option value="D3 Tekhnik Informasi">D3 Tekhnik Informasi</option>
        <option value="D3 Manajemen Informatika">D3 Manajemen Informatika</option>
        </select>      
        </div>

        <div className="mb-4">
        <span className="block text-gray-700 font-bold mb-2">Prestasi</span>
        <div className="flex item-center">
          <label className="inline-flex items-center mr-4">
            <input
            type="radio"
            className="form-radio text-indigo-600"
            name="prestasi"
            value="akademik"
            checked={prestasi === 'akademik'}
            onChange={handleInputChange(setPrestasi)}
          />
          <span className="ml-2">Akademik</span>
          </label>
          <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="prestasi"
            value="non akademik"
            checked={prestasi === 'non akademik'}
            onChange={handleInputChange(setPrestasi)}
          />
          <span className="ml-2">Non Akademik</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="masukan" className="block text-gray-700 font-bold mb-2">
          Masukan:
        </label>
        <textarea
        id="masukan"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-otuline"
        placeholder="Masukan masukan anda"
        value={masukan}
        onChange={handleInputChange(setMasukan)}
      />
      </div>
    </div>

    <div className="p-4">
      <h3 className="text-2xl font-bold mb-4">Resume</h3>
      <hr className="mb-4" />
      <div className="mb-4">
      <h5 className="font-bold">Nama:</h5>
      <p>{name}</p>
      </div>
      <div className="mb-4">
        <h5 className="font-bold">Program studi:</h5>
        <p>{selectedOption}</p>
      </div>
      <div className="mb-4">
        <h5 className="font-bold">Gender:</h5>
        <p>{gender}</p>
      </div>
      <div className="mb-4">
        <h5 className="font-bold">Alamat:</h5>
        <p>{alamat}</p>
      </div>
      <div className="mb-4">
        <h5 className="font-bold">Prestasi:</h5>
        <p>{prestasi}</p>
      </div>
      <div className="mb-4">
        <h5 className="font-bold">Masukan:</h5>
        <p>{masukan}</p>
      </div>
    </div>
    </div>
  )
};

export default EventHandling;