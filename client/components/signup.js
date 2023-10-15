import React from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'

import {Button, Form, Grid, Header, Image, Segment} from 'semantic-ui-react'

/**
 * COMPONENT
 */

const SignUp = props => {
  const {name, displayName, handleSubmit, error} = props
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
            <Link to="/auth/google"> {displayName} with Google </Link>
         
        </Grid.Column>
      </Grid>
    </div>
  )
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}
const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const newPhone = evt.target.phoneNumber.value
      const userName = evt.target.userName.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      const phone = '+1' + newPhone

      dispatch(auth(userName, email, password, phone))
    }
  }
}

export const Signup = connect(mapSignup, mapDispatch)(SignUp)
