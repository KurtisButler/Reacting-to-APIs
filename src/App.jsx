import React, { useState, useEffect } from 'react';
import Films from './components/Films'
import People from './components/People'

const App = () => {

    let [filmsLoaded, setFilmsLoaded] = useState(false);
    let [peopleLoaded, setPeopleLoaded] = useState(false);

    let showFilms = () => {
        setPeopleLoaded(false);
        setFilmsLoaded(true);
    }

    let showPeople = () => {
        setFilmsLoaded(false);
        setPeopleLoaded(true);
    }



    if (filmsLoaded == true) {
        return (
            <>
                <div>
                    <h1>Welcome to Ghibli API</h1>
                    <button className="btn btn-primary" onClick={showFilms}>Films</button>
                    <button className="btn btn-primary" onClick={showPeople}>People</button>
                </div>
                <Films/>
                <h1>This is the films page</h1>

            </>
        );
    } else if (peopleLoaded == true) {
        return (
            <>
                <div>
                    <h1>Welcome to Ghibli API</h1>
                    <button className="btn btn-primary" onClick={showFilms}>Films</button>
                    <button className="btn btn-primary" onClick={showPeople}>People</button>
                </div>
                <People/>
                <h1>This is the people page</h1>

            </>
        );
    } else {
        return (
            <>
                <div>
                    <h1>Welcome to Ghibli API</h1>
                    <button className="btn btn-primary" onClick={showFilms}>Films</button>
                    <button className="btn btn-primary" onClick={showPeople}>People</button>
                </div>

                <h1>This is the home page</h1>

            </>
        );
    }
};

export default App;
