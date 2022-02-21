import React from "react";
import {connect} from "react-redux";

class Footer extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Footer Component</h1>
            <h2>Số sản phẩm trong giỏ hàng:{this.props.cart_item}</h2>
                <h2>Danh sách sản phẩm trong giỏ</h2>
                <ul>
                {
                    this.props.items.map((e,k)=>{
                        return <li key={k}>{e.productName}</li>
                    })
                }
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {
        cart_item: state.cart_item,
        items:state.items
    }
}
export default connect(mapStateToProps,null)(Footer);