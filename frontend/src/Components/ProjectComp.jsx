import React from 'react'
import style from '../CSS/ProjectComp.module.css'
import { MdOutlineArrowOutward } from "react-icons/md";
import { APP_URL } from '../Constants/constants';


const ProjectComp = ({title, description, additionalDetails, image}) => {
  return (
    <div className={style.container}>
      
      <div className={style.projectContent}>
        <p>{title}</p>
        <p>{description}</p>
        <p>{additionalDetails}</p>

        <p>Source file <MdOutlineArrowOutward style={{marginTop: "3px"}} /></p>
      </div>

      

      <div className={style.projectImage}>
        <img className={style.image} src={`${APP_URL}/uploads/${image}`} alt="" />
      </div>

      <div className={style.iconContainer}>
      <MdOutlineArrowOutward style={{marginTop: "3px"}} color={'white'} fontSize={'88px'}/>
      </div>

      
      
    </div>
  )
}

export default ProjectComp
