
"use client"
import {useState} from "react";
import defaultAlienPlanets from "./lib/alienplanets.js";
import alienplanets from "./lib/alienplanets.js";
import Divider from "./components/Divider.jsx";

export default function Home() {
  const [alienPlanets, setAlienPlanets] = useState(defaultAlienPlanets);
  return (
<div className="container"> 
<p className="numbers">1</p>  
<Divider/> 
<div className='box'></div>
<p className="numbers">2</p>  
<Divider/> 
<img src= "/meme.webp" alt="monkey meme"></img>
<p className="numbers">3</p>  
<Divider/> 
<div className="alienContainer">
 <h2>Alien Planets</h2>
 <div className="planetContainer">
 {alienPlanets.map((planet) => {
  return (
   <div className= "alienCard" key={planet.id}>
   <p>{planet.emoji}</p>
   <p>{planet.name}</p>
   <p> {planet.name} is {planet.distanceFromEarth} from Earth. {planet.name} is believed to {planet.hasLife ? "have life" : "not have life"}. The atmosphere of {planet.name} is {planet.atmosphere}</p>
 </div>
)}
)}
 </div>
 </div>
 </div>
  )}

