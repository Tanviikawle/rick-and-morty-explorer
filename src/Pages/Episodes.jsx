import React,{useEffect,useState} from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filters/Category/InputGroup'

const Episodes = () => {
  const [id,setId] = useState(1)
  const [info,setInfo] = useState([])
  const [results,setResults]=useState([])
  const {air_date,name} = info
  const api = `https://rickandmortyapi.com/api/episode/${id}`
  useEffect(()=>{
    (async function (params) {
      let data = await fetch(api).then(res => res.json());
      setInfo(data)

      let a = await Promise.all(
        data.characters.map((el)=>{
          return fetch(el).then(res=>res.json())
        })
      )
      setResults(a)
    })()
  },[api])
  return (
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center mb-4'>Episode{" "}: <span className='text-primary'>{name ==="" ? "Unknown" : name }</span></h1>
        <h5 className='text-center'>Air date {air_date === "" ? "Unknown" : air_date }</h5>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='text-center mb-4'>Pick Episode</h4>
          <InputGroup name={"Episode"} setId={setId} total={51}/>
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Cards page="/episodes/" result={results} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Episodes
