import RestaurantCard from "./RestauantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    const [restaurants, setRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = restaurants.filter((res) => res.info.rating.aggregate_rating > 4);
                    setRestaurants(filteredList)
                    console.log(filteredList)
                }}
                
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
               {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
               ))}
            </div>
        </div>
    )
}

export default Body;