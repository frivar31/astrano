import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';




  const root = ReactDOM.createRoot(document.getElementById('root'));

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.

//   const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

  root.render(
    <React.StrictMode>

        <App />

    </React.StrictMode>
  );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
