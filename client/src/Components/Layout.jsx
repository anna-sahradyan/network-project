import React from 'react';
import Nav from "./Nav";

const Layout = ({children}) => {
    return (
        <>
            <Nav/>
            <div className={"flex w-full "}>
                {children}
            </div>
        </>
    );
};

export default Layout;