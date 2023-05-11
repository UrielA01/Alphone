import './App.css';
import Contact from './components/Contact';

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
      <table>
        <tr>
          <th>Team name</th>
          <th>Main system</th>
          <th>Numbers</th>
          <th> </th>
        </tr>
        {getContacts()}
      </table>
    </div>
  );
}

export default App;