import React  from "react";

class ChildComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valueInput : ''
        }
    }
    handleInput = (event) =>{
        this.setState({valueInput: event.target.value})
    }
    handleSubmit = (event) =>{
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <span>{this.state.valueInput}</span>
                <br />
                <form action="" onSubmit={(event) => this.handleSubmit(event)}>
                    <input value={this.state.valueInput} onChange={(event)=>this.handleInput(event)} type="text"/>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}