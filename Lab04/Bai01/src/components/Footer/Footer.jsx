import "./Footer.css"
import { assets } from "../../assets/assets"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="left">
                    <p className="title">About Us</p>
                    <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                    <div className="box-email">
                        <input type="text" placeholder="Enter your email" />
                        <button>Send</button>
                    </div>
                    <div className="box-privacy">
                        <img src={assets.logo} alt="logo" />
                        <p>2023 Chefify Company</p>
                        <p>Terms of Service Privacy Policy</p>
                    </div>
                </div>
                <div className="right">
                    <div className="box-learn">
                        <div className="box-shop">
                            <h4>Learn More</h4>
                            <ul>
                                <li>Our Cooks</li>
                                <li>See Our Features</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Shop</h4>
                            <ul>
                                <li>Gift Subcription</li>
                                <li>Send Us Feedback</li>
                            </ul>
                        </div>
                    </div>
                    <div className="box-recipe">
                        <h4>Recipes</h4>
                        <ul>
                            <li>What to Cook This Week</li>
                            <li>Pasta</li>
                            <li>Dinner</li>
                            <li>Healthy</li>
                            <li>Vegetarian</li>
                            <li>Vegan</li>
                            <li>Christmas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;