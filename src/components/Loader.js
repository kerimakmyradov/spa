import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    const[showLoader, setShowLoader]=useState(true)

    useEffect(()=>{
        const timeOut=setTimeout(() => {
            setShowLoader(false)
        }, 500);
        return()=>clearTimeout(timeOut)
    }, [])

    return (
        <div>
            {showLoader && (<Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>)}
        </div>
    );
};

export default Loader;