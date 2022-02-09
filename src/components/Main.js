import React from "react";
import Product from "./Product";

export default class Main extends React.Component{
    startReady(data){
        this.props.ready(data);
    }
    render(){
        var products = this.props.list;
        return <ul className="row">
            {
              products.map((e,k)=>{
                  //e <=> products[i]
                 return <li className="col-md-3" onClick={this.startReady.bind(this,e.productName)} key={k}>
                         <Product productName={e.productName} price={e.price}/>
                     </li>
              })
            }
        </ul>
    }
}