import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Layout from "../Components/Layout";
import Utama from "../Components/Utama";


function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/IndukAyam")
    }
    return ( 
        <>
            <Layout>
                <Button text= "Induk ayam" onClick={handleClick} color="blue"/>
                <Utama/>
            </Layout>
        </>
     );
}

export default Home;