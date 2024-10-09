import React from 'react'

const InputGroup = ({total,name,setId}) => {

    function handleChange(e){
        setId(e.target.value)
    }

  return (
    <div className='input-group mb-3'>
      <select onChange={handleChange} className="form-select" aria-label="Default select example" for="episode">
        <option value="1" selected>Choose...</option>
        {[...Array(total).keys()].map((num)=>{
            return <option value={num+1}>{name}-{num+1}</option>
        })}
     </select>
    </div>
  )
}

export default InputGroup
