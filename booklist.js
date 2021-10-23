import React from 'react'
import user from "../images/user.png";

const Studentlist = (props) => {
    console.log(props);

    const renderStudentList = props.books.map((book) => {
        return (
            <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
       <div className="content">
        <div className="header"> {book.name}</div>
        <div> {book.title} </div>
        <div> {book.Author} </div>
        <div> {book.publication} </div>
        <div> {book.genre} </div>
        <div> {book.review} </div>

        </div>
    
    </div>        );
    });
            return(
        <div className="ui celled list">
    {renderStudentList}        </div>
    );

}
export default Studentlist;
    