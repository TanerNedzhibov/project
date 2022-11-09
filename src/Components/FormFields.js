import { useState } from "react"
import './FormFields.css';


export const FormFields = (props) =>
{

    const [inputValues, setInputValues] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
    })
    
    const [logedIn,setLogedIn] = useState(false)
    const [valid,setValid] = useState(false)
    const [filledInput,setFilledInput] = useState(false)
    const [dropDown, setDropDown] = useState()
    const [siteW, setSiteW] = useState("")
    const [radioBtn, setRadioBtn] = useState("")
    const [isChecked, setIsChecked] = useState("")
   
    const logInInfo = 
    {
        email: "test@gmail.com",
        password: "test12"
    }

    const submitHandler = (event) =>
    {
        event.preventDefault()
        if(inputValues.email === logInInfo.email && inputValues.password === logInInfo.password) 
        {
            setValid(true)            
        }
        setLogedIn(true)
        if(inputValues.email && inputValues.password && inputValues.firstName && inputValues.lastName && inputValues.userName && dropDown && siteW && radioBtn && isChecked)
        {
            setFilledInput(true)
        }
      
    }
    
    const allinone = () =>
    {
        if(logedIn && filledInput && valid )
        {
            props.passFName(inputValues.firstName)
            props.passLName(inputValues.lastName)
            props.passUName(inputValues.userName)
            props.passEmail(inputValues.email)
            props.passPassword(inputValues.password)
            props.passdropDown(dropDown)
            props.passSite(siteW)
            props.passGender(radioBtn)
            
            
            setValid(false)
            setLogedIn(false)

        }
        else if(logedIn && filledInput && !valid)
        {
            props.passFName("Login failed!")
            setValid(false)
            setLogedIn(false)
        }
    }



    return (
        <div id="container">
           
          
            <form id="form_container" onSubmit={submitHandler}>
    
                    First Name: <input 
                    type="text" 
                    onChange={(event) => setInputValues({...inputValues, firstName: event.target.value})}/>
                {logedIn && !inputValues.firstName ? <span>Please enter first name!</span> : null}
                <br></br>

                    Last Name: <input 
                    type="text"
                    onChange={(event) => setInputValues({...inputValues, lastName: event.target.value})}/>
                {logedIn && !inputValues.lastName ? <span>Please enter last name!</span> : null} 
                <br></br>

                    Username: <input 
                    type="text"
                    onChange={(event) => setInputValues({...inputValues, userName: event.target.value})}/>
                {logedIn && !inputValues.userName ? <span>Please enter username!</span> : null} 
                <br></br>

                    Email: <input 
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(event) => setInputValues({...inputValues, email: event.target.value})}/>
                {logedIn && !inputValues.email ? <span>Please enter email !</span> : null} 
                <br></br>

                    Password: <input 
                    type="password"
                    maxLength="6"
                    onChange={(event) => setInputValues({...inputValues, password: event.target.value})}/>
                {logedIn && !inputValues.password ? <span>Please enter a password!</span> : null} 
                <br></br>

                Job role:
                <select value={dropDown} onChange={(e) => setDropDown(e.target.value)}>
                    <option >---</option>
                    <option >Marketing</option>
                    <option >Developer/Engineer</option>
                    <option >Designer/Product</option>
                    <option >Consultant</option>
                    <option >Operator</option>
                    <option >Student</option>
                </select>
                {logedIn && !dropDown ? <span>Please select a job role!</span> : null}
                {dropDown && dropDown !== "---" ? <input 
                            placeholder="Company website" 
                            id="dropDownInput" 
                            type="url"
                            onChange={(event) => setSiteW(event.target.value)}/> : null}
                <br></br>
                <div className="gender-container" onChange={(e) => setRadioBtn(e.target.value)}>
                    Select gender:
                    <input className="radioBtn" type="radio" value="Male" name="gender" /> Male
                    <input className="radioBtn" type="radio" value="Female" name="gender" /> Female
                    <input className="radioBtn" type="radio" value="Other" name="gender" /> Other
                </div>
                <div className="terms-container" onChange={(e) => setIsChecked(e.target.value)}>
                    Agree with terms <br></br> and conditions: <br></br>
                    <input id="checkbox" type="checkbox" />
                </div>
                {logedIn && !isChecked ? <span>You must agree!</span> : null}
                
                <button id="submitBtn" type="submit">Login</button>
                {allinone()}
                
    
            </form>
            
            <div></div>
        </div>
    )
}