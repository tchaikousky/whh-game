import React, { Component } from 'react';

class GuessInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            solutionLength: this.props.solution.length, 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
         
    }
    
    
    render() {
        
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" autoFocus maxLength={this.state.solutionLength} onChange={this.handleChange} ></input>
                </form>
            </div>
        )
    }
}

export default GuessInput;