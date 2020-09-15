import { useState } from 'react';

const useForm = (submitCallback, initialState = {}, validate) => {

    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [validated, setValidated] = useState(false);

    const handleSubmit = e =>{
        e.preventDefault();
       

        if(Object.keys(validate(values)).length === 0){
            submitCallback();
            setValues(initialState);
            setValidated(true);
            setErrors({})
        }else{
            setErrors(validate(values))
        }

        setValidated(true);
    }

    const handleChange = e =>{
        // e.persist();
        setValues({...values, [e.target.name]: e.target.value})
    }

    return [values, errors, validated, handleChange, handleSubmit];

}

export default useForm;