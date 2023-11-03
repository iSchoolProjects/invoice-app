import logo from './logo.svg';
import './App.css';
import TaskModal from './components/TaskModal';
import NewTaskModal from './components/NewTaskModal';
import NewBoardModal from './components/NewBoardModal';
import DeleteModal from './components/DeleteModal';
import EditTaskModal from './components/EditTaskModal';
import EditBoardModal from './components/EditBoardModal';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <TaskModal />
    // <NewTaskModal />
    // <NewBoardModal />
    <DeleteModal />
    // <EditTaskModal />
    // <EditBoardModal />
  );
}

export default App;
