import './RadioBtn.css';

export const RadioBtn = (props) => {

    const options = props.passOptions;

    return(
        <div className="radioBtn" onChange={(e) => props.passGetAge(e.target.value)}>
                    {props.statementChoise}
            {options.map((element,index) => <div key={index}>
                <label>{element}</label>
                <input  name="age" type="radio" value={element}/> 
            </div> )}
            
        </div>
    )
}