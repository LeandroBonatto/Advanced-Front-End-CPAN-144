import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';


function App() {
  const name = 'Leo'

  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Changing the JSX</h1>
      <p>Hello, {newName}</p>
      <p>Sum: {sum(1, 2)}</p>
      <img src={url} alt="My Image" />
      <HelloWorld />
    </div>
  );
}

export default App;
