import './App.css';
import ListTask from './component/ListTask';
import AddTask from './component/AddTask';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{margin:"20px 100px"}} >
      <AddTask/>
      <ListTask/>
      
    </div>
  );
}

export default App;