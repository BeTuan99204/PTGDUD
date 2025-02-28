import {useState} from "react";
import PropTypes from "prop-types";


DisplayInfor.propTypes = {
    listUser : PropTypes.array.isRequired,
    handleDeleteUser: PropTypes.func.isRequired
}
function DisplayInfor(props){
    const {listUser} = props;
    const [isShowListUser, setShowListUser] = useState(true);
    const handleShowAndHideUserList = () => {
        setShowListUser(!isShowListUser);
    };
    return(
        <div>
            <span onClick={() => handleShowAndHideUserList()}>{isShowListUser ? "Hide List User" : "Show List User"}</span>
            {isShowListUser && listUser.map((item) => (
                <div key={item.id} className={item.age < 18 ? "red" : "blue"}>
                    <div>Name: {item.name}</div>
                    <div>Age: {item.age}</div>
                    <button onClick={() => {props.handleDeleteUser(item.id)}}>Delete</button>
                    <hr/>
                </div>
            ))}
        </div>
    );
}
export default DisplayInfor;
