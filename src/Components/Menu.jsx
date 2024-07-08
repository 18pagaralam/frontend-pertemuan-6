const Menu = ({menuMakanan, menuMinuman}) => {
    return ( 
        <>
            <h2>Menu Badokan</h2>
            <ol>
            {menuMakanan.map((makanan, index) =>(
                <li key={index}>
                    <p>{makanan}</p>
                </li>
            ))}
            </ol>
        
            <hr />
            <ul>
            <h2>Menu minuman</h2>
            {menuMinuman.map((minuman, index) =>(
                <li key={index}>
                    <p>{minuman}</p>
                </li>
            ))}
            </ul>
        </>
     );
}
 
export default Menu;
