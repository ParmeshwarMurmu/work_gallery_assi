import React from 'react'
import logo from '../Assets/Group 1000002839.png'
import style from '../CSS/Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className={style.navCont}>
                <div style={{ paddingTop: '5px' }}>
                    <Link to={'/'}><img src={logo} alt="" /></Link>
                </div>

                <div className={style.navContent}>
                    <p>

                        <Link to={'/upload'}>Work</Link>
                    </p>
                    <p>Platform</p>
                    <p>Profile</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
