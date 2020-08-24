import React from 'react';

const OrderComplete = ({ order }) => {
  return (
    <div>
      <div>
        <h2>Congrats, {order.name}! Pizza is on it's way! </h2>
        <p>Size: {order.size}</p>
        {!!order.toppings && !!order.toppings.length && (
          <div>
            Toppings:
            <ul>
              {order.toppings.map((topping, index) => (
                <li key={index}>{topping}</li>
              ))}
            </ul>
          </div>
        )}
        <p>
          Instructions:{' '}
          {order.instructions === '' ? 'None' : order.instructions}
        </p>
      </div>
    </div>
  );
};

export default OrderComplete;
