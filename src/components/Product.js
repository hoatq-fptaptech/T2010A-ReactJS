import React from "react";

export default class Product extends React.Component{
    // prop

    render() {
        return <div>
            <img src="/images/product.png"/>
            <h2>{this.props.productName}</h2>
            <p>${this.props.price}</p>
        </div>
    }
}