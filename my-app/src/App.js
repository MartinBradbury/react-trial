import logo from './logo.svg';
import './App.css';
import FunctionalGreetingNew from './components/FunctionalGreetingNew';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingNew name="Martin" age="41" greeting="Nice to meet you!!" /> */}
      <StatefulGreeting greeting="This is a little test" name="Martin" />
    </div>
  );
}

export default App;
