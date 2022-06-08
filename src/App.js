// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


//import necessary components
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Display from './Components/Display';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  //create user object for displaying on click
  const [user, setuser] = useState({});
  
  //function for updating user on-reclick
  const setmyuser=(user)=>{
    setuser(user);
  }
//number of results per page
  const [results, setresults] = useState(10);
  const setresultsperpage=(results)=>{
    setresults(results);
  }

  //state to display days remaining for birthday
  const [days, setdays] = useState(0);

  // function to get number of days left for birthday
  const getbirthday=(user)=>{
      var birthday =new Date(user.dob.date);
      var today = new Date();
      let a=today.getFullYear();
      birthday.setFullYear(a);
      if (today > birthday) {
          birthday.setFullYear(today.getFullYear() + 1);
      }
      setdays(Math.floor((birthday - today) / (1000*60*60*24)))
  }

  
  return (
    //Router setup
    <>
    <Router>
    <Navbar setresultsperpage={setresultsperpage} />
    <Routes>
      {/* static route for displaying a list of users */}
      <Route exact path="/" element={<Home results={results} setmyuser={setmyuser} getbirthday={getbirthday}/>}></Route>

      {/* dynamic route for each user to display his photo,days left for birthday,phone */}
      <Route  path={`/:id`} element={<Display user={user} days={days} />}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
 