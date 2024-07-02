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

    return (
      <div className="">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Ingrese Pais" 
            className="block w-full my-3.5 bg-blue-500 shadow-mid hover:bg-blue-700 hover:shadow-lg shadow-blue-500/50 ... py-1.5 pl-7 rounded-md border-0 focus:ring-2 focus:ring-inset focus:ring-indigo-600" 
            onChange={handleChange} 
          />
        </form>
      </div>
    );
}