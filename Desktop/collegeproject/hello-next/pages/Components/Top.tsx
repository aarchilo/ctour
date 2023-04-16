import Link from 'next/link'
import React from 'react'

export default function Top() {
  return (
    <div>
    <div style={{display:"flex",justifyContent:"space-between",color:"#ff6600"}}>
        <div style={{fontSize:"3rem",marginBottom:"2%"}}>C tour (Bhiwani)</div>
</div>
<div
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
      </div>
</div>

  )
}
