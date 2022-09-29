import React,{useState,useEffect} from 'react'
import Loader from './Loader'

const Home = () => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    console.log('loading:', loading)

    const getdata= async()=>{
        let r=await fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyDyxPgrgAZHR3pBJa8dEyjcYENfDs6Fb1I&cx=3d985fc72424d4200&q=pune")
        let data=await r.json()
        setdata(data.items)
        setloading(false)
    }

    useEffect(()=>{
        setloading(true)
        setTimeout(()=>{
            getdata()
        },2000)
    },[])

    if(loading){
        return (
            <Loader/>
        )
    }else{

  return (
    <div>
        {data.length>0 && data.map((e)=>(
            <p key={e.link}>{e.title}</p>
        ))}
    </div>
  )
        }
}

export default Home