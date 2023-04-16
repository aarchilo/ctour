import React from 'react'
import Card from 'react-bootstrap/Card';
import Top from "./Components/Top";
import Footer from "./Footer";
import bds from '../public/star-monument-modified.png'
import bps from '../public/zoo-modified.png'
import dps from '../public/bhiwani-airport-modified-modified.png'
import aryan from '../public/devsar-modified.png'
import park from '../public/huda-park-modified.png'
import jogi from '../public/jogi-wala-mandir-modified.png'
import kasum from '../public/kasumbi-waterpark-modified.png'
import khahki from '../public/khaki_bab-modified.png'
import loharu from '../public/loharu-fort-modified.png'
import Image from 'next/image'
const schools = [
  {
    name: "Loharu",
    schoolimage: loharu,
    rating:"4.5/5"
    
  },
  {
    name: "Khahki baba Mandir",
    schoolimage: khahki,
    rating:"4.5/5"
    
  },
  {
    name: "Kasumbi waterpark",
    schoolimage: kasum,
    rating:"4.5/5"
    
  },
  {
    name: "Jogi Mandir",
    schoolimage: jogi,
    rating:"4.5/5"
    
  },
  {
    name: "Devsar",
    schoolimage: aryan,
    rating:"4.5/5"
    
  },
  {
    name: "Zoo in Bhiwani",
    schoolimage: bps,
    rating:"4.5/5"
    
  },
  {
    name: "Star Monument",
    schoolimage: bds,
    rating:"4/5",
 
  },
  {
    name: "Airport Junction",
    schoolimage: dps,
    rating:"4/5"
  },
  {
    name: "Huda Park",
    schoolimage: park,
    rating:"4.3/5"
  },
  
];
export default function Travel() {
  return (
    <div>
      <Top></Top>
 <center>
    <h1 style={{color:"#ff6600"}}> Places to visit in Bhiwani</h1>
 
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
    <Footer></Footer>
    </div>
  )
}
