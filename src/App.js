import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassMouse from './components/ClassMouse';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <PostList /><br/>
      <PostForm /><br/>
      <HookCounter /><br/>
      <HookCounterTwo /><br/> 
      <HookCounterThree /><br/>
      <HookCounterFour /><br/>
      <ClassMouse /><br/>
    </div>
  );
}

export default App;
