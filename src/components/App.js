import React, { Component } from 'react';
import SearchComponent from './SearchComp';
import axios from 'axios';
import ImageList from './ImageList';




class App extends Component
 {
     state={images:[]}

     onSearchSubmit=(term)=>{
        axios.get('https://api.unsplash.com/search/photos',
        {
            params:{query:term},
            headers:{
                Authorization:'Client-ID rQA03ObpyotH3MeU4FfDL9YKsZKI1bvyuOS7G86ahkY'
            }
        }).then((response)=>{
           this.setState({images:response.data.results});
        });
     }

     render(){
      return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchComponent onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
          )
   }
}

export default App;
