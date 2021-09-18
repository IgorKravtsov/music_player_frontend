import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { sidebarData } from './sideBarData';
import './navbar.scss';
import { IconContext } from 'react-icons';
import {useTypedSelector} from "../../hooks/useTypedSelector";

function Navbar() {
    const {isAuth} = useTypedSelector(state => state.auth);
    const [sidebar, setSidebar] = useState(false);

    const profile = isAuth ?
        <div className={"navbar__profile"}>Logout</div>
        :
        <div className={"navbar__profile"}>Login</div>

    const showSidebar = () => setSidebar(!sidebar);

    return (


        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <Link to={'/'} className={"navbar__logo"}>
                        {/*<img src={process.env.PUBLIC_URL + "/Logo.svg"} alt={"logo"}/>*/}
                        <span>LOGO</span>
                    </Link>
                    {profile}
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {sidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;