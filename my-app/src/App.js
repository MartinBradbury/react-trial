import logo from './logo.svg';
import './App.css';
import FunctionalGreetingNew from './components/FunctionalGreetingNew';
import StatefulGreeting from './components/StatefulGreeting';
import NewTest from './components/Test';
import StatefulTest from './components/StatefulTest';
import UserState from './components/UserState';
import AnotherUser from './components/AnotherUser';
import NewComp from './components/NewComp';
import Test from './components/Test';
import BeepOne from './components/BeepOne';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import FinalComponent from './components/FinalComponent';




function App() {
  return (
    <>
    <div className="App">
      {/* <StatefulGreeting greeting="This is a little test" name="Martin" />
      <UserState name="Martin" />
      <AnotherUser />
      <NewComp /> */}
      {/* <Test /> */}
      {/* <BeepOne />
      <EventsClass />
      <EventsFunctional /> */}
      <FinalComponent />
    </div>
    </>
  );
}

export default App;
