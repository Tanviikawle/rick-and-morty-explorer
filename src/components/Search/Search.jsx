import React from 'react'
import styles from './Search.module.css'

const Search = (props) => {

    function searchBtn(e){
        e.preventDefault();
    }

    function handleChange(e){
        props.setPageNumber(1);
        props.setSearch(e.target.value);
    }
  return <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5'>
    <input onChange={handleChange}  type='text' className={`${styles.input}`} placeholder='Search for character'/>
    <button onClick={searchBtn} className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
  </form>
}

export default Search
