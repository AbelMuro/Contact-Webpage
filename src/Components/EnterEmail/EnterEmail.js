import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterEmail() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setError('');
        setEmail(e.target.value);
        e.target.setCustomValidity('');
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        const isInvalid = e.target.validity.typeMismatch;

        if(isEmpty)
            setError('empty');
        else if(isInvalid)
            setError('invalid');
    }

    const handleInvalid = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        e.target.setCustomValidity(' ');        

        if(isEmpty)
            setError('empty');
        else 
            setError('invalid');
    }

    return(
        <fieldset className={styles.container}>
            <label>
                Email Address <strong>*</strong>
            </label>
            <input 
                type='email' 
                className={styles.input} 
                style={error ? {borderColor: '#D73C3C'} : {}}
                value={email} 
                onChange={handleChange} 
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                name='email' 
                required/>           
                    {error === 'empty' && 
                        <div className={styles.errorMessage}>
                            This field is required
                        </div>                   
                    }
                    {
                        error === 'invalid' && 
                            <div className={styles.errorMessage}>
                                Please enter a valid email address
                            </div>
                    }
        </fieldset>
    )
}

export default EnterEmail;