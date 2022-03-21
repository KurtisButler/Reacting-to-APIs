import React, { useState, useEffect } from 'react';

const Films = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(pizza => films.json())
            .then(films => setFilms(films))
            .catch(err => console.log(err))
    })

    return (

        <>

            <h1>This is the Films component</h1>

        {films.map(film => )
        <>
        <h1></h1>
        ))}

        </>
    )

}

export default Films