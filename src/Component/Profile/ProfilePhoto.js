import React from 'react';
import Img from './Photo.jpg' 

export default function ProfilePhoto() {
  return (
    <div>
    <h1>ProfilePhoto</h1> 
    <img src={Img} className="Image" alt='img'></img>
    <form>
  <div className="form-group">
    <label className="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label className="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
