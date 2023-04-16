import React from 'react'
import Card from 'react-bootstrap/Card';
import Top from "./Components/Top";
import Footer from "./Footer";
import bds from '../public/arvind-kejriwal-modified.png'
import bps from '../public/ashok-singhal-modified.png'
import dps from '../public/bansilal-modified.png'
import aryan from '../public/kavita-chahal-modified.png'
import hal from '../public/paramjeet-samota-modified.png'
import vk from '../public/vk_singh-modified.png'
import vj from '../public/vijendar-singh-modified.png'
import v from '../public/rohit-bhaker-modified.png'
import Image from 'next/image'
const schools = [
  {
    name: "Rohit Bhaker",
    schoolimage: v,

    
  },
  {
    name: "Vijender singh",
    schoolimage: vj,

    
  },
  {
    name: "VK singh",
    schoolimage: vk,

    
  },
  {
    name: "Ashok Singhal",
    schoolimage: bps,

    
  },
  {
    name: "Bansilal sir",
    schoolimage: dps,
  
 
  },
  {
    name: "Arvind Kenjriwal",
    schoolimage: bds,
  
  },
  {
    name: "Paramjeet samota",
    schoolimage: hal,
   
  },
  {
    name: "KAVITA CHAHAL",
    schoolimage: aryan,
   
  }
];
export default function Alumni() {
  return (
    <div><Top></Top>
    <center>
       <h1 style={{color:"#ff6600"}}>Famous People from Bhiwani</h1>
    
       {
         schools.map((school,i)=>
        <Card style={{marginTop:"3%",marginLeft:"3%",color:"#ff6600"}} key={i}>
         <Card.Body>
           <Card.Title style={{fontSize:"1.5rem",padding:"2%"}}>
           <Image src={school.schoolimage} alt="people"style={{width:"10%" ,height:"10%"}}/></Card.Title>
           {school.name} 
           
           
           
         </Card.Body>
       </Card>)}
       </center>
       <Footer></Footer></div>
  )
}
