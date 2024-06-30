import { useState } from "react";

export const WeatherForm = ({onChangeCity}) =>{

const [city, setCity] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        onChangeCity(city);
    }

    const handleChange = (event) =>{
        const value = event.target.value;

        value !== "" ? setCity(value) : null;
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
        </form>
    )
}