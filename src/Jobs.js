import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import App from './App';

class Jobs extends React.Component{
  constructor(){
    super();
    this.state={
      data: [],
    }
    this.handleClick=this.handleClick.bind(this);
  }
  //'Access-Control-Allow-Origin': '*',
  componentWillMount(){
    var config = {
    //  headers:{'Access-Control-Request-Headers':'*'}
    };
    axios.get(`http://localhost:8080/applicant`,config)
    .then( res =>{
       res.data
       this.setState({data: res.data});
    }).catch((err)=>{console.log(err)})
  }
  handleClick(){
    axios.get(`http://localhost:8080/applicant`)
    .then( res =>{
       res.data
       this.setState({data: res.data});
    })
  }
    render(){
    return  <div>
        <h3><b><u>Applied Jobs</u></b></h3>
        <table border="1">
        
  <tr>
    <th>Job Id</th>
    <th>Job Description</th> 
    <th>Interview Date</th>
    <th>Interviewer Feedback</th>
    <th></th>
  </tr>
  {
        this.state.data.map(data =>
            <tr>
            <td>{data.ApplicantId}</td>
            <td>{data.Description}</td> 
            <td>{data.interviewDate}</td>
            <td>{data.interviewerFeedback}</td>
            <td><Link exact to="/efeedback onclick={this.handleClick}">Give Feedback</Link></td>
            </tr>
        )
      }
  </table>
  <div>
    <label>Job ID</label>:<label>12234</label><br/>
    <label>Job Description</label>:<label></label><br/>
    <label>Date attended</label>:<label></label><br/>
    <label>Feedback</label><label>:</label><br/>
  </div>
 
 


    </div>
    }
}
export default Jobs;
