import SideBar from "./SideBar";

function Layout({children}) {
    return ( 
        <>
            <SideBar>
                {children}
            </SideBar>
        </>
     );
}

export default Layout;

