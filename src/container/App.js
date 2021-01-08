
import '../styles/App.css';
import Header from '../components/Header'
import Menu from '../components/Menu_categories'
import Order from '../components/Order';

function App() {
  return (
    <div className = "App">
      <Header/>
      <Menu/>
      <Order/>
    </div>
  );
}

export default App;
