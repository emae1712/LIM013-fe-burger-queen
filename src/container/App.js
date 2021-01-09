
import '../styles/App.css';
import Header from '../components/Header'
import Menu from '../components/Menu_categories'
import Order from '../components/Order';

function App() {
  function greetUser() {
    console.log("Hola mundo !");
  }
  return (

    <section className ='App'>
      <Header/>
      <Menu/>
      <Order/>
      <div onClick={greetUser}>
          <p>Click this text to see the event bubbling</p>     
          <button onClick={greetUser}>Click me</button>   
      </div>
    </section>
   
  );
}

export default App;
