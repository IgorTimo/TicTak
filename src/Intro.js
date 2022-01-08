import { render } from "@testing-library/react"
import { useState } from "react";
import Game from "./Game"

export default function Intro(){
    const [isHistory, setHistory] = useState(true);
    const [isHuman, setHuman] = useState(true);
     

    function handelSubmit(e){
        e.preventDefault();
        render(<Game isHistory = {isHistory} isHuman = {isHuman}/>, document.getElementById('root')); // FIXME: redux
    }

    return(<form onSubmit={handelSubmit}>
        <p>Do you want to be able change your move?</p>
        <select id="history" onChange={(e) => setHistory(e.target.value === "true")}>
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
        <p>Do you want play whit human or with AI?</p>
        <select id="opponent" onChange={(e) => setHuman(e.target.value === "true")}>
            <option value="true">Human</option>
            <option value="false">AI</option>
        </select>
        <br/>
        <br/>
        <input type="submit" value="Start game"/>
    </form>)
}