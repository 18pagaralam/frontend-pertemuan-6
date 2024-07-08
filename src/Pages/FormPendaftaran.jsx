import React, { useState } from 'react';

function FormPendaftaran() {
  const [nama, setNama] = useState('Imam Ramdani');
  const [alamat, setAlamat] = useState('JL. A. Yani 80 Banyuwangi');
  const [gender, setGender] = useState('Pria');
  const [program, setProgram] = useState('S1 Teknik Informatika');
  const [prestasiAkademik, setPrestasiAkademik] = useState(true);
  const [prestasiNonAkademik, setPrestasiNonAkademik] = useState(false);
  const [masukan, setMasukan] = useState('Mohon info proses berikutnya secepatnya.');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      nama,
      alamat,
      gender,
      program,
      prestasiAkademik,
      prestasiNonAkademik,
      masukan,
    });
  };

  return (
    <div className="container">
      <h2>Form Pendaftaran</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Nama:
            <input 
              type="text" 
              value={nama} 
              onChange={(event) => setNama(event.target.value)} 
              className="form-control" 
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Alamat:
            <input 
              type="text" 
              value={alamat} 
              onChange={(event) => setAlamat(event.target.value)} 
              className="form-control" 
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Gender:
            <div>
              <label>
                <input
                  type="radio"
                  value="Pria"
                  checked={gender === 'Pria'}
                  onChange={(event) => setGender(event.target.value)}
                />
                Pria
              </label>
              <label>
                <input
                  type="radio"
                  value="Wanita"
                  checked={gender === 'Wanita'}
                  onChange={(event) => setGender(event.target.value)}
                />
                Wanita
              </label>
            </div>
          </label>
        </div>

        <div className="form-group">
          <label>
            Program Pilihan:
            <select 
              value={program} 
              onChange={(event) => setProgram(event.target.value)} 
              className="form-control"
            >
              <option value="S1 Teknik Informatika">S1 Teknik Informatika</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Prestasi:
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={prestasiAkademik}
                  onChange={(event) => setPrestasiAkademik(event.target.checked)}
                />
                Prestasi Akademik
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={prestasiNonAkademik}
                  onChange={(event) => setPrestasiNonAkademik(event.target.checked)}
                />
                Prestasi Non Akademik
              </label>
            </div>
          </label>
        </div>

        <div className="form-group">
          <label>
            Masukan:
            <textarea 
              value={masukan} 
              onChange={(event) => setMasukan(event.target.value)} 
              className="form-control" 
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FormPendaftaran;
