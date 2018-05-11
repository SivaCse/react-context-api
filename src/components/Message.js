import React from 'react'
import { HelloContext } from '../contexts/hello-context';
import ButtonContext from '../contexts/button-context';

const Message = () => {
  return (
    <HelloContext.Consumer>
      {
        ({message, toggleMessage}) => (
          <header className="App-header">
            <h1 className="App-title">
              { message.firstWord + ' ' + message.secondWord }
            </h1>
            <ButtonContext.Consumer>
              {
                ({title}) => (
                  <button onClick={ toggleMessage }>
                    { title }
                  </button>
                )
              }
            </ButtonContext.Consumer>
          </header>
        )
      }
    </HelloContext.Consumer>
  )
}

export default Message