// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import NuevaOrden from './components/NuevaOrden';
import './firebase';

// const container =  document.getElementById('root')
// ReactDOM.render(
//   <NuevaOrden username='Xiomara'></NuevaOrden>
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//  );

// ReactDOM.render(--qué--,--dónde--)
ReactDOM.render( <NuevaOrden username='Xiomara' number='04' sum='29'> </NuevaOrden>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
