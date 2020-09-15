import React, {useEffect} from 'react';

const Order = (props) =>{

    return(
        <>
            <div className="main-body">
                <div className="single-wrapper">
                    <div className="title">
                        {props.location.state.name}
                    </div>
                    <div className="content">
                        {props.location.state.desc}
                    </div>
                    <div className="origin">
                        <b>ORIGIN:</b> {props.location.state.origin}
                    </div>
                    <div className="destination">
                        <b>DESTINATION:</b> {props.location.state.destination}
                    </div>
                    <div className="status">
                        <b>STATUS:</b> <span>{props.location.state.status}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;