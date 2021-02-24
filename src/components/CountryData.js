import {React,useState,useEffect} from 'react'
import axios from "axios";
import "./CountryData.css";
import Button from '@material-ui/core/Button';

 function CountryData() {
     const [country,getCountry]=useState([]);
     const [search,setSearch]=useState("");

     useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all")
    .then(response=>{
        getCountry(response.data)
    })
    .catch(error=>{
        console.log(error);
    });
   }, []);

   

   function handleSearch(){
    axios.get("https://restcountries.eu/rest/v2/name/"+search)
    .then(response=>{
        getCountry(response.data)
    })
    .catch(error=>{
        console.log(error);
    });
}


    return (
        <div>
        <h1 id="title"><b><i>Country Data</i></b></h1>
        
        <div class="input-group">
                
                <input type="text" placeholder="Search By Country" value={search} name="search" onChange={(e) => setSearch(e.target.value)}/>
               <Button type="button"  variant="contained" class="btn btn-primary" onClick={handleSearch}>Search</Button>
             
</div>             
   { <table id="country">
                  <tr>
                     <th>Name</th>
                     <th>Capital</th>
                     <th>Region</th>
                     <th>Language</th>
                     <th>Population</th>
                    
                  </tr>
                     
                  {country.length?country.map(data=>
                    <tr key={data.id}>
                    <td>{data.name}</td> 
                    <td>{data.capital}</td>
                    <td>{data.region}</td>
                    <td>{data.languages[0].name}</td>
                    <td>{data.population}</td> 
             
                                
                  </tr>
                       ):null}
              </table> }

        </div>
    )
}

export default CountryData;


