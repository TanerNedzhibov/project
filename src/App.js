//import './App.css';
import { useState } from 'react';
import { FormFields } from './Components/FormFields';
import { Message } from './Components/Message';


function App() {

const [userData, setUserData] = useState()

const getData = (data) => {
  setUserData(data)
}

  return (
    <div className="App">
    <FormFields passData={getData}/>
    {userData && <Message PassData={userData} />}
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