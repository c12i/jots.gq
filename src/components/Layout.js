import React from 'react'

import Header from './Header'
import Navigation from './Navigation'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Navigation />
            </div>
            <main>{children}</main>
        </>
    )
}

export default Layout
