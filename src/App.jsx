import React, { useState, useEffect } from 'react';
import Films from ./component/Films
import Films from ./component/People

const App = () => {


    let [filmsLoaded, setFilmsLoaded] = useState(false);
    let [peopleLoaded, setpeopleLoaded] = useState(false);

    let showFilms = () => {
        setpeopleLoaded(false);
        setFilmsLoaded(true);
    }

    let showPeople = () => {
        setFilmsLoaded(false);
        setpeopleLoaded(true);


    };

    if (showFilmsLoaded == true) {

        return (
            <>
                <div>
                    <h1>Ghibli API Lab</h1>
                    <button className="btn btn-primary" onClick={() => showFilms()}>Films</button>
                    <button className="btn btn-primary" onClick={() => showPeople)}>People</button>
            </div>
            <Films/>
        </>
    );
    }
    } else { (showPeople == true) {



return (
    <>
        <div>
            <h1>Ghibli API Lab</h1>
            <button className="btn btn-primary" onClick={() => showFilms()}>Films</button>
            <button className="btn btn-primary" onClick={() => showPeople)}>People</button>
    </div>
    <People/>
        </>
    );
};
    }
export default App;