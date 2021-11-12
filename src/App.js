import React,{ useState, useEffect} from "react";
import * as yup from 'yup'
import axios from 'axios'
import formSchema from './validation/formSchema.js'
import PizzaForm from './PizzaForm'
import { Route } from 'react-router-dom'
import Home from './Home'





















const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
