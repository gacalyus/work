import React, { Component } from "react"
import Navi from "./Navi"
import Create from "./Create"
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Route, Switch } from "react-router";
import Edit from "./Edit";




export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: [
        {
          id: 1,
          name: "ismail göktaş",
          type: "Şahıs",
          adress: "Maltepe",
          GSM: "549 341 93 34",
          Email: "şopar@gmail.com"
        },
        {
          id: 2,
          name: "yunus göktaş",
          type: "Şahıs",
          adress: "Vize",
          GSM: "549 341 93 43",
          Email: "kopil@gmail.com"
        },
        {
          id: 3,
          name: "ömer göktaş",
          type: "Şirket",
          adress: "Kadıköy",
          GSM: "549 341 93 12",
          Email: "kızan@gmail.com"
        }
      ]
    };
    this.editCustomer=this.editCustomer.bind(this)
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
  }
  addCustomer(newCustomer) {
    let updatedCustomers = this.state.customers;

    updatedCustomers.push(newCustomer)

    this.setState({
      customers: updatedCustomers
    })
  }


  deleteCustomer(id) {

    let updatedCustomers = this.state.customers;
    updatedCustomers = updatedCustomers.filter(user => user.id !== id);

    this.setState({
      customers: updatedCustomers
    })
  }
  editCustomer (id){
    let editCustomers = this.state.customers;
    editCustomers = editCustomers.filter(user => user.id === id);

    this.setState({
      customers: editCustomers
    })
  }
  


  render() {


    return (
      <div>
        <Container>

          <br></br>
          <Breadcrumb>
            <BreadcrumbItem path="/" active>Customers</BreadcrumbItem>
          </Breadcrumb>

          <Switch>
            <Row>
              <Col xs="10">
                <Route
                  exact
                  path="/"
                  render={props => (

                    <Navi
                      {...props}
                     editCustomer={this.editCustomer}
                      deleteCustomer={this.deleteCustomer}
                      customers={this.state.customers} ></Navi>)} />
              </Col>

              <Col xs="2">
                <Route
                  exact
                  path="/"
                  render={props => (

                    <Create
                      {...props}
                      addCustomer={this.addCustomer}>
                    </Create>
                  )} />

              </Col>
              <Route exact path="/Edit" render={props => (
                <Edit
                  {...props}
                  editCustomer={this.editCustomer}
                  deleteCustomer={this.deleteCustomer}
                  customers={this.state.customers}>

                </Edit>

              )}></Route>

            </Row>
          </Switch>
        </Container>
      </div>
    );
  }
}

