import React, {useState} from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function Consent () {
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState('');

    const handleClick = () => {
        setError('');
        setChecked(!checked);
    }

    const handleInvalid = () => {
        setError('not checked')
    }

    return(
        <fieldset className={styles.container}>
            <label className={styles.checkbox} htmlFor='checkbox'>
                <input 
                    id='checkbox' 
                    type='checkbox' 
                    value={checked} 
                    checked={checked} 
                    onClick={handleClick}
                    onInvalid={handleInvalid}
                    required
                    />
                {checked && <img src={icons['checked']}/>}
            </label>
           <p className={styles.message}>
                I consent to being contacted by the team <span>*</span>
            </p>
           {error === 'not checked' && 
            <div className={styles.errorMessage}>
                To submit this form, please consent to being contacted
            </div>
            }
        </fieldset>
    )
}

export default Consent;