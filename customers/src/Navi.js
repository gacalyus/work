import React, { Component } from 'react'
import { Table } from 'reactstrap';
import Customer from "./Customer"




 class Navi extends Component {
    render() {
        const {customers,deleteCustomer,editCustomer} = this.props;
        
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                           
                            <th >Customer Name</th>
                            <th>Type  </th>
                            <th>Adress </th>
                            <th>GSM </th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                           
                        </tr>

                    </thead>
                    <tbody>
                        {
                            customers.map(customer => {
                                const{id,name,type,adress,GSM,Email}=customer;
                                return <Customer
                                key={id}
                                id={id}
                                name={name}
                                type={type}
                                adress={adress}
                                GSM={GSM}
                                Email={Email}
                                editCustomer={editCustomer}
                                deleteCustomer={deleteCustomer}
                                ></Customer>
                            })
                        }
                       
                    </tbody>
                </Table>
                
            </div>
        )
    }
}
export default Navi


