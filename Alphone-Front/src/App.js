import './App.css';
import Contact from './components/Contact';
import TeamsTable from './components/TeamsTable';

function getContacts(){
  const CONTACTS = [
    { id: 1, teamName: "tasht", system: "tomcloud", numbers: ["0545652222", "0000000000"] },
    { id: 2, teamName: "a", system: "nasdvkj", numbers: ["099890000", "73284908"] }
  ];
  return CONTACTS.map((contact) => (
    <Contact
      key={contact.id} 
      teamName={contact.teamName}
      system={contact.system} 
      numbers={contact.numbers} 
    />
  ))
}

function App() {
  return (
    <div className="App">
      <TeamsTable />
    </div>
  );
}

export default App;