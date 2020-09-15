import React from 'react';
import fb from './../config/firebase';
import { Modal, Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import useForm from './../utils/useForm';

const AddOrder = (props) => {

    const validateForm = (values) => {
        let err = {};
        if(values.name.trim() === ''){
            err.name = 'Name is required!'
        }
        if(values.desc.trim() === ''){
            err.desc = 'Description is required!'
        }

        return err;
    }

    const addPost = () => {

        // Calculate Estimated Time Arrival - ETA
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let today = new Date(); 
        let business_days = 14; // Processing Time
        let deliveryDate = today; //will be incremented by the for loop
        let total_days = business_days; //will be used by the for loop

        for(let days=1; days <= total_days; days++) {
        deliveryDate = new Date(today.getTime() + (days *24*60*60*1000));
            if(deliveryDate.getDay() == 0 || deliveryDate.getDay() == 6) {
                //it's a weekend day so we increase the total_days of 1
                total_days++
            }
        } 

        
        deliveryDate = months[deliveryDate.getMonth()] + " " + deliveryDate.getDate() + " " + deliveryDate.getFullYear()

        const id = uuidv4();
        const createdAt = new Date().toLocaleString()

        fb.database().ref('orders/' + id).set({
            name: values.name,
            desc: values.desc,
            status: values.status,
            created_at: createdAt,
            eta: deliveryDate
        }).then(
           props.onHide,
        )

    }

    const [values, errors, validated, handleChange, handleSubmit] = useForm(addPost, {name: '', desc: '', status: 'pending'}, validateForm);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    NEW ORDER
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>NAME</Form.Label>
                        <Form.Control type="text" required name="name" value={values.name} onChange={handleChange} />
                        {errors.name && (
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                    

                    <Form.Group controlId="content">
                        <Form.Label>DESCRIPTION</Form.Label>
                        <Form.Control as="textarea" rows="5" required name="desc" value={values.desc} onChange={handleChange} />
                        {errors.desc && (
                            <Form.Control.Feedback type="invalid">
                                {errors.desc}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        CREATE
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddOrder
