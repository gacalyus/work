import React, { Component } from 'react'

import { ListGroup, ListGroupItem, Table } from 'reactstrap';
import Customer from './Customer';
import EditCustomer from "./EditCustomer"
import { Row, Col,Button } from "reactstrap"




export default class Edit extends Component {
    render() {
        const { customers, deleteCustomer } = this.props;
        return (
            <div>
                <Row>
                    <Col >
                        <Table>
                            <tbody>
                                {
                                    customers.map(customer => {
                                        const { id, name,  } = customer;
                                        return <Customer
                                            key={id}
                                            id={id}
                                            name={name}
                                            deleteCustomer={deleteCustomer}
                                        ></Customer>
                                    })
                                }

                            </tbody>
                           
                        </Table>
                        <ListGroup>
                            <ListGroupItem>Customer Type</ListGroupItem>
                            <ListGroupItem>Web Site</ListGroupItem>
                            <ListGroupItem>TCKN</ListGroupItem>
                            <ListGroupItem>İlgili Firması</ListGroupItem>
                            <ListGroupItem>Dosya</ListGroupItem>
                            <ListGroupItem>Not</ListGroupItem>
                        </ListGroup>
                        <hr></hr>
                        <Button href="/"> Customer</Button>
                        
                        
                        </Col>


                    <Col >
                    <EditCustomer></EditCustomer>

                   </Col>
                    
                </Row>
                
            </div>
        )
    }
}