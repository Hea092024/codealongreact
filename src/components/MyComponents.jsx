import react from 'react';
import { useState } from 'react';
export default function MyComponents({ message }) {
    return (
        <>
           <div>
            <h2>Message from App:</h2>
            <p>{message}</p>
           </div>
        </>
    );
}