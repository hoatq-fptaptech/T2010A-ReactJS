import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Detail from "./pages/Detail";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            numberOfPerson:0,
            list: [
                {
                    productName: "Áo lông thời trang",
                    price: 15.9
                },
                {
                    productName: "Áo khoác thời trang",
                    price: 10.9
                },
                {
                    productName: "Túi xách Gucci",
                    price: 108
                },
                {
                    productName: "Đồng hồ Casio",
                    price: 6
                }
            ],
            product:{
                productName:"",
                price:0
            }
        }
        this.changeNum = this.changeNum.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    changeNum(){
        let n = this.state.numberOfPerson;
        this.setState({numberOfPerson:n+1});
    }
    ready(data){
      alert(data+": I am ready!");
    }
    // form handling
    formSubmit(e){
        let p = this.state.product;
        if(p.productName.length > 0 && p.price>=0){
            let list = this.state.list;
            list.push(p);
            this.setState({
                list:list,
                product:{
                    productName:"",
                    price:0
                }
            });
        }else{
            alert("Vui lòng nhập đủ thông tin sản phẩm!");
        }
        e.preventDefault();
    }
    changeValue(e){
        let p = this.state.product;
        p[e.target.name] = e.target.value;
        this.setState({product:p});
    }
  render(){
      var list = this.state.list;
    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <div className="container">
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/categories" exact element={<Categories/>}/>
                    <Route path="/detail" exact element={<Detail/>}/>
                </Routes>
            </div>
            <div className="container">
                <form onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input onChange={this.changeValue} name="productName" value={this.state.product.productName} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input onChange={this.changeValue} name="price"  value={this.state.product.price} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </div>
                </form>
                <button onClick={this.changeNum}>Change</button>
                <Main num={this.state.numberOfPerson} list={list} ready={this.ready}/>
            </div>

            <Footer/>
        </div>
        </BrowserRouter>
    );
  }

}
// passing data from parent to child component
export default App;
