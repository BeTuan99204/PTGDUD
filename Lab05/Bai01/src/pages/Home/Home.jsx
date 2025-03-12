import { assets } from "../../assets/assets";
import { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://67c863fb0acf98d070865c67.mockapi.io/restaurant")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="my-10 flex gap-12 px-10">
 
            <div className="w-1/4 text-center">
                <img src={assets.filter} alt="filter" className="mx-auto"/>
            </div>

            <div className="w-3/4">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Salad (32)</h1>
            
            <select 
                name="sort" 
                id="sort"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e64077] transition"
            >
                <option value="asc">A-Z</option>
            </select>
        </div>


                <div className="flex flex-wrap gap-10 items-center justify-around">
                    {data.map((item, index) => (
                        <div 
                            key={index} 
                            className="w-[200px] cursor-pointer transition-transform hover:scale-105"
                        >
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="rounded-lg w-full h-[50%] shadow-md"
                            />
                            <div className="p-2">
                                <h4 className="text-lg font-semibold">{item.name}</h4>
                                <p className="text-[#e64077]">{item.time} minutes</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
