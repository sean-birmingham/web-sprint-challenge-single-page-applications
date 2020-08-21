import React from 'react';

const PizzaForm = () => {
  return (
    <div>
      <h2>Build Your Own Pizza</h2>
      <form>
        <label>
          Name:&nbsp;
          <input type='text' name='name' />
        </label>
        <label>
          Choice of Size:&nbsp;
          <select name='size'>
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
          <input type='checkbox' name='pepperoni' />
          Pepperoni
        </label>
        <label>
          <input type='checkbox' name='sausage' />
          Sausage
        </label>
        <label>
          <input type='checkbox' name='onions' />
          Onions
        </label>
        <label>
          <input type='checkbox' name='extra-cheese' />
          Extra Cheese
        </label>
        <label>
          Special Instructions:
          <input type='text' name='instructions' placeholder='Anything else?' />
        </label>
        <button type='submit'>Add to Order</button>
      </form>
    </div>
  );
};

export default PizzaForm;
