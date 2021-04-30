import React, { Component } from 'react'
import {
    Form, FormGroup, Label, Input,
} from 'reactstrap';

export default class editCustomer extends Component {
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="ad">Ad Soyad</Label>
                        <Input type="ad" name="ad" id="ad" placeholder="Ad Soyad" />
                    </FormGroup>
                </Form>
                <Form>
                    <FormGroup>
                        <Label for="Rol">Rol</Label>
                        <Input type="Rol" name="Rol" id="Rol" placeholder="Rol" />
                    </FormGroup>
                </Form>
                <Form>
                    <FormGroup>
                        <Label for="GSM">GSM</Label>
                        <Input type="GSM" name="GSM" id="GSM" placeholder="GSM" />
                    </FormGroup>
                </Form>
                <Form>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email" id="Email" placeholder="email" />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
