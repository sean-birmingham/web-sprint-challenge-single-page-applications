import React, { useState } from 'react';
import Navbar from './Navbar';
import * as yup from 'yup';
import formSchema from './formSchema';

const initialValues = {
  name: '',
  size: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    onions: false,
    extracheese: false
  },
  instructions: ''
};

const PizzaForm = ({ submit }) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({
    name: '',
    size: '',
    instructions: ''
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: '' });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const onCheckboxChange = (e) =>
    setFormValues({
      ...formValues,
      toppings: { ...formValues.toppings, [e.target.name]: e.target.checked }
    });

  const onSubmit = (e) => {
    e.preventDefault();
    const pizzaOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: Object.keys(formValues.toppings).filter(
        (topping) => formValues.toppings[topping]
      ),
      instructions: formValues.instructions.trim()
    };
    submit(pizzaOrder);
  };

  return (
    <div>
      <Navbar />
      <h2>Build Your Own Pizza</h2>
      <form onSubmit={onSubmit}>
        <label>
          Name:&nbsp;
          <input
            type='text'
            name='name'
            onChange={onChange}
            value={formValues.name}
          />
          {errors.name}
        </label>
        <label>
          Choice of Size:&nbsp;
          <select name='size' onChange={onChange} value={formValues.size}>
            <option value='' disabled hidden>
              Select a Size
            </option>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
            <option value='Extra-Large'>Extra-Large</option>
          </select>
          {errors.size}
        </label>
        <h3>Add Toppings</h3>
        <label>
          <input
            type='checkbox'
            name='pepperoni'
            onChange={onCheckboxChange}
            checked={formValues.toppings.pepperoni}
          />
          Pepperoni
        </label>
        <label>
          <input
            type='checkbox'
            name='sausage'
            onChange={onCheckboxChange}
            checked={formValues.toppings.sausage}
          />
          Sausage
        </label>
        <label>
          <input
            type='checkbox'
            name='onions'
            onChange={onCheckboxChange}
            checked={formValues.toppings.onions}
          />
          Onions
        </label>
        <label>
          <input
            type='checkbox'
            name='extracheese'
            onChange={onCheckboxChange}
            checked={formValues.toppings.extracheese}
          />
          Extra Cheese
        </label>
        <label>
          Special Instructions:
          <input
            type='text'
            name='instructions'
            placeholder='Anything else?'
            onChange={onChange}
          />
        </label>
        <button type='submit'>Add to Order</button>
      </form>
    </div>
  );
};

export default PizzaForm;
