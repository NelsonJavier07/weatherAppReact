import { useEffect, useState } from "react";
import { WeatherForm } from "../WeatherApp/WeatherForm/WeatherForm.jsx";
import { WeatherMainInfo } from "./components/WeatherMainInfo/WeatherMainInfo.jsx";


export const WeatherApp = () =>{

    const [weather, setWeather] = useState(null);

    useEffect(() =>{
        loadInfo() // carga el componente loadInfo() que tiene el valor "london" por defecto
    },[]);

    useEffect(() =>{
        document.title = `Weather | ${weather ?.location.name ?? ""}`;
    }, [weather]); // Me Permite cambiar el titulo de la pagina de acuerdo a la ciudad ingresada
    
    const loadInfo = async (city = "london") => {
        try {
            const url = `http://api.weatherapi.com/v1/current.json?key=89abb91288634cd8b2513350242506&q=${city}&aqi=no`
            const request = await fetch(url);
            const data = await request.json();

            setWeather(data);

            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeCity = (city) =>{
        setWeather(null)
        loadInfo(city)
    }

    return(
        <>
            <WeatherForm onChangeCity={handleChangeCity} />
            <WeatherMainInfo weather={weather} />
        </>
    )
}

//<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13897.215629119919!2d-66.86775635!3d-29.449134799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1719669053978!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


 // console.log(import.meta.VITE_APP_KEY);
    // console.log(import.meta.VITE_APP_URL);

    //`${process.env.REACT_APP_URL}?key=${process.env.REACT_APP_KEY}&q=${city}`
    //`${import.meta.env.VITE_APP_URL}?key=${import.meta.env.VITE_APP_KEY}&q=${city}&aqi=no`;

    //  http://api.weatherapi.com/v1/current.json?aqi=no
    // http://api.weatherapi.com/v1/current.json?key=89abb91288634cd8b2513350242506&q=London&aqi=no