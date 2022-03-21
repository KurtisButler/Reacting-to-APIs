import React, { useState, useEffect } from 'react';

const People = () => {

let [people, setPeople] = useState([])

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then((people) => people.json())
            .then((people) => setPeople(people))
            .catch((err) => console.log(err));
 });

    return (
        <>
        
        <h1>This is the People Component</h1>
        
            {people.map(person => (
                <div className="card" key={person.id}>
                <div className="card-body">
                  <h5 className="card-title">{person.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{person.gender}</h6>
                  <p className="card-text">{person.age}</p>
                  <a href={person.url} className="card-link">Read More</a>
                </div>
              </div>
            ))}
        </>
    )
}

export default People