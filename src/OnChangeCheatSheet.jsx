import React, {useState} from "react";

function OnChangeCheatSheet(){

    const [name, setName] = useState();
    const [quantity, setQuantiny] = useState(1);
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState();

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantinyChange(event){
        setQuantiny(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }


    return(
        <div>
            <input value={name} onChange={handleNameChange} type="text" placeholder="Guest"/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantinyChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Type delivery instructions here"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select Payment Method</option>
                <option value="Card">Card</option>
                <option value="Cash">Cash</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment method: {payment}</p>

            <label>
                <input value="Pick Up" type="radio" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label>
            <br />
            <label>
                <input value="Delivery" type="radio" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default OnChangeCheatSheet