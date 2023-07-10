import React from 'react';
import {FormSelect} from "react-bootstrap";

const MySelect = ({values,defaultValue,current,onChange}) => {
    return (
        <FormSelect
            className={"form-control"}
            onChange={e=>onChange(e.target.value)}
            value={current}
        >
            <option value={' '} disabled>{defaultValue}</option>
            {values.map(value => <option key={value.value} value={value.value}>{value.name}</option>)}
        </FormSelect>
    );
};

export default MySelect;