import { assets } from "../../assets/assets";
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="home">

                <div className="left">
                    <img src={assets.filter} alt="filter" />
                </div>

                <div className="right">
                    <h1>Sorry, no results were found for "cakescascsa"</h1>
                    <img src={assets.not_found_icon} alt="not_found_icon" />
                    <p>We have all your Independence Day sweets covered</p>
                    <div className="btn-group">
                        <button>Sweet Cake</button>
                        <button>Black Cake</button>
                        <button>Pozole Verde</button>
                        <button>Healthy food</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;