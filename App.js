import './App.css';
import Login from './components/login';
import AddStudent from './components/book';
import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Studentlist from './components/booklist';

function App() {
  const LOCAL_STORAGE_KEY = "books";
  const [books, setbooks] = useState([]);
  const addStudentHandler = (book)=>{
    console.log(book);
    setbooks([...books,book]);
  }
  useEffect(() => {
    const retrivebooks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrivebooks) setbooks(retrivebooks);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
  }, [books]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={()=> <Login/>}>
          </Route>
          <Route exact path='/book' render={()=> <AddStudent addStudentHandler={addStudentHandler}/>}></Route>
          <Route  path='/booklist' render={()=><Studentlist books={books}/>}></Route>
        </Switch>
      </Router>
      {/* <Studentlist students={students}></Studentlist> */}
    </div>
  );
}

export default App;
