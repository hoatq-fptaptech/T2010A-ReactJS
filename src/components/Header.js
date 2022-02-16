import React from "react";
import {Adapter,API_URL} from "../Adapter";

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            categories:[],
            category:{
                categoryName:"",
                categoryImage:""
            }
        }
        this.changeValue =  this.changeValue.bind(this);
        this.formSubmit =  this.formSubmit.bind(this);
    }
    componentDidMount() {
        Adapter.get(API_URL.GetCategories).then(rs=>{
            this.setState({categories:rs.data});
        })
    }
    changeValue(e){
        let p = this.state.category;
        p[e.target.name] = e.target.value;
        this.setState({category:p});
    }
    formSubmit(e){
        var cat = this.state.category;
        Adapter.post(API_URL.PostCategories,cat).then(rs=>{
            let cats = this.state.categories;
            cats.push(rs.data);
            this.setState({categories:cats});
        })
        e.preventDefault();
    }
    render() { // sinh ra giao diện cho component
        let cats = this.state.categories;
        return (
            <div className="container">
                <form onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label>Category Name</label>
                        <input onChange={this.changeValue} name="categoryName" value={this.state.category.categoryName} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Category Image</label>
                        <input onChange={this.changeValue} name="categoryImage"  value={this.state.category.categoryImage} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </div>
                </form>
            <ul>
                {
                    cats.map((e,k)=>{
                        return <li key={k}><a href="#">{e.categoryName}</a> </li>
                    })
                }
            </ul>
            </div>
        );
    }
}