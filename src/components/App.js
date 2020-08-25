import React, { Component } from 'react'
import SearchComponent from './SearchComp'

class App extends Component
 {
     onSearchSubmit=(term)=>{
         console.log(`im from App ${term}`);
     }
     
     render(){
      return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchComponent onSubmit={this.onSearchSubmit}/>
            </div>
          )
   }
}

export default App;
