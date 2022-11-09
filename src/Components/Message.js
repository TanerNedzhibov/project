

export const Message = (props) =>
{


    return(
        <div>
            {props.passFName !== "Login failed!" ?  <h3>Status:<br></br>
                {props.passFName}<br></br>
                {props.passLName}<br></br>
                {props.passUName}<br></br>
                {props.passEmail}<br></br>
                {props.passPassword}<br></br>
                {props.passDropDown}<br></br>
                {props.PassSite}<br></br>
                {props.PassGender}</h3> : <h3>Status:<br></br>
                                        {props.passFName}</h3>}
                                        
            
        </div>
    )
}