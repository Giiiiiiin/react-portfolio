import logo from './logo.svg';
import './App.css';
import MyComponent from './main';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <MyComponent name="Nav" project="Bar"></MyComponent>
    </div>
  );

}

export default App;
