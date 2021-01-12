
import '../styles/App.scss';
import Menu from '../components/Menu/Menu_categories'
import Order from '../components/Menu/Order';

function App() {
  function greetUser() {
    console.log("Hola mundo !");
  }
  return (
    <div className = "App">
      <Menu/>
      <Order/>
      <div onClick={greetUser}>
          <p>Click this text to see the event bubbling</p>     
          <button onClick={greetUser}>Click me</button>   
      </div>
    </div>
   
  );
}

export default App;
