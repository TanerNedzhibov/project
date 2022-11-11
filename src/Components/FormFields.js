import { useState } from "react"
import './FormFields.css';


export const FormFields = (props) =>{

    const [inputValues, setInputValues] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        dropDown: "",
        siteW: "",
        radioBtn: "",
        isChecked: ""
    })
    const [validation, setValidation] = useState({
        buttonPress: false,
        inputFilled: false,
        valid: false
    })
    const logInInfo = {
        email: "test@gmail.com",
        password: "test12"
    }
    const allFilled = Object.values(inputValues).every(
        value => value
      );
    const submitHandler = (event) =>
    {
        event.preventDefault()
        setValidation({...validation, buttonPress: true})
        inputValues.email === logInInfo.email && inputValues.password === logInInfo.password && allFilled === true 
        ? props.passData(inputValues) : props.passData("Login failed!")

    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                    First Name: <input 
                    type="text" 
                    onChange={(event) => setInputValues({...inputValues, firstName: event.target.value})}/>
                    {validation.buttonPress && !inputValues.firstName ? <span>Please enter first name!</span> : null}
                <br></br>
                    Last Name: <input 
                    type="text"
                    onChange={(event) => setInputValues({...inputValues, lastName: event.target.value})}/>
                    {validation.buttonPress && !inputValues.lastName ? <span>Please enter last name!</span> : null} 
                <br></br>
                    Username: <input 
                    type="text"
                    onChange={(event) => setInputValues({...inputValues, userName: event.target.value})}/>
                    {validation.buttonPress && !inputValues.userName ? <span>Please enter username!</span> : null} 
                <br></br>
                    Email: <input 
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(event) => setInputValues({...inputValues, email: event.target.value})}/>
                    {validation.buttonPress && !inputValues.email ? <span>Please enter email !</span> : null} 
                <br></br>
                    Password: <input 
                    type="password"
                    maxLength="6"
                    onChange={(event) => setInputValues({...inputValues, password: event.target.value})}/>
                    {validation.buttonPress && !inputValues.password ? <span>Please enter a password!</span> : null} 
                <br></br>
                    Job role:
                    <select value={inputValues.dropDown} onChange={(e) => setInputValues({...inputValues, dropDown: e.target.value})}>
                        <option >---</option>
                        <option >Marketing</option>
                        <option >Developer/Engineer</option>
                        <option >Designer/Product</option>
                        <option >Consultant</option>
                        <option >Operator</option>
                        <option >Student</option>
                    </select>
                    {validation.buttonPress && !inputValues.dropDown ? <span>Please select a job role!</span> : null}
                {inputValues.dropDown && inputValues.dropDown !== "---" ? <input 
                            placeholder="Company website" 
                            id="dropDownInput" 
                            type="url"
                            onChange={(event) => setInputValues({...inputValues, siteW: event.target.value})}/> : null}
                <br></br>
                <div className="gender-container" onChange={(e) => setInputValues({...inputValues, radioBtn: e.target.value})}>
                    Select gender:
                    <input className="radioBtn" type="radio" value="Male" name="gender" /> Male
                    <input className="radioBtn" type="radio" value="Female" name="gender" /> Female
                    <input className="radioBtn" type="radio" value="Other" name="gender" /> Other
                </div>
                <div className="terms-container" onChange={(e) => setInputValues({...inputValues, isChecked: e.target.value})}>
                    Agree with terms <br></br> and conditions: <br></br>
                    <input id="checkbox" type="checkbox" />
                </div>
                {validation.buttonPress && !inputValues.isChecked ? <span>You must agree!</span> : null}
                <button id="submitBtn" type="submit">Login</button>
            </form>
        </div>
    )
}