import React, {useState, useEffect} from 'react'
import fb from './../config/firebase';
import { Form, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import useFormEdit from './../utils/useForm';

const  EditOrder = ({currentData, closeEditBox, editBox}) => {
    
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [status, setStatus] = useState('')

    useEffect(() => {
        setName(currentData.name);
        setDesc(currentData.desc);
        setStatus(currentData.status)
    },[currentData.name, currentData.desc, currentData.status])

    const editPost = (e) => {
        e.preventDefault();

        const id = currentData.key;

        fb.database().ref('orders/' + id).update({
            name: name,
            desc: desc,
            status: status
        }).then(
           closeEditBox
        )
    }

    return (
        <>  
            <Modal
                size="lg"
                show={editBox}
                centered
                onHide={closeEditBox}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        UPDATE ORDER
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={editPost}>
                        <Form.Group>
                            <Form.Label>Order Status</Form.Label>
                            <Form.Control as="select" name="status" onChange={e => setStatus(e.target.value)} value={status || ''}>
                                <option>Pending</option>
                                <option>Item/s Packed</option>
                                <option>Item/s On Route</option>
                                <option>Item/s Delivered</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Order Name</Form.Label>
                            <Form.Control type="text" required name="name" value={name || ''} onChange={ e => setName(e.target.value) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Order Description</Form.Label>
                            <Form.Control as="textarea" rows="2" required name="desc" value={desc || ''} onChange={ e => setDesc(e.target.value) } />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            UPDATE
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EditOrder
