


const RestaurantCard =(props) => {
    const { resData} = props;

    const {
        image,
        name,
        rating,
        cuisine,
        distance,
        locality,
    } = resData?.info

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo"
            src={image?.url}
            />
            <h3>{name}</h3>
            <h4>{cuisine?.map(item => item.name).join(", ")}</h4>
            <h4>{rating?.aggregate_rating} stars</h4>
            <h4>{distance}</h4>
            <h4>{locality?.address} </h4>
        </div>
    )
}

export default RestaurantCard