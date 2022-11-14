//import './App.css';
import { useState } from 'react';
import { Dropdown } from './Components/Dropdown';
import { FormFields } from './Components/FormFields';
import { Message } from './Components/Message';
import { RadioBtn } from './Components/RadioBtn';


function App() {


const [getJobRole, setGetJobRole] = useState()
const [ageOption, setAgeOption] = useState()
const getingJob = (job) =>{
  setGetJobRole(job)
  
}
const getAge = (age) =>{
  setAgeOption(age)
}

const [jobRoles, setJobRoles] = useState(["---","Software engineer", "Driver", "Designer"])
const ageChoise = ["10-18", "18-28", "28-38", "38-48"];

  return (
    <div className="App">
    {/*<FormFields passData={getData}/>
    {userData && <Message PassData={userData} />}*/}
    <Dropdown jobRole={jobRoles} selectJob={getingJob}/>
    <h3 id='textDrop'>{getJobRole}</h3>
    <RadioBtn statementChoise="Choose age:" passOptions={ageChoise} passGetAge={getAge}/>
    <h3 id='text'>{ageOption}</h3>
    </div>
  );
}
export default App;


/*const [testData, setTestData] = useState()
const dataUser = (user) =>{

  setTestData(user)
}

<Test1 passUser={dataUser} />
{testData && <Test2  PassUser={testData} />} */