import React from 'react';
import {  Input, Message,Label } from "./StyleForm";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <Label>{label}</Label>
        <div>
            <Input {...input} placeholder={label} type={type} />
            <Message>{touched && error && <span>{error}</span>}</Message>
        </div>
    </div>
);

export default renderField;
