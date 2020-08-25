import React,{ Component } from 'react';

class SearchComponent extends Component {
    state={term:''}

    onFormSubmit=e=>{
      e.preventDefault();
      this.props.onSubmit(this.state.term);
    };
  
    render() { 
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Image Search</label>
                    <div className="field">
                        <input value={this.state.term} 
                        onChange={e=>this.setState({term:e.target.value})} type="text"/>
                    </div>
                </form>
            </div>
        )
    };
}
 
export default SearchComponent;