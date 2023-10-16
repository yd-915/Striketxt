import React from 'react'
// import {Link} from 'react-router-dom'
import {Signup} from './signUp'
import {AboutUs} from './'
import BitcoinInfo from './BitcoinsInfo'

export default function HomePage() {
  return (
    <div>
      <div id="wholePage">
        <div className="instructionSignUp">
          <div className="instructions">
            <h1 id="work">How It Works</h1>

            <span className="text">
              Strike SMS helps you send sats via SMS. Sign up 
             and include your phone number and Bitcoin wallet and 
             you can start sending 
              to someone registered. You don't need
              Internet! You just need a phone number!
            </span>
            <h2 id="lightning">Lightning Wallets ⚡ </h2>
            <h4>with zero configuration</h4>
            <span className="text">
              Strike SMS brings zero
              configuration, ready to use, user friendly Lightning Network
              Wallets for iOS and Android. Read more about our open source.
            </span>
          </div>
        </div>

        <div
          className="iphoneHome"
          style={{
            position: 'relative',
            display: 'inline'
          }}
        >
          <img
            src="/images/lightText.gif"
            style={{
              width: 225,
              height: 490,
              position: 'absolute',
              top: '1%',
              left: '3%',
              zIndex: '-1'
            }}
          />
          <img
            className="iphoneImg"
            src="/images/iphone.png"
            style={{width: 250, height: 501}}
          />
        </div>
        <div />
      </div>
      <div className="centralDiv">
        <div className="signUp">
          <Signup />
        </div>
        <div className="cryptoEasy">
          <span id="text">Send sats as easy as sending a text!</span>
        </div>
      </div>
      <div className="bottomDiv">
        <div className="bitcoinHome">
          <BitcoinInfo />
        </div>
      </div>
      <div className="lastDiv">
        <div>
        
        </div>
      </div>
      <div>
        <AboutUs />
      </div>
    </div>
  )
}
