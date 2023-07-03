import React from 'react';
import {Button} from "react-bootstrap";

const MyButton = ({children, variant, ...props}) => {
    return (
        <Button {...props} variant={variant}>{children}</Button>
        );
};

export default MyButton;