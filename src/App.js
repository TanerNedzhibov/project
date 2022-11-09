//import './App.css';
import { useState } from 'react';
import { FormFields } from './Components/FormFields';
import { Message } from './Components/Message';



function App() {

const [firstName,setFirstName] = useState()
const [lastName,setLastName] = useState()
const [userName,setUserName] = useState()
const [email,setEmail] = useState()
const [password,setPassword] = useState()
const [dropDown2, setDropDown2] = useState("")
const [siteW2, setSiteW2] = useState("")
const [radioBtn2, setRadioBtn2] = useState("")




  return (
    <div className="App">
      <FormFields passFName={setFirstName}
                  passLName={setLastName}
                  passUName={setUserName}
                  passEmail={setEmail}
                  passPassword={setPassword}
                  passdropDown={setDropDown2}
                  passSite={setSiteW2}
                  passGender={setRadioBtn2}
                  />

      <Message  passFName={firstName}
                passLName={lastName}
                passUName={userName}
                passEmail={email}
                passPassword={password}
                passDropDown={dropDown2}
                PassSite={siteW2} 
                PassGender={radioBtn2}
                />
      

    </div>
  );
}

export default App;
