import { assets } from "../../assets/assets"
import "tailwindcss"


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
            <div className="flex justify-evenly items-center gap-2">
                <div className="flex items-center gap-5">
                    < img src={assets.logo} alt="logo" className="w-[50px] h-[50px]"/>
                    <p className="text-[25px] font-bold text-[#e64077]">Chefify</p>
                </div>
                <div className="flex justify-start bg-[#e7e7e7] p-[10px] px-[20px] rounded-[10px] w-[250px]">
                    <img src={assets.search_icon} alt="search_icon" className="w-[25px] mr-[10px]"/>
                    <input type="text" placeholder="cakescascsa" className="outline-none border-none bg-[#e7e7e7]"/>
                </div>
                <ul className="m-0 list-none flex justify-between items-center gap-5">
                    {menu.map((item, index) => (
                        <li className="p-[10px] px-[20px] text-[#4d4d4d]" key={index}>{item}</li>
                    ))}
                </ul>
                <div className="flex items-center justify-between gap-2.5 bg-[#e7e7e7] rounded-[10px] px-5 text-[#e64077]">
                    <img src={assets.tasklist} alt="tasklist"  className="w-6 h-6"/>
                    <p>Your Recipe Box</p>
                </div>
                <img src={assets.user_icon} alt="user_icon" />
            </div>
        </>
    )
}

export default Header;