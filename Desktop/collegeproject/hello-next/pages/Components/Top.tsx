import Link from 'next/link'
import React from 'react'

export default function Top() {
  return (
    
    <div style={{display:"flex",justifyContent:"space-between",color:"#ff6600"}}>
        <div style={{fontSize:"3rem"}}>C tour</div>
 <div style={{display:"flex",fontSize:"larger",color:"#ff6600",marginRight:"3%"}}>

<div style={{marginRight:"2%"}}><Link href="/school" style={{textDecoration:"none",color:"#ff6600"}}>Schools/colleges</Link></div>
<div style={{marginRight:"2%"}}>Famous</div>
<div style={{marginRight:"2%"}}><Link href="/Food" style={{textDecoration:"none",color:"#ff6600"}}>Food/Restaurants</Link></div>
<div >Food/Restaurants</div>
</div>
</div>

  )
}
