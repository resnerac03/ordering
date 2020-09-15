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
                </div>
            </div>
        </>
    )
}

export default Order;