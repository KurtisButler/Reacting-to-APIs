import React, { useState, useEffect } from 'react';

const Films = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(films => films.json())
            .then(films => setFilms(films))
            .catch(err => console.log(err))

    });

    return (

        <>

            <h1>This is the People Component</h1>

            {films.map(film => (
                <>
                    <div className="card" key={film.id}>
                        <div className="card-body">
                            <h5 className="card-title">{film.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{film.director} - {film.release_date}</h6>
                            <p className="card-text">
                                {film.description}
                            </p>
                            <a href={film.url} className="card-link">Read More</a>
                        </div>
                    </div>
                </>
            ))}


        </>
    )
}


export default Films