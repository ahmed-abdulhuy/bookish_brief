import React from 'react'
import './Header.scss'

function Header(props: IHeaderProps) {
    return (
        <h1 className='header'>Hello from header</h1>
    )
}

interface IHeaderProps {
    //TODO
}

export default Header;
