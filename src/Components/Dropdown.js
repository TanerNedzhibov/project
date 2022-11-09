import { useState } from "react"

export const Dropdown = (props) =>
{

    const [selection, setSelection] = useState("")

    return (
        <div>
            <select value={props.DropDown({selection})} onChange={(e) => setSelection(e.target.value)}>
                <option >Grapefruit</option>
                <option >Lime</option>
                <option >Coconut</option>
                <option >Mango</option>
            </select>
            
        </div>
    )
}