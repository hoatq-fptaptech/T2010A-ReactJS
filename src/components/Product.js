import React from "react";
import {connect} from "react-redux";

class Product extends React.Component{
    // prop
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(){
        // đây là chỗ thêm sp vào redux
        const p={
            productName: this.props.productName,
            price: this.props.price
        }
        this.props.addCart(p);
    }
    render() {
        return <div>
            <img src="/images/product.png" className="thumbnail"/>
            <h2>{this.props.productName}</h2>
            <p>${this.props.price}</p>
            <p><button onClick={this.addToCart} type="button" className="btn btn-danger">
            Add To Cart</button></p>
        </div>
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addCart: p=>{
            dispatch({type:"add_cart",product:p});
        }
    }
}
export default connect(null,mapDispatchToProps)(Product);