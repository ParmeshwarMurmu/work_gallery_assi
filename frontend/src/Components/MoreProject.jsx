import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import style from '../CSS/Home.module.css'
import { APP_URL } from '../Constants/constants';

const MoreProject = ({title, description, additionalDetails, image}) => {

    const dispatch = useDispatch();

   

  return (
    <div className={style.more}>
      <div className={style.imgCont}>
      <img className={style.image}   src={`${APP_URL}/uploads/${image}`} alt="" />
      </div>

      <div className={style.moreProjectTitle}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default MoreProject
