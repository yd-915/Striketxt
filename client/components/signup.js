import React from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'
import {Link} from "react-router-dom";
import {Button, Grid, Header, Image, Segment} from 'semantic-ui-react'

/**
 * COMPONENT
 */

const SignUp = props =>  {
 const {displayName} = props
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
   
             
            <Link to="https://first-kkhgjn.zitadel.cloud/"> Sign up with Zitadel</Link>
           
         
        </Grid.Column>
      </Grid>
    </div>
  )
}



export const Signup = connect(SignUp)
