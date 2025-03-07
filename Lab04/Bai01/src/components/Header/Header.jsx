import { assets } from "../../assets/assets"
import "./Header.css"


const Header = () => {

    const menu = [
        "What to cook",
        "Recipes",
        "Ingredients",
        "Occasions",
        "About Us"
    ]

    return (
        <>
            <div className="navbar">
                <div className="box-logo">
                    <img src={assets.logo} alt="logo" />
                    <p>Chefify</p>
                </div>
                <div className="box-input">
                    <img src={assets.search_icon} alt="search_icon" />
                    <input type="text" placeholder="cakescascsa"/>
                </div>
                <ul className="navbar-menu">
                    {menu.map((item, index) => (
                        <li className="navbar-menu_item" key={index}>{item}</li>
                    ))}
                </ul>
                <div className="box-recipe">
                    <img src={assets.tasklist} alt="tasklist" />
                    <p>Your Recipe Box</p>
                </div>
                <img src={assets.user_icon} alt="user_icon" />
            </div>
        </>
    )
}

export default Header;