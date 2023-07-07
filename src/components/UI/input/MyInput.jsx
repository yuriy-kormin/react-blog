import React from 'react';
import {Form} from "react-bootstrap";

const MyInput = ({
                     children,
                     classes,
                     placeholder,
                     label,
                     value,
                     ...props}) => {
    return (
        <Form.Group className={classes}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control type="text" value={value} placeholder={placeholder} {...props}/>
        </Form.Group>
    );
};

export default MyInput;