import React,{useState,useEffect} from 'react'
import {Button} from '@chakra-ui/react'
import axios from 'axios'


const All = () => {
  const [data, setdata] = useState([])
  
  
  useEffect(()=>{
    var config = {
  method: 'get',
  url: 'http://localhost:8080/all',
  headers: {'Content-Type': 'application/json' }
};

axios(config)
.then(function (response) {
  // console.log(response.data.data);
  setdata(response.data.data)
})
.catch(function (error) {
  console.log(error);
});
  },[])
  return (
     <div>
       {data.map((e) => {
         return(
           <div key={e._id}>
         <p>{e.first_name +" "+ e.last_name}</p>
         <p>{e.birth_date}</p>
         <p>{e.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default All