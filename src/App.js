import React,{ useState, useEffect} from "react";
import * as yup from 'yup';
import axios from 'axios';
import formSchema from './validation/formSchema.js';
import PizzaForm from './PizzaForm';
import { Route } from 'react-router-dom';
import Home from './Home';


const initialFormValues = { 
  name: '',
  instructions: '',
  size: '',
  sauce: '',
  Pepperoni:false,
  Chicken: false,
  Mushrooms: false,
  ExtraCheese: false,
}
const initialFormErrors = {
  name: '',
  size:'',
  instructions:'',
  sauce:'',
}
const initialOrders = []
const initialDisabled = true

export default function App(){

  const [order, setOrder] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder = newOrder => {
    axios.post(`https://reqres.in/api/orders`, newOrder)
      .then(res => {
        setOrder([res.data, ...order]);
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }
  const formSubmit = () => {
    const newOrder = {
      name:formValues.name.trim(),
      size:formValues.size.trim(),
      instructions:formValues.instructions.trim(),
      sauce: formValues.sauce.trim(),
      toppings: [ 'Pepperoni', 'Chicken', 'Mushrooms', 'ExtraCheese'].filter(topping => formValues[topping])
    }
  postNewOrder(newOrder)
  }
  
  useEffect(() => {

    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

return (
  <div>
      <h1>Lambda Eats</h1>
      <Route exact path='/'>
      <p>Order Pizza Now With Us!</p>
      <Home />
      </Route>
   <Route path='/pizza'>
    <PizzaForm
    values={formValues}
    change={inputChange}
    submit={formSubmit}
    disabled={disabled}
    errors={formErrors}
    />
    </Route>
</div>
  );
};

