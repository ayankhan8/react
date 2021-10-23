import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
import Studentlist from './booklist';




class AddStudent extends React.Component
{
    routingFunction = (param) => {
        this.props.history.push({
            pathname: `/booklist`,
        });
    }
  state = {
  name: "",title: "",Author: "", publication: "",genre: "",review:""    
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.title === ""|| this.state.Author === ""|| this.state.publication === ""|| this.state.genre === ""||this.state.review ==="") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addStudentHandler(this.state);
    this.setState({ name: "", title: "", Author: "", publication: "", genre: "" });
  };
    render(){
        return(
            <div className="ui main">
                <h2>Add BOOKS</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Book Name</label>
    <input type="text" name="name" placeholder="Name"
      value={this.state.name}
     onChange={(e) => 
      this.setState({ name: e.target.value })}
         />
          </div>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>Author</label>
            <input
              type="text"
              name="author"
              placeholder="author"
              value={this.state.Author}
              onChange={(e) => this.setState({ Author: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>Publication</label>
            <input
              type="text"
              name="publication"
              placeholder="publication"
              value={this.state.publication}
              onChange={(e) => this.setState({ publication: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>Genre</label>
            <input
              type="text"
              name="Genre"
              placeholder="Genre"
              value={this.state.genre}
              onChange={(e) => this.setState({ genre: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>review/rating</label>
            <input
              type="number"
              name="review/rating"
              placeholder="review/rating"
              value={this.state.review}
              onChange={(e) => this.setState({ review: e.target.value })}
                 />
          </div>
          <button className="ui button blue">
                Add</button>
             <button className="ui button blue" onClick={this.routingFunction}>
                Display</button>
        </form>
      </div>
        )

    }
    
}
export default withRouter(AddStudent);
