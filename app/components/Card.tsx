import React from 'react'

interface Tprops{
    name:string,
    rollNo:number,
    day:string
    timing:number|string
}
const Card =(props:Tprops)  =>{
    return(
        <div>
            <h1>Name:{props.name}</h1>
            <h1>RollNo:{props.rollNo}</h1>
            <h1>Day:{props.day}</h1>
            <h1>Timing:{props.timing}</h1>
        </div>
    )
}
export default Card

