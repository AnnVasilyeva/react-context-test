import React, {Component} from 'react';
import MyContext from './Context';

export default class Name extends Component {
  render() {
    return(
      <div className='name'>
        My name is {this.context.name}, age {this.context.age}
      </div>

      // for function Name, no class
      // <MyContext.Consumer>
      //   {
      //     (value) => {
      //       return(
      //        <div className='name'>
      //          My name is {value}
      //        </div>
      //       )
      //     }
      //   }
      // </MyContext.Consumer>
      
    )
  }
   
}

Name.contextType = MyContext;