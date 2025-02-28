import { useState } from "react"
import "./BaiTap1.css"
export default function BaiTap1() {
    const [varA, setVarA] = useState("")
    const [varB, setVarB] = useState("")
    const [operator, setOperator] = useState("")
    const [result, setResult] = useState("")
    const handleClick = () => {
        if (operator == "+")
            setResult(Number(varA) + Number(varB))
        else if (operator == "-")
            setResult(Number(varA) - Number(varB))
        else if (operator == "*")
            setResult(Number(varA) * Number(varB))
        else
            setResult(Number(varA) / Number(varB))

    }

    return (
        <>
            <div className="form-op">
                <h2>Calculator</h2>
                <input type="text" placeholder="Gia Tri a" value={varA} onChange={e => setVarA(e.target.value)} />
                <input type="text" placeholder="Gia Tri B" value={varB} onChange={e => setVarB(e.target.value)} />
                <div className="operator">
                    <input type="radio" onChange={e => setOperator(e.target.value)} name="group" value={"+"} /> <span>+</span>
                    <input type="radio" onChange={e => setOperator(e.target.value)} name="group" value={"-"} /> <span>-</span>
                    <input type="radio" onChange={e => setOperator(e.target.value)} name="group" value={"*"} /> <span>*</span>
                    <input type="radio" onChange={e => setOperator(e.target.value)} name="group" value={"/"} /> <span>/</span>
                </div>
                <button onClick={handleClick}>Click</button>
                {result != undefined && <h2>{result}</h2>}

            </div>
        </>
    )
}