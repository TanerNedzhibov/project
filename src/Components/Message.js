

export const Message = (props) =>
{
    const { firstName, lastName, userName, email, password, dropDown, siteW, radioBtn, isChecked } = props.PassData

    return(
        <div>
            {props.PassData === "Login failed!" ? 
            <h3>Login failed!</h3> :
            <h3>{firstName}<br></br>
                {lastName}<br></br>
                {userName}<br></br>
                {email}<br></br>
                {password}<br></br>
                {dropDown}<br></br>
                {siteW}<br></br>
                {radioBtn}<br></br>
                {isChecked}<br></br></h3>}
        </div>
    )
}
//wadwad