import React from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'
import {Link} from "react-router-dom";
import {Button, Form, Grid, Header, Image, Segment} from 'semantic-ui-react'

/**
 * COMPONENT
 */

const SignUp = "sign up through zitadel"  {
 
  return (
    <div className="login-form">
      {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
      <Grid textAlign="center" style={{height: '100%'}} verticalAlign="middle">
        <Grid.Column style={{maxWidth: 450}}>
          <Header as="h2" color="#F9DB52" textAlign="center">
            {/* <Image src="/images/lightbulb.png" /> */}
            {displayName} to your account
          </Header>
          <Form size="large" onSubmit={handleSubmit} name={name}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="User name"
                name="userName"
                type="text"
                required
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                type="text"
                required
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                name="password"
                type="password"
                required
              />
              <Form.Input
                fluid
                icon="phone"
                iconPosition="left"
                placeholder="Phone Number"
                name="phoneNumber"
                type="text"
                required
              />
              <Button type="submit" color="#F9DB52" fluid size="large">
                Sign Up
              </Button>
            </Segment>
            {error && error.response && <div> {error.response.data} </div>}
          </Form>
             { 
            <Link to="https://first-kkhgjn.zitadel.cloud/"> Sign up with Zitadel</Link>
           }
         
        </Grid.Column>
      </Grid>
    </div>
  )
}



export const Signup
