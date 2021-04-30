import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import alertify from 'alertifyjs'


export default class Create extends Component {

    state = {
        name: "",
        type: "",
        adress: "",
        GSM: "",
        Email: ""
    }
    onNameChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onTypeChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onAdressChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onGSMChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onEmailChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onAddSubmit(e) {
        const { addCustomer } = this.props;
        const { name, type, adress, GSM, Email } = this.state
        const newCustomer = {
            id: Math.random(),
            name: name,
            type: type,
            adress: adress,
            GSM: GSM,
            Email: Email
        };
        addCustomer(newCustomer);

        alertify.alert(name + " Müşterisi Eklendi")
        e.preventDefault();
    }
    render() {
        const { name, type, adress, GSM, Email } = this.state;
        return (
            <div>
                <hr></hr>
                <h3 className="small">Create New Customer</h3>
                <hr></hr>
                <Form onSubmit={this.onAddSubmit.bind(this)} >

                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="name" name="name" id="name" placeholder="isim" value={name}
                            onChange={this.onNameChange.bind(this)}
                        ></Input>

                    </FormGroup>
                    <FormGroup>
                        <Label for="type">Type</Label>
                        <Input type="type" name="type" id="type" placeholder="type" value={type}
                            onChange={this.onTypeChange.bind(this)}
                        ></Input>

                    </FormGroup>

                    <FormGroup>
                        <Label for="adress">Adress</Label>
                        <Input type="adress" name="adress" id="adress" placeholder="adress" value={adress}
                            onChange={this.onAdressChange.bind(this)}
                        ></Input>

                    </FormGroup>

                    <FormGroup>
                        <Label for="GSM">GSM</Label>
                        <Input type="GSM" name="GSM" id="GSM" placeholder="GSM" value={GSM}
                            onChange={this.onGSMChange.bind(this)}
                        ></Input>

                    </FormGroup>

                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="Email" name="Email" id="Email" placeholder="Enter Email"  value={Email}
                        onChange={this.onEmailChange.bind(this)}
                        ></Input>
                    </FormGroup>
                    <Button type="submit">Create</Button>
                    <hr></hr>
                   
                    
                </Form>
            </div>
        )
    }
}
