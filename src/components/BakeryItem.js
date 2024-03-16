// TODO: create a component that displays a single bakery item
import { useState } from "react";
import "./bakeryitem.css"





export default function BakeryItem(props){

    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(prevCount => prevCount + 1); 
    }
    
    const set = () => {
        props.addToCart({ name: props.name, quantity: count, price: props.price}); 
    }


    return(
        <div className="bakeryItem">
            <div className ="img-holder">
                <img src= {props.image} alt= {props.name + "image"}></img>
            </div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="bottom">
                <div className = "price">{props.price}</div>
                <AddToCartButton add={increment} set={set}/>
            </div>
        </div>
    );
}

function AddToCartButton(props){
    function handleClick(){
        props.add();
        props.set();
    }

    return(
        <div>
            <button onClick={handleClick}> Add to Cart</button>
        </div>

    );
}


