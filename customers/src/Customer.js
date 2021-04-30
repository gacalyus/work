import React, { Component } from 'react'

import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { Link } from "react-router-dom"
import alertify from 'alertifyjs'
export default class Customer extends Component {

   
    

    onDeleteClick(id, e) {
        const { deleteCustomer } = this.props;
        const { name } = this.props;
        
        deleteCustomer(id)
        alertify.alert(name + "  Müşterisi Silindi")
    }
    onEditClick(id, e) {
        const { editCustomer } = this.props;
        editCustomer(id)
    }


    render() {
        const { id, name, type, adress, GSM, Email } = this.props;
        return (

            <tr>

                <th>{name}</th>
                <th>{type}</th>
                <th>{adress}</th>
                <th>{GSM}</th>
                <th>{Email}</th>
                <th><button
                    onClick={this.onEditClick.bind(this, id)}
                    className="btn btn-active" >
                    <Link to="Edit">EDİT</Link>
                </button></th>
                <th><button
                
                    onClick={this.onDeleteClick.bind(this, id)}
                    className="btn btn-danger">sil</button></th>
            </tr>

        )
    }
}
