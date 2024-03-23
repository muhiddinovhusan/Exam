import React from 'react'
import './Sidebar.scss'
import logo2 from '../../assets/images/plus.svg'
import logo3 from '../../assets/images/settings.svg'
import logo4 from '../../assets/images/market.svg'
import react from '../../assets/images/react.svg'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <ul className='Sidebar-list'>
            <div>
                <span>
                <img src={react} alt='logo' className='logo' />

                </span>
            </div >
                <li className='Sidebar-item'>
                    <NavLink   to='/Add'   className='img'>
                        <span >
                            <img src={logo3} style={{
                             
                            }} alt='logo' className='logo' />
                        </span>
                    </NavLink>
                </li>
                <li className='Sidebar-item'>
                    <NavLink to='/' >
                        <span>
                            <img src={logo4} alt='logo' className='logo' />
                        </span>
                    </NavLink>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar