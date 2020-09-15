import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import DeleteOrder from './DeleteOrder';
import EditOrder from './EditOrder';


const Orders = ({data, loading}) => {

    const [currentData, setCurrentData] = useState([]);
    const [editBox, setEditBox] = useState(false);
    const [deleteBox, setDeleteBox] = useState(false);

    // OPEN
    const openDeleteBox = () => {
        setDeleteBox(true);
    }

    const openEditBox = () => {
        setEditBox(true);
    }

    // CLOSE
    const closeEditBox = () => {
        setEditBox(false);
    }

    const closeDeleteBox = () => {
        setDeleteBox(false);
    }

    if (loading) { return <li className="loading">Fetching Information</li> }

    return (
        <>
            {
                data != '' ?
                    data.map((info, key) => 
                        <li className="item" key={key}>
                            <div className="content">
                                <div className="meta">
                                    <span className="status">{info.status}</span>
                                    <span className="date">Placed On: {info.created_at} |</span>
                                    <span className="date">Estimated Time Arrival: {info.eta}</span>
                                </div>
                                <Link to={{
                                    pathname: '/order/'+info.key,
                                    state: {
                                        name: info.name,
                                        desc: info.desc
                                    }
                                }} className="title">
                                    {info.name}
                                </Link>
                                <div className="desc">
                                    {info.desc.substring(0, 70)}...
                                </div>
                            </div>
                            <div className="controls">
                               <a className="mr-2" onClick={() => {
                                                    openDeleteBox()
                                                    setCurrentData(info)
                                                }
                                            }>
                                    <FaTrashAlt/>
                               </a>
                               <a className="mr-2" onClick={() => {
                                                    openEditBox() 
                                                    setCurrentData(info)
                                                } 
                                            } >
                                    <FaEdit />
                               </a>
                            </div>
                        </li>
                    )
                :
                
                <li>NO DATA</li>
            }

            <DeleteOrder currentData={currentData} closeDeleteBox={closeDeleteBox} deleteBox={deleteBox} />
            <EditOrder currentData={currentData}  closeEditBox={closeEditBox} editBox={editBox} />
        </>
    )
}

export default Orders
