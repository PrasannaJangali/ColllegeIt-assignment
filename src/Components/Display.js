
//component to display the photo , phone and etc of each user
import React  from 'react'
function Display(props) {
    
    return (
        <>
            {
                props.user && <div className="container">
                    <h3 style={{ textAlign: 'center' }}>{props.user.name.title} {props.user.name.first} {props.user.name.last}</h3>
                    <img style={{ height: '300px', width: '300px', margin: '20px auto', display: 'block' }} src={props.user.picture.large} alt="" />
                    <div className="container  col-md-3">
                        <h4>Phone No- {props.user.phone}</h4>
                        <h4>Days to next Birthday- {props.days}</h4>
                    </div>
                </div>
            }
        </>
    )
}

export default Display