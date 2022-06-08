
import React, { useState, useEffect } from 'react'

import Users from './Users'
//importing loading gif
import load from './loading.gif'


function Home(props) {
  //state to store data from api
  const [items, setitems] = useState([]);

  //loading bar
  const [loading, setloading] = useState(false);
  const fetchdata = async () => {
    setloading(true);
    let response = await fetch('https://randomuser.me/api/?results=10')
    let b = await response.json();
    setloading(false);
    setitems(b.results);
  }
  useEffect(() => {
    fetchdata();
  }, [])

  return (
    <>
        <div className='container my-3'>
          <div className='container text-center'>
            <h1>Users</h1>
          </div>
        </div>
        {
          // rendering user components to display the list of users
          !loading && <Users userdata={items} setmyuser={props.setmyuser} getbirthday={props.getbirthday}/>
        }
        {
          //loading bar to show loading
          loading && <div className="container text-center"><img src={load} className="img-fluid text-center" alt="Loading..."/></div>
        }
    </>
  )
}

export default Home