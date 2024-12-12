import React, { useEffect, useState } from 'react';

const OrderHistory = ({ userEmail }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        // const response = await fetch(`http://localhost:3000/api/order-history?email=${userEmail}`);
        const response = await fetch(apiUrl + `api/order-history?email=${userEmail}`, );
  
        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.error || errorData.message || 'Failed to fetch order history');
          return;
        }
  
        const data = await response.json();
        setOrders(data.orders);
      } catch (err) {
        setError('An error occurred while fetching order history');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    if (userEmail) {
      fetchOrderHistory();
    } else {
      setLoading(false);
      setError('User email is required to fetch order history');
    }
  }, [userEmail]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="LoginSignUp">
      <h1>Order History</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <h2>Order #{index + 1}</h2>
              <p><strong>Date:</strong> {new Date(order.orderDate).toLocaleString()}</p>
              <p><strong>Total:</strong> ${order.totalAmount.toFixed(2)}</p>
              <h3>Items:</h3>
              <ul>
                {order.cartItems.map((item, idx) => (
                  <li key={idx}>
                    {item.name} x {item.quantity} = ${item.price * item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
