import './App.css';
import AddButton from './components/AddButton';
import TeamsTable from './components/TeamsTable';

function App() {
  return (
    <div className="App">
      <TeamsTable />
      <AddButton /> 
    </div>
  );
}

export default App;