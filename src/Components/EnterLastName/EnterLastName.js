import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterLastName() {
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
            <label htmlFor='last name'>
                Last Name <strong>*</strong>
            </label>
            <input 
                id='last name'
                type='text' 
                className={styles.input} 
                style={error === 'empty' ? {borderColor: '#D73C3C'} : {}}
                value={name} 
                onChange={handleChange} 
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                name='last name' 
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

export default EnterLastName;