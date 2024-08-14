import React from 'react'

export default function Greet({name,alias}) {
    console.log(name+alias);
    //cons {name,alias}=props;  //destruction 2
    return (

    <h1>Welcome to react  {name} {alias} </h1>
    
    ) 
}