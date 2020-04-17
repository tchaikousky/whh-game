import React, { Component } from 'react';

class GuessInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValues: [],
            solutionLength: this.props.solution.length,
            inputs: this.createInput(),   
        }
        this.handleChange = this.handleChange.bind(this);
    }
    createInput() {
        const inputArray = [];
        let count = 0;
        let solutionInput = <input type="text" id={count} autoFocus name={count} maxLength="1" size="1" onChange={this.handleChange} key={count} ref={(input) => { this.name = input; }}></input>
        while(count < this.props.solution.length) {
            inputArray.push(solutionInput);
            count++;
            solutionInput = <input type="text" id={count} name={count} maxLength="1" size="1" onChange={this.handleChange} key={count} ref={(input) => { this["marker"+this.name] = input;}}></input>
        }
        console.log(solutionInput);
        return inputArray;
    }
    handleChange(event) {
        let currentIndex = parseInt(event.target.id);
        let b = this.state.inputs[currentIndex];
        const input = event.target.value;
        console.log(input);
        console.log(b);
        console.log(this.state.inputValues)
        this.setState({
            inputValues: [...this.state.inputValues, input],
            inputs: [...this.state.inputs, b]
        })
        
        b.focus();
        
    }
    
    
    render() {
        
        return(
            <div>
                <form>
                    {this.createInput()}
                </form>
            </div>
        )
    }
}

export default GuessInput;