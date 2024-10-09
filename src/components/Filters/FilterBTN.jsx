import React from "react";

const FilterBTN = ({ input, task, setPageNumber, index, name,item }) => {

    function handleClick(){
        setPageNumber(1)
        task(item)
    }

  return (
    <div style={{backgroundColor:"white"}}>
    <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
    <div>
     <div className="form-check">
        <input onClick={handleClick} className="form-check-input x" type="radio" name={name} id={`${name}-${index}`} />
        <label className="btn btn-outline-primary" for={`${name}-${index}`}>{item}</label>
        </div>
    </div>
    </div>
  );
};

export default FilterBTN;