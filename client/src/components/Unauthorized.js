import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../store/user/actions';

const Unauthorized = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(
            signOut({
                'id': '',
                'firstName': '',
                'lastName': '',
                'email': '',
                'firstLog': true,
                'role': null
            })
        );
    }, []);

    return (
        <div>
        </div>
    );
}

export default Unauthorized;