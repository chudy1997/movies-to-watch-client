import React from 'react';

export default function Movie(props) {
    const { Id, Title, Year, Runtime, Genre } = props;
    return (
        <tr 
            className='movie'
            key={Title} 
            onClick={() => {
                props.history.push(`/movies/${Id}`)
            }}
        >
            <td>{Title}</td>
            <td>{Year}</td>
            <td>{Runtime}</td>
            <td>{Genre}</td>
        </tr>
    ) 
}