export const WeatherMainInfo = ({weather}) =>{

    console.log(weather?.location.lon);
    console.log(weather?.location.lat);

    return(
        <div>
            <div>{weather?.location.country}</div>
            <div>{weather?.location.name}</div>
            <div>
                <img 
                    src={weather?.current.condition.icon} 
                    alt={weather?.location.country} 
                    width="100" 
                    height="80"
                />
            </div>
            <div>
                <div>{weather?.current.condition.text}</div>
                <div>{weather?.current.temp_c}°</div>
            </div>
            <div>
                <iframe
                    title="mapa"
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13897.215629119919!2d${weather?.location.lon}!3d${weather?.location.lat}2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1719796088051!5m2!1ses-419!2sar`}
                    width="600" 
                    height="450" 
                    style={{ border:0 }} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.60648832726!2d-0.4312474072555601!3d51.528607007953084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses-419!2sar!4v1719709298074!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.60648832715!2d-0.43124740725554217!3d51.5286070079531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses-419!2sar!4v1719783513207!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13897.215629119919!2d-66.86775635!3d-29.449134799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1719796088051!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>