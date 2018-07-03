import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import App from './App';

/*const JSON_DATA = [{
    "jobId":"123",
    "jobDesc":"Developer",
    "interviewDate":"12-02-2019",
    "interviewerFeedback":"On Hold"
  },
  {
    "jobId":"1234",
    "jobDesc":"Analyst",
    "interviewDate":"19-02-2019",
    "interviewerFeedback":""
  },
  {
    "jobId":"12314",
    "jobDesc":"Specialist",
    "interviewDate":"19-02-2019",
    "interviewerFeedback":""
  },
  {
    "jobId":"12324",
    "jobDesc":"Lead",
    "interviewDate":"19-02-2019",
    "interviewerFeedback":""
  }
  ]*/
class Jobs extends React.Component{
  constructor(){
    super();
    this.state={
      data: [],
    }
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    axios.get(`[{
      "jobId":"123",
      "jobDesc":"Developer",
      "interviewDate":"12-02-2019",
      "interviewerFeedback":"On Hold"
    },
    {
      "jobId":"1234",
      "jobDesc":"Analyst",
      "interviewDate":"19-02-2019",
      "interviewerFeedback":""
    },
    {
      "jobId":"12314",
      "jobDesc":"Specialist",
      "interviewDate":"19-02-2019",
      "interviewerFeedback":""
    },
    {
      "jobId":"12324",
      "jobDesc":"Lead",
      "interviewDate":"19-02-2019",
      "interviewerFeedback":""
    }
    ]`)
    .then( res =>{
       res.data
       this.setState({data: res.data});
    })
  }
    render(){
    return  <div>
        <h3>Applied Jobs</h3>
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
            <td>{data.jobId}</td>
            <td>{data.jobDesc}</td> 
            <td>{data.interviewDate}</td>
            <td>{data.interviewerFeedback}</td>
            <td><Link exact to="/efeedback onclick={this.handleClick}">Give Feedback</Link></td>
            </tr>
        )
      }

</table>
    </div>
    }
}
export default Jobs;
