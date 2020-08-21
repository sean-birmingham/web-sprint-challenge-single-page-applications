import React, { useState } from 'react';
import Navbar from './Navbar';

const PizzaForm = ({ submit }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    size: '',
    toppings: {
      pepperoni: false,
      sausage: false,
      onions: false,
      extracheese: false
    },
    instructions: ''
  });

  const onChange = (e) =>
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });

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
