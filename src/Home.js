import React from 'react'
class Home extends React.Component{
    render(){
      return  <div><h1>Welcome to Ghanta Jobs</h1>
      <h5>Ghanta Jobs was established in 2015 by two Ghatiya Institute alumini Sunny B and Pavat C.
          The organization was started in a 2BHK in Bangalore and grew manifold over the past 3 years 
          emerging as the 3rd most searched website for jobs
      </h5>
        <p><h3><b>Few fun facts!</b></h3></p>
       <li>Parvat C, the CEO was jobless when he founded the org</li>
       <li>All the employees at Ghanta Jobs have RSUs</li>

           <h4>Login/Sign Up here</h4>
           ID 
           <input type="text"/>
           <br/>
           PIN 
           <input type="text"/>
           <br/>
           <input type="submit" value="Login"/>
       </div>
    }
}
export default Home;