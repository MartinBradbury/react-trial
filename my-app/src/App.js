import logo from './logo.svg';
import './App.css';
import FunctionalGreetingNew from './components/FunctionalGreetingNew';
import StatefulGreeting from './components/StatefulGreeting';
import NewTest from './components/test';
import StatefulTest from './components/StatefulTest';
import UserState from './components/UserState';

function App() {
  return (
    <>
    <div className="App">
      <StatefulGreeting greeting="This is a little test" name="Martin" />
      <UserState name="Martin" />
    </div>
    </>
  );
}

export default App;
