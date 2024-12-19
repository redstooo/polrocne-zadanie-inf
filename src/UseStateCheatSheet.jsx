import React, {useState} from "react"

function UseStateCheatSheet(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState(true);

    const updateName = () => {
        setName("Max");
    }

    const ageIncrease = () => {
        setAge(age + 1);
    }

    const genderChange = () => {
        setGender(!gender); // togglovanie medzi true a false
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>
            <p>Age: {age}</p>
            <button onClick={ageIncrease}>Increment</button>
            <p>gender: {gender ? "male" : "female"}</p>
            <button onClick={genderChange}>change gender</button>
        </div>

    );

}

export default UseStateCheatSheet