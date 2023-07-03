import React from 'react';
import {Form} from "react-bootstrap";

const MyInput = ({
                     children,
                     classes,
                     placeholder,
                     label,
                     ...props}) => {
    return (
        <Form.Group {...props} className={classes}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="text" placeholder={placeholder}/>
        </Form.Group>
    );
};

export default MyInput;