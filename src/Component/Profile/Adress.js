import React from 'react';
import Twiter from './twiter.jpg';
import Facebook from './facebook.png'
export default function Adress() {
  return (
    <div>
    <h1>Adress</h1>
    <p>12 RUE HBIUB THAMER GABES ELKORNICH</p>
    <div>
    <h2>Social Media</h2>
    <img src= {Twiter} className="twiter" alt= "twiter"></img>
    <img src= {Facebook} className="facebook" alt= "facebook"></img>

    </div>
    
    
    </div>
  )
}
