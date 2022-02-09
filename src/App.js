import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
class App extends React.Component{
  ready(data){
      alert(data+": I am ready!");
  }
  render(){
      var list = [
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
      ];
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Main list={list} ready={this.ready}/>
            </div>

            <Footer/>
        </div>
    );
  }

}
// passing data from parent to child component
export default App;
