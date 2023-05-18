import './App.css';
import AddButton from './components/AddButton';
import NumbersListInput from './components/NumbersListInput';
import TeamsTable from './components/TeamsTable';
import { api } from './API manager/api';
import { useEffect, useState } from 'react';

// const CONTACTS = [
//   { id: 1, teamName: "tasht", system: "tomcloud", numbers: ["0545652222", "0000000000"] },
//   { id: 2, teamName: "a", system: "nasdvkj", numbers: ["099890000", "73284908", "8987899"] },
//   { id: 3, teamName: "as", system: "nsda", numbers: ["0987230594", "23432412", "3242342"] }
// ];

function App() {
  const [contacts, setContacts] = useState([]); 
  
  useEffect(() => {
     async function getU() {
       setContacts(await getContacts())
     }
     getU();
   },[])

  const { getContacts } = api();

  async function getU(){
    console.log(await getContacts())
  }

  getU()
  return (
    <div className="App">
      <TeamsTable contacts={contacts} />
      <AddButton /> 
      <NumbersListInput numbers={["0987230594", "23432412", "3242342"]}/>
    </div>
  );
}

export default App;