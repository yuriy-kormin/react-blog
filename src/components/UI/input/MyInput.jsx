import React from 'react';
import {Form} from "react-bootstrap";

const MyInput = ({
                     children,
                     classes,
                     placeholder,
                     label,
                     value,
                     processFilter,
                     ...props}) => {
    return (
        <Form.Group className={classes}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control type="text"
                          value={value}
                          placeholder={placeholder}
                          onChange={(e)=>{processFilter(undefined,e.target.value)}}
                          {...props}
            />
        </Form.Group>
    );
};

export default MyInput;