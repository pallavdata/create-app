import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

class App extends Component{
  render(){
    return(
      <div className="custom-container rounded-4">
      <img className="rounded-4" src="https://i.ibb.co/QpWDj5r/rocket.png" alt="rocket" />
      <div className="p-4">
          <div className="c-blue text-center"><b>Welcome to Bardeen</b></div>
          <form>
          <div className="text-center mt-1 mb-4">Let's log in to lounch your automations.</div>
              <input className="form-control p-2 ps-4 mt-1 mb-1" placeholder='Email Address'></input>
              <input className="form-control p-2 ps-4 mt-1 mb-1" placeholder='Password'></input>
              <div className="d-flex justify-content-between mt-3 mb-3">
                  <a href="#">Create Account</a>
                  <a href="#">Forgot Password?</a>
              </div>
              <button className="p-2 form-control btn">Sign in</button>
          </form>
      </div>
  </div>
    )
  }
}
export default App;
