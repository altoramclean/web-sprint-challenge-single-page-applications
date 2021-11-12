import React from 'react'

export default function Form(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
}
return (
    <form id ='pizza-form' onsubmit = {onSubmit}>
        <div className = 'form-submit'>
            <h2> Make A Pizza!</h2>
        <div className = 'errors'>
            <div>{errors.name}</div>
            <div>{errors.size}</div>
            <div>{errors.sauce}</div>
            <div>{errors.instructions}</div>
        </div>
        </div>












        
    </form>
)