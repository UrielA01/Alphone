import './App.css';
import AddButton from './components/AddButton';
import TeamsTable from './components/TeamsTable';

const CONTACTS = [
  { id: 1, teamName: "tasht", system: "tomcloud", numbers: ["0545652222", "0000000000"] },
  { id: 2, teamName: "a", system: "nasdvkj", numbers: ["099890000", "73284908", "8987899"] }
];

function App() {
  return (
    <div className="App">
      <TeamsTable contacts={CONTACTS} />
      <AddButton /> 
    </div>
  );
}

export default App;