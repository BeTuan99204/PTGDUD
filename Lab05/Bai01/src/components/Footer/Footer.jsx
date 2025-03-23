import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div className="flex gap-24 bg-gray-900 text-white p-2.5 rounded-md">
            <div className="w-1/2">
                <p className="text-lg font-bold">About Us</p>
                <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                <div className="mb-20 flex items-center">
                    <input 
                        type="text" 
                        placeholder="Enter your email" 
                        className="p-2 rounded-md border-none mr-2 w-72"
                    />
                    <button className="p-2 bg-pink-600 rounded-md text-white font-bold">Send</button>
                </div>
                <div className="flex items-center gap-8 text-xs">
                    <img src={assets.logo} alt="logo" className="w-10"/>
                    <p>2023 Chefify Company</p>
                    <p>Terms of Service Privacy Policy</p>
                </div>
            </div>
            <div className="flex flex-1 justify-center gap-48">
                <div>
                    <h4 className="font-semibold">Learn More</h4>
                    <ul className="list-none p-0">
                        <li className="mb-2">Our Cooks</li>
                        <li className="mb-2">See Our Features</li>
                        <li className="mb-2">FAQ</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold">Shop</h4>
                    <ul className="list-none p-0">
                        <li className="mb-2">Gift Subscription</li>
                        <li className="mb-2">Send Us Feedback</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold">Recipes</h4>
                    <ul className="list-none p-0">
                        <li className="mb-2">What to Cook This Week</li>
                        <li className="mb-2">Pasta</li>
                        <li className="mb-2">Dinner</li>
                        <li className="mb-2">Healthy</li>
                        <li className="mb-2">Vegetarian</li>
                        <li className="mb-2">Vegan</li>
                        <li className="mb-2">Christmas</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;