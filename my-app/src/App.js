import logo from './logo.svg';
import './App.css';
import FunctionalGreetingNew from './components/FunctionalGreetingNew';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingNew name="Martin" age="41" greeting="Nice to meet you!!" />
    </div>
  );
}

export default App;
