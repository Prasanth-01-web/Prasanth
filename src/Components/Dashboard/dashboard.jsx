/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button} from 'react-bootstrap'
import Header from '../Header/header'
import Footer from '../Footer/footer'

class Dashboard extends React.Component {
  render() {
    return (
      <div
        className="container"
        style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
      >
        <div>
          <Header />
        </div>

        <div className="Form">
          <Form
            style={{
              width: '455px',
              position: 'relative',
              top: '30px',
              left: '400px',
              padding: '10px 30px',
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>*Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>*Email id</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMobileNumber">
              <Form.Label>*Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Mobile Number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>*Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>*Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ width: '395px', backgroundColor: 'red' }}
            >
              Submit
            </Button>
          </Form>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    )
  }
}
export default Dashboard
