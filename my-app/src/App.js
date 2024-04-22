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
import Stateful from './components/Stateful';
import FunctComp from './components/FunctComp';
import ClassConditional from './components/ClassConditional';
import NestingComponents from './components/NestingComponent';
import UsrMsg from './components/UsrMsg';
import MethodsAsPropsParent from './components/MethodAsPropsParents';




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
      {/* <FinalComponent /> */}
      {/* <Stateful />
      <EventsFunctional loggedIn={false} />
      <FunctionalGreetingNew addUser={true} />
      <BeepOne /> */}
      {/* <FinalComponent />
      <FunctComp loggedIn={true} /> */}
      {/* <ClassConditional /> */}
      {/* <NestingComponents /> */}
      <MethodsAsPropsParent />

    </div>
    </>
  );
}

export default App;
