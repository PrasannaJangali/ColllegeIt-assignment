import React  from 'react'
import {useNavigate} from 'react-router-dom'
import { Link, } from 'react-router-dom';
function Users(props) {
    const Navigate=useNavigate();
    const dstyle= {
        width:'400px',
        fontSize:'20px',
        backgroundColor:'#adadad',
    }
    const style={height:'30px',border:'1px solid black'};
    const display=(user)=>{
        props.getbirthday(user);
        props.setmyuser(user);
        Navigate(`/${user.id.value}`);
    }
    return (
        <>
            <div className='container text-center'>

                {/* html table to display the list of users */}
                <table border={1}>
                    <thead>
                        <tr>
                            <th style={dstyle}>Name</th>
                            <th style={dstyle}>Gender</th>
                            <th style={dstyle}>City</th>
                            <th style={dstyle}>State</th>
                            <th style={dstyle}>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // iterating the userdata and displaying it as 'tr'
                            props.userdata && props.userdata.map((e) => {
                                return (
                                    <>
                                    {/* handling onclick to display specific user photo ,phone,days left for birthdat */}
                                        <tr onClick={()=>{display(e)}} style={style} key={e}>
                                            <td ><Link to="" style={{textDecoration:'none',color:'black'}}>{e.name.title} {e.name.first} {e.name.last}</Link></td>
                                            <td >{e.gender}</td>
                                            <td >{e.location.city} </td>
                                            <td >{e.location.state} </td>
                                            <td >{e.location.country} </td>
                                        </tr>
                                    </>
                                )
                            })

                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Users