import Button from "react-bootstrap/Button";
import gee from "../public/people1.jpg";
import heena from "../public/heena-modified.png";
import bharat from "../public/bharat-modified.png";
import aarchi from "../public/aarchi.png";
import Image from "next/image";
import Top from "./Components/Top";
import Footer from "./Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <center style={{ color: "#ff6600" }}>
       <Top></Top>
     
        <div style={{ marginTop: "5%", fontSize: "1rem", marginLeft: "5%" }}>
          <div>
            <Image
              src={gee}
              alt="people"
              style={{ width: "20%", height: "20%" }}
            />
          </div>
          <h1>सब कुछ छोटी काशी ...</h1>
        </div>
      </center>
      <center
        style={{ marginTop: "6%", backgroundColor: "#ff6600", color: "white" }}
      >
        <h2 style={{ padding: "2%" }}>
          {" "}
          want to know best in Bhiwani ? Ctour will get you through that..
        </h2>
      </center>
      {/* <div
        className="d-flex"
        style={{
          color: "#ff6600" ,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button style={{color:"white",backgroundColor:"#ff6600",padding:"1%",border:"2px solid white"}}>
          <Link href="/Alumni"style={{color:"white",backgroundColor:"#ff6600",textDecoration:"none"}}><b>Famous personality</b></Link>
        </button>
        <button style={{color:"white",backgroundColor:"#ff6600",padding:"1%",border:"2px solid white"}}>
          <Link href="/school"style={{color:"white",backgroundColor:"#ff6600",textDecoration:"none"}}><b>Schools/colleges</b></Link>
        </button>
        <button style={{color:"white",backgroundColor:"#ff6600",padding:"1%",border:"2px solid white"}}>
        
          <Link href="/Travel" style={{color:"white",backgroundColor:"#ff6600",textDecoration:"none"}}><b>Travel</b></Link>
        </button>

        <button style={{color:"white",backgroundColor:"#ff6600",padding:"1%",border:"2px solid white"}}>
          <Link href="/Food"style={{color:"white",backgroundColor:"#ff6600",textDecoration:"none"}}><b>Food/Restaurants</b></Link>
        </button>
      </div> */}

      <center style={{ marginTop: "5%", color: "#ff6600" }}>
        <b>
          Bhiwani district is one of the 22 districts of the northern Indian
          state of Haryana. Created on 22 December 1972, the district was the
          largest district of the state by area
        </b>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       
       
        <h1>About us</h1>
        <div>
          <Image
            src={aarchi}
            alt="people"
            style={{ width: "20%", height: "20%" }}
          />
          <h1> AARCHI</h1>
        </div>
        <div>
          <div>
            <Image
              src={heena}
              alt="people"
              style={{ width: "20%", height: "20%" }}
            />
            <h1> HEENA</h1>
          </div>
          <Image
            src={bharat}
            alt="people"
            style={{ width: "20%", height: "20%" }}
          />
          <h1> BHARAT</h1>
        </div>
        <a href="https://bhiwani.haryanapolice.gov.in/index">
          <h4>Contact Bhiwani Police{" "}</h4>
        </a>
      </center>
      <Footer></Footer>
    </div>
  );
}
