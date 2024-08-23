import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterFirstName() {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setError('');
        setName(e.target.value);
        e.target.setCustomValidity('');
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty')
    }

    const handleInvalid = (e) => {
        setError('empty');
        e.target.setCustomValidity(' ');
    }

    return(
        <fieldset className={styles.container}>
            <label>
                First Name <strong>*</strong>
            </label>
            <input 
                type='text' 
                className={styles.input} 
                value={name} 
                onChange={handleChange} 
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                name='first name' 
                required/>           
                    {error === 'empty' && 
                        <div 
                            className={styles.errorMessage}
                            >
                            This field is required
                        </div>                   
                    }
        </fieldset>
    )
}

export default EnterFirstName;