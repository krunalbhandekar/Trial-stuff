import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AddFriends from './AddFriends'
import {Button} from '@chakra-ui/react'

const Birthday = () => {
  const [data, setdata] = useState([])
  
  const getcurrent=()=>{
    var config = {
  method: 'get',
  url: 'http://localhost:8080/current',
  headers: { 'Content-Type': 'application/json'}
};

axios(config)
.then(function (response) {
  // console.log(response.data.data);
  setdata(response.data.data)
})
.catch(function (error) {
  console.log(error);
});
  }
  useEffect(()=>{
    getcurrent()
  },[])

//   function bufferToBase64(buf) {
//     var binstr = Array.prototype.map.call(buf, function (ch) {
//         return String.fromCharCode(ch);
//     }).join('');
//     return btoa(binstr);
// }

const sendemail=async(email)=>{
    console.log('email:', email)
    const payload = {email:email}
        await fetch("http://localhost:8080/gmailer", {
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
              },
        })
        .then((res) => res.json())
        .then((res) => {console.log(res);})
        .catch((err) => console.log(err))
}


  return (
    <div>
      <AddFriends getcurrent={getcurrent}/>

    <div>
       {data.map((e) => {
        //  const arr=e.img.data.data
        //  const idata=new Uint8Array(arr)
        //  const b64=bufferToBase64(idata)
         return(
           <div key={e._id}>
         {/* <img src={`data:image/png;base64,${b64}`} width="300"/> */}
         <p>{e.first_name +" "+ e.last_name}</p>
         <p>{e.birth_date}</p>
         <p>{e.email}</p>
         <Button colorScheme='green' onClick={()=>sendemail(e.email)}>Send Message</Button>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Birthday