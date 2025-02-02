import React from 'react'
import FilterBTN from '../FilterBTN'
import styles from '../Filters.css'

const Status = ({setPageNumber,setStatus}) => {
    const status =[ "Alive","Dead","Unknown"]
  return (
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button custom-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Status
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap gap-3">
        {status.map((item,index)=>(
            <FilterBTN task={setStatus} setPageNumber={setPageNumber} key={index} index={index} name="status" item={item}/>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Status
