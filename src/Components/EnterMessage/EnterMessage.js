import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterMessage() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        e.target.setCustomValidity('');
        setError('');
        setMessage(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty');       
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        setError('empty');
    }

    return(
        <fieldset className={styles.container}>
            <strong>
                Message <span>*</span>
            </strong>
            <textarea 
                className={styles.textarea} 
                value={message} 
                onChange={handleChange} 
                onBlur={handleBlur} 
                onInvalid={handleInvalid} 
                required
            ></textarea>
            {error === 'empty' && <div className={styles.errorMessage}>This field is required</div>}
        </fieldset>
    )
}

export default EnterMessage;