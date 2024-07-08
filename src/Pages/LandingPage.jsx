import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <>
            <header className="Header fixed top-0 left-0 right-0 text - 3xl">
                Header atau navbar
            </header>
            <main className="center">
                <div className="bio-container">
                    <h1>Biodata</h1>
                    <div className="biodata-row">
                        <div className="biodata-item">
                            <p>Nama: alex</p>
                            <p>Umur: 21</p>
                            <p>Status: mahasiswa</p>
                            <p>Gender: laki laki</p>
                        </div>
                        <div className="biodata-item">
                            <p>Nama: steven</p>
                            <p>Umur: 22</p>
                            <p>Status: pns</p>
                            <p>Gender: laki laki</p>
                        </div>
                        <div className="biodata-item">
                            <p>Nama: angel</p>
                            <p>Umur: 25</p>
                            <p>Status: ibu rumah tangga</p>
                            <p>Gender: perempuan</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="Footer fixed bottom-0 left-0 right-0 text - 3xl">
                Ig: alexkun Twitter:alexcan
            </footer>

        </>
    );
}

export default LandingPage;
