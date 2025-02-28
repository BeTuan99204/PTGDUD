
import { useState } from "react"
export default function Button({ color }) {
    console.log(color);
    let colorButton = ""
    if (color == "primary")
        colorButton = "blue"
    else if (color == "secondary")
        colorButton = "gray"
    else if (color == "success")
        colorButton = "green"
    else if (color == "danger")
        colorButton = "red"
    console.log(colorButton)

    return (
        <>
            <button style={{ background: colorButton }}>Button</button>
        </>
    )
}
