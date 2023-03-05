import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Top from "./Components/Top";
import Footer from "./Footer";
import bds from '../public/bds-modified.png'
import bps from '../public/bps-modified.png'
import dps from '../public/delhi_public-modified.png'
import aryan from '../public/the_aryan-modified.png'
import hal from '../public/halwasiya-modified.png'
import happy from '../public/happy_public_school-modified.png'
import vaish from '../public/vaish model-modified.png'
import sainik from '../public/sanik_high-modified.png'
import little  from '../public/little hearts-modified.png'
import tits  from '../public/tits-modified.png'
import Image from 'next/image'
const schools = [
  {
    name: "Bhiwani public school",
    schoolimage: bps,
    rating:"4.5/5"
    
  },
  {
    name: "Happy Public School",
    schoolimage: happy,
    rating:"4/5",
 
  },
  {
    name: "TIT Senior Secondary School",
    schoolimage: tits,
    rating:"4/5"
  },
  {
    name: "Vaish Model School",
    schoolimage: vaish,
    rating:"4.3/5"
  },
  {
    name: "Little Heart Public School",
    schoolimage: little,
    rating:"3.8/5"
  },
  {
    name: "Shishu Bharti High School",
    schoolimage: bds,
    rating:"4/5"
  },
  {
    name: "Halwasiya Vidya Vihar School",
    schoolimage: hal,
    rating:"4/5"
  },
  {
    name: "The Aryan School Bhiwani",
    schoolimage: aryan,
    rating:"4/5"
  },
  {
    name: "Delhi World public school",
    schoolimage: dps,
    rating:"4/5"
  },
  {
    name: "Sanik public school",
    schoolimage: sainik,
    rating:"3.8/5"
  }
];
export default function school() {
  return < div style={{fontFamily:"sans-serif"}} className="ml-4">
 <Top></Top>
 <center>
    <h1 style={{color:"#ff6600"}}> Schools to get in Bhiwani</h1>
 
    {
      schools.map((school)=>
     <Card style={{marginTop:"3%",marginLeft:"3%",color:"#ff6600"}}>
      <Card.Body>
        <Card.Title style={{fontSize:"1.5rem",padding:"2%"}}>
        <Image src={school.schoolimage} alt="people"style={{width:"10%" ,height:"10%"}}/></Card.Title>
        {school.name} <b> Rating </b>{school.rating}
        
        
        
      </Card.Body>
    </Card>)}
    </center>
    <Footer></Footer>
  </div>
}
