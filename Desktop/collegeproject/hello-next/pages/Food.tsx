import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Top from "./Components/Top";
import Footer from "./Footer";
import bds from '../public/my-shop-modified.png'
import bps from '../public/star-cafe-modified.png'
import dps from '../public/sunshe-dream-party-modified.png'
import aryan from '../public/shaam_e-khas-modified.png'
import Image from 'next/image'
const schools = [
  {
    name: "Star-Cafe",
    schoolimage: bps,
    rating:"4.5/5"
    
  },
  {
    name: "My Shop",
    schoolimage: bds,
    rating:"4/5",
 
  },
  {
    name: "Sunshe Dream Party",
    schoolimage: dps,
    rating:"4/5"
  },
  {
    name: "Shaam -e- khass",
    schoolimage: aryan,
    rating:"4.3/5"
  },
  
];
export default function Food() {
  return (
    <div><Top></Top>
    <center>
       <h1 style={{color:"#ff6600"}}> Resorts to get in Bhiwani</h1>
    
       {
         schools.map((school,i)=>
        <Card style={{marginTop:"3%",marginLeft:"3%",color:"#ff6600"}} key={i}>
         <Card.Body>
           <Card.Title style={{fontSize:"1.5rem",padding:"2%"}}>
           <Image src={school.schoolimage} alt="people"style={{width:"10%" ,height:"10%"}}/></Card.Title>
           {school.name} <b> Rating </b>{school.rating}
           
           
           
         </Card.Body>
       </Card>)}
       </center>
       <Footer></Footer></div>
  )
}
