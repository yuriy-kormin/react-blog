import React from 'react';
import {Button} from "react-bootstrap";

const MyButton = ({children, classes, ...props}) => {
    return (
        <Button {...props} className={classes} type="submit">{children}</Button>
        );
};

export default MyButton;