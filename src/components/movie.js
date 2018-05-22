import React from 'react';

export default function Movie(props) {
    const { id, title, year, runtime, genre } = props;
    return (
        <tr 
            className='movie'
            key={id} 
            onClick={() => {
                props.history.push(`/movies/${id}`)
            }}
        >
            <td>{title}</td>
            <td>{year}</td>
            <td>{runtime}</td>
            <td>{genre}</td>
        </tr>
    ) 
}