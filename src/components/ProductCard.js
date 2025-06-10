import React from "react";
import {useState} from "react";

/*
    Component for holding product details
*/
function ProductCard({title, description, price , oldPrice, image}){

    const [value , setValue] = useState(price);
    const [priceStyle , setPriceStyle] = useState("price-tag");
    const [buttonText , setButtonText] = useState("Original Price");

    const changePrice = () => {
        setValue(value === price ? oldPrice : price);
        setPriceStyle(priceStyle === "price-tag" ? "oldPrice-tag" : "price-tag");
        setButtonText(value === price ?  "Current Price" : "Original Price");
    };


    return (
        <React.Fragment>
            <div className="card-container border-1 grid-2">
                <div className="image-container">
                    <img src={image} alt={title + " image"} className="product-img"/>
                </div>
                <div className="text-center card-title px-1">
                    <h3>{title}</h3>
                </div>
                <div className="color-secondary flex-fill">
                    <p className="px-1">{description}</p>
                </div>
                <div className="flex-row">
                    <p className={`flex-fill ps-1 ${priceStyle}`}>{"$" + value}</p>
                    <button className="w-15 btn-price" onClick={changePrice}>{buttonText}</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductCard;