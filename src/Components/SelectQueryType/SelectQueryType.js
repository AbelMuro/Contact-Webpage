import React, {useState} from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function SelectQueryType() {
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');

    const selectedStyles = {
        borderColor: '#0C7D69',
        backgroundColor: '#E0F1E8',
    }

    const handleClick = (e) => {
        setError('');
        e.target.setCustomValidity('');
        setQuery(e.target.value);
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        setError('empty')
    }

    return(
        <fieldset className={styles.container}>
            <strong>
                Query Type <span>*</span>
            </strong>
            <label className={styles.radio_box} htmlFor='general enquiry' style={query === 'general enquiry' ? selectedStyles : {}}>
                <div className={styles.radio}>
                    <input 
                        type='radio' 
                        id='general enquiry' 
                        value='general enquiry'
                        name='query type'
                        onInvalid={handleInvalid}
                        onClick={handleClick} 
                        required
                        />  
                    {query === 'general enquiry' && <img className={styles.radio_checked} src={icons['dot']}/>}
                </div>
                General Enquiry
            </label>
            <label className={styles.radio_box} htmlFor='support request' style={query === 'support request' ? selectedStyles : {}}>
                <div className={styles.radio}>
                    <input 
                        type='radio' 
                        id='support request'
                        value='support request' 
                        name='query type'
                        onInvalid={handleInvalid}
                        onClick={handleClick} 
                        required/>
                    {query === 'support request' && <img className={styles.radio_checked} src={icons['dot']}/>}
                </div>
                Support Request
            </label>
            {
                error === 'empty' && <div className={styles.errorMessage}>Please select a query type</div>
            }
        </fieldset>
    )
}

export default SelectQueryType;