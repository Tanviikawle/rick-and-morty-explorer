import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Cards.module.css'

const Cards = ({result,page}) => {
    let display;
    if(result){
        display = result.map(res => {
            let {id, name,image,location,status} = res
            return <Link style={{textDecoration:"none"}} to={`${page}${id}`} key={id} className='col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark'>
            <div className={`${styles.cards} d-flex justify-content-center flex-column`}>
                <img src={image} className={`${styles.img} img-fluid card-img-top`}  alt="Character" />
                <div style={{padding: "10px",borderRadius:"0px 0px 10px 10px"}} className={`${styles.backColor} content`} >
                    <div className={`${styles.backColor} fs-4 fw-bold mb-4 backColor`}>{name}</div>
                    <div className={`${styles.backColor}`}>
                        <div className={`${styles.backColor} fs-6`}>Last location</div>
                        <div className={`${styles.backColor} fs-5`}>{location.name}</div>
                    </div>
                </div>
                {((status)=>{
                    if(status==="Dead"){
                        return <div className={`${styles.badge} badge bg-danger position-absolute`}>{status}</div>
                    }
                    else if(status==="Alive"){
                        return <div className={`${styles.badge} badge bg-success position-absolute`}>{status}</div>
                    }
                    else{
                        return <div className={`${styles.badge} badge bg-secondary position-absolute`}>{status}</div>
                    }
                })(status)}
            </div>
            </Link>
        })
    }else{
        display = "No Characters Found :/"
    }
  return (
    <>{display}</>
  )
}

export default Cards
