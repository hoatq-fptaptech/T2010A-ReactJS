import React from "react";
import Product from "./Product";

export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            numberOfPerson: props.num
        }
        this.changeNumber = this.changeNumber.bind(this);
    }
    startReady(data){
        this.props.ready(data);
    }
    componentWillMount() {
        console.log("will mount");
    }
    componentDidMount() {
        console.log("did mount..");
    }
    changeNumber(){
        let n = this.state.numberOfPerson;
        n++;
        this.setState({numberOfPerson:n});
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("will update...");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Did update..");
    }
    render(){
        console.log("render...");
        var products = this.props.list;
        return (
        <div>
            <h1>App: {this.props.num}</h1>
            <h1>Main: {this.state.numberOfPerson}</h1>
            <button onClick={this.changeNumber} className="btn btn-primary">Change</button>
            <ul className="row">
                {
                  products.map((e,k)=>{
                      //e <=> products[i]
                     return <li className="col-md-3" onClick={this.startReady.bind(this,e.productName)} key={k}>
                             <Product productName={e.productName} price={e.price}/>
                         </li>
                  })
                }
            </ul>
        </div>
        )
    }
}