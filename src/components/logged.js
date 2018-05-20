import React from 'react';
import { Link } from 'react-router-dom';

export default function Logged(){
    return (
        <div className='logged'>
            <Link className='btn btn-primary btn-lg' to='/movies'>See your movies</Link>
        </div>
    );
}