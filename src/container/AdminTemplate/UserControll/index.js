import React, { Component } from 'react'
import Axios from 'axios'


export default class UserControll extends Component {

    state={
        taskList:[]
    }
    
    renderTable = () => {
      return this.state.taskList.map((item,index)=>{
         return <tr>
         <td>{item.hoTen}</td>
         <td>{item.email}</td>
         <td>{item.soDt}</td>
         <td>{item.maLoaiNguoiDung}</td>
        
         <td>
           {/* <button
             className="btn btn-info mr-2"
             data-toggle="modal"
             data-target="#modelIdUser"
             onClick={() => {
               this.props.editUser(user);
             }}
           >
             Edit
           </button>
           <button className="btn btn-danger" onClick={() => {
             console.log(user.id);
             // this.props.deleteUser(user.id)
             this.props.deleteUser(user.id);
           }}>Delete</button> */}
         </td>
       </tr>
      }  
      )
      };
   

    render() {
        // this.getTaskList()
        return (
            <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                 
                {this.renderTable()}
              </tbody>
            </table>
          </div>
        )
    }
}
