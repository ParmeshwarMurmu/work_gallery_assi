import React from 'react'
import style from '../CSS/Profile.module.css'

const Profile = () => {
    return (
        <div className={style.profileCont}>

            <div>
                <p className={style.head}>Hello, I'm Andres Gallardo</p>
            </div>

            <div className={style.unleashCont}>
                <p className={style.unleash}>Unleash Creativity, Capture Vision:Your Journey Through My
                    Portfolio Begins Here.</p>
            </div>
        </div >
    )
}

export default Profile
