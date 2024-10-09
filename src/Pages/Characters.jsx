import React,{useState,useEffect} from 'react'
import Search from '../components/Search/Search'
import Filters from '../components/Filters/Filters'
import Cards from '../components/Cards/Cards'
import Pagination from '../components/Pagination/Pagination'

const Characters = () => {
    const [pageNumber,setPageNumber] = useState(1)
    const [fetchedData,updateFetchedData] = useState([])
    const [search,setSearch] = useState("")
    const [status,setStatus] = useState("")
    const [gender,setGender] = useState("")
    const [species,setSpecies] = useState("")
  
  
    let {info,results} = fetchedData
  
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
  
    useEffect(()=>{
      (async function (params) {
        let data = await fetch(api).then( res => res.json());
        updateFetchedData(data)
      })();
    },[api])
  
    return (
      <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
        <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
        <div className="container">
          <div className="row">
            <Filters setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber}/>
            <div className="col-lg-8 col-12">
              <div className="row">
                <Cards page="/" result={results}/>
              </div>
            </div>
          </div>
        </div>
        <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
      </div>
    );
}

export default Characters
