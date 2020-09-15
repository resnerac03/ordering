import React, {useState, useEffect, useContext} from "react";
import fb from './../config/firebase';
import List from './../components/List';
import AddOrder from './../components/AddOrder';

const Home = ({history}) => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect( () =>{

        const fetchUsers = async () => {
            setLoading(true);

            await fb.database().ref('users').on('value',(snap)=> {
                try{
                    let arr = [];
                    snap.forEach( (res) => {
                        arr.push(res.val());
                    });      
                    
                    setData(arr);
                    setLoading(false);
                } catch(error){
                    console.log(error);
                } 
            })
        }
        
        fetchUsers();

    },[]);

    return (
        <>  
            <div className="main-body">
                
                <div className="main-container -dashboard">
                   
                    <div className="menu-wrapper">
                        <div className="brand">ORDER LIST</div>
                        <button className="main-btn" onClick={() => setModalShow(true)}>NEW ORDER</button>
                        <AddOrder
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                    <List />
                </div>
            </div>
        </>
    )
}

export default Home;