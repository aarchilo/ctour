
import Button from 'react-bootstrap/Button'
import gee from '../public/people1.jpg'
import heena from '../public/heena-modified.png'
import bharat from '../public/bharat-modified.png'
import aarchi from '../public/aarchi.png'
import Image from 'next/image'
import Top from './Components/Top'
import Footer from './Footer'
export default function Home() {
  return (
    <div>
      <Top></Top>
    <div className="Header" style={{display:"flex",marginTop:"5%",color:"#ff6600"}}>
  <div className="leftside"style={{marginTop:"5%",fontSize:"1rem",marginLeft:"5%"}}>
    <div ><Image src={gee} alt="people"style={{width:"20%" ,height:"20%"}}/></div>
     <h1>सब कुछ छोटी काशी ...</h1> 
  </div>
    <div className="rightside"style={{fontSize:"2rem",marginTop:"5%"}}>
    <h1>C Tour</h1>
    <b>(  हमारी भिवानी  )</b>
    </div>
                                                      
    </div>
    <center style={{marginTop:"6%",backgroundColor:"#ff6600",color:"white"}}><h2 style={{padding:"2%"}}> want to know best in Bhiwani ? Ctour will get you through that..</h2>
 </center>
 <div style={{display:"flex",justifyContent:"space-around",fontSize:"larger",marginTop:"6%",marginBottom:"6%",color:"#ff6600"}}>

  <div>Famous personality</div>
  <div>Schools/colleges</div>
  <div>Travel</div>
  <div>Food/Restaurants</div>
 </div>

    <center style={{marginTop:"5%",color:"#ff6600"}} >
      <h1>About Bhiwani</h1>
    <div>Bhiwani district is one of the 22 districts of the northern Indian state of Haryana. Created on 22 December 1972, the district was the largest district of the state by area</div>
  <br></br> <div>  &#10004; <b>The town was founded by a Rajput chief called Neem Singh.</b></div>
   <br></br>
    <b>&#10004;  Deputy Commissioner (Sh. Naresh Narwal)</b>
    <br></br>
    <br></br>
    <a href="https://bhiwani.haryanapolice.gov.in/index" style={{textDecoration:"none",color:"#ff6600"}}> &#10004; contact Bhiwani Police </a>
    <br></br>
    <br></br>
      <h1>About us</h1>
    <div>
    <Image src={aarchi} alt="people"style={{width:"20%" ,height:"20%"}}/>
    <h1> AARCHI</h1>
    she is one of the creator of Ctour and worked for development of the website.
      </div>
    <div>
    <div>
    <Image src={heena} alt="people"style={{width:"20%" ,height:"20%"}}/>
     <h1> HEENA</h1>
    she is one of the creator of Ctour and worked for data management and complete designing of the website.
      </div>
    
    <Image src={bharat} alt="people"style={{width:"20%" ,height:"20%"}}/>
    <h1> BHARAT</h1>
    he is one of the creator of Ctour and worked for development,designing of the website.</div></center>
  <Footer></Footer>
    </div>
   
  )
}
