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
    <form id ='pizza-form' onSubmit = {onSubmit}>
        <div className = 'form-submit'>
            <h2> Make A Pizza!</h2>
    <img src = 'https://www.exposedmagazine.co.uk/wp-content/uploads/2021/02/pizza-oven-2.jpg' alt='pizza in the oven'></img>
        <div className = 'errors'>
            <div>{errors.name}</div>
            <div>{errors.size}</div>
            <div>{errors.sauce}</div>
            <div>{errors.instructions}</div>
        </div>
        </div>

<div className = 'form-group inputs'>
    <label>Name
        <input
    id= 'name-input'
    value = {values.name}
    onChange = {onChange}
    name = 'name'
    type = 'text'
    />
    </label>
    <label>Special Instructions
    <input
    id= 'special-text'
    value = {values.instructions}
    onChange = {onChange}
    name = 'instructions'
    type = 'text'
    />
    </label>



    <label>Size
            <select 
        id='size-dropdown'
        onChange={onChange}
        values={values.size}
        name='size'
        >
            <option value=''>- Select a Size -</option>
            <option value='S'>Small</option>
            <option value='M'>Medium</option>
            <option value='L'>Large</option>
            <option value='XL'>Extra Large</option>
          </select>
        </label>  
        <label>Sauces :
        Tomato
        <input
            type="radio"
            name="sauce"
            value="Tomato"
            onChange={onChange}
            checked={values.sauce === "Tomato"}
          />        
        </label>
        <label> Alfredo
          <input
            type="radio"
            name="sauce"
            value="Alfredo"
            onChange={onChange}
            checked={values.sauce === "Alfredo"}
          />
        </label>
        <label> Pesto
          <input
            type="radio"
            name="sauce"
            value="Pesto"
            onChange={onChange}
            checked={values.sauce === "Pesto"}
          />
        </label>
    </div>
        <div className ='form-group checkboxes'>
            <h3>Toppings</h3>

        <label>Pepperoni
          <input
            type="checkbox"
            name="Pepperoni"
            onChange={onChange}
            checked={values.Pepperoni}
          />
        </label>

        <label>Mushrooms
          <input
            type="checkbox"
            name="Mushrooms"
            onChange={onChange}
            checked={values.Mushrooms}
          />
        </label>

        <label>Extra Cheese
          <input
            type="checkbox"
            name="ExtraCheese"
            onChange={onChange}
            checked={values.ExtraCheese}
          />
        </label>


        <label>Chicken
          <input
            type="checkbox"
            name="Chicken"
            onChange={onChange}
            checked={values.Chicken}
          />
        </label>
        <button disabled = {disabled} id = 'order-button'>Order your Pizza Now!</button>

    </div>
</form>
    )
}






























