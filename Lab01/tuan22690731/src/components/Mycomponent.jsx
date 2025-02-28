import React from "react";
import AddUserInfor from "./AddUserInfor";
import PropTypes from "prop-types"; 
import DisplayInfor from "./Displayinfor";

class MyComponent extends React.Component{ 
    state = {
        listUser:[
            {id: 1, name: "Dung", age: 49},
            {id: 2, name: "Ha", age: 30},
            {id: 3, name: "Mai", age: 17}
        ]
    }

    handleDeleteUser = (userID) => {
        let newListUser = this.state.listUser.filter(user => user.id !== userID);
        this.setState({listUser: newListUser})
    }

    handleAddNewUser = (userObject) => {
        this.setState({listUser : [userObject, ...this.state.listUser]})
    }

    render(){
        return(
            <>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
                <hr />
                <DisplayInfor listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser}/>
            </>
        );
    }
}

MyComponent.propTypes = {
    newListUser: PropTypes.array.isRequired
}
export default MyComponent;