import React from 'react'
import FilterBTN from '../FilterBTN';

const Species = ({setPageNumber,setSpecies}) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];
  return (
    <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Species
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap gap-3">
            {species.map((item,index)=>(<FilterBTN task={setSpecies} setPageNumber={setPageNumber} name="species" key={index} item={item} index={index} />))}
            </div>
          </div>
    </div>
  )
}

export default Species
