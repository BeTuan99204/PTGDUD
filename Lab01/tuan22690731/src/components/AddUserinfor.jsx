import React from "react";
import PropTypes from "prop-types";
class AddUserInfor extends React.Component{
    state = {
        name: '',
        age: ''
    }

    handleNameInput = (event) => {
        this.setState({name: event.target.value});
    }
    handleAgeInput = (event) => {
        this.setState({age: event.target.value});
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1),
            name: this.state.name,
            age: this.state.age
        })
    }
    render(){
        return(
            <div>
                <div>Name: {this.state.name}</div>
                <div>Age: {this.state.age}</div>
                <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label htmlFor="">Name: </label>
                    <input type="text" onChange={(event1) => this.handleNameInput(event1)}/>
                    <br />
                    <label htmlFor="">Age: </label>
                    <input type="text" onChange={(event2) => this.handleAgeInput(event2)}/>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

AddUserInfor.propTypes = {
    handleAddNewUser : PropTypes.func.isRequired
}

export default AddUserInfor;