import react, { use, useEffect, useState } from "react"
import cities_obj from "../a-detailed-version (1).json"
import "../CSS/Add_trip.css"
import logo from './images/Logo.webp'
import { useLocation, useNavigate } from "react-router-dom"
const Add_trip=()=>{
    const location=useLocation()
    const {username}=location.state;
    const navigate=useNavigate('')
    const [from,setFrom]=useState('')
    const [to,setTo]=useState('')
    const [selectedFrom,setSelectedFrom]=useState([])
    const [selectedTo,setSelectedTo]=useState([])
    const [passengers,setNumberPassengers]=useState(0)
    const cities=Object.keys(cities_obj);
    const handleMain=()=>{
        navigate('/')
    }
    const handleTrip=()=>{
        navigate('/trips',{state:{from,to}})
    }
    useEffect(()=>{
        if (from.length>0 && !cities.includes(from)){
            const filteredCities=cities.filter((city)=>{
                return city.toLowerCase().startsWith(from.toLowerCase())
            })
            setSelectedFrom(filteredCities)
        }
        else{
            setSelectedFrom([]);
        }
    },[from])
    useEffect(()=>{
        if(to.length>0 && !cities.includes(to)){
            const filteredCities=cities.filter((city)=>{
                return city.toLowerCase().startsWith(to.toLowerCase())
            })
            setSelectedTo(filteredCities)
        }
        else{
            setSelectedTo([])
        }
    },[to])
    return (
        <div className="container">
            <div className="nav_bar1">
                <img src={logo} onClick={handleMain}></img>
                <p>{username}</p>
            </div>
            <div className="input_container">
                <input type="text" placeholder="From" value={from} onChange={(e)=>{
                setFrom(e.target.value)}}></input>
                {selectedFrom.length>0 && (
                    <ul className="suggestions">
                        {
                            selectedFrom.map((city,index)=>{
                                return (<li key={index} onClick={()=>{
                                    setSelectedFrom([])
                                    setFrom(city)
                                    
                                }}>{city}</li>)
                            })
                        }
                    </ul>
                )
                }
                <input type="text" placeholder="To" value={to} onChange={(e)=>{
                    setTo(e.target.value)
                }}></input>
                {selectedTo.length>0 && (
                    <ul className="suggestions1">
                    {
                        selectedTo.map((city,index)=>{
                            return (<li key={index} onClick={()=>{
                                setSelectedTo([])
                                setTo(city)
                            }}>{city}</li>)
                        })
                    }
                    </ul>
                )
                }
                <input type="number" placeholder="No of Passengers" onChange={(e)=>{
                    setNumberPassengers(e.target.value)
                }}></input>
                <button className="button" onClick={handleTrip}>Search Trip</button>
            </div>
        </div>
    )
}
export default Add_trip