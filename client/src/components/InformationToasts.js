import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useToasts } from 'react-toast-notifications'
import { errorSelector, successSelector } from '../store/common/selectors';

const InformationToasts = () => {
    const error = useSelector(errorSelector);
    const success = useSelector(successSelector);
    const { addToast } = useToasts();

    useEffect(() => {
        if (error != null) {
            addToast(error, {
                appearance: 'error',
                autoDismiss: true,
            });
        } 
    }, [error]);

    useEffect(() => {
        if (success != null) {
            addToast(success, {
                appearance: 'success',
                autoDismiss: true,
            });
        } 
    }, [success]);

    return (
        <div>
        </div>
    );
};

export default InformationToasts;
