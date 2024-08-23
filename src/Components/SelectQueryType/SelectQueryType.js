import React, {useState} from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function SelectQueryType() {
    const [query, setQuery] = useState('');

    const selectedStyles = {
        borderColor: '#0C7D69',
        backgroundColor: '#E0F1E8',
    }

    const handleClick = (e) => {
        setQuery(e.target.value);
    }

    return(
        <fieldset className={styles.container}>
            <legend>
                Query Type <strong>*</strong>
            </legend>
            <div className={styles.radio_box} style={query === 'general enquiry' ? selectedStyles : {}}>
                <label className={styles.radio} htmlFor='general enquiry'>
                    <input 
                        type='radio' 
                        id='general enquiry' 
                        value='general enquiry'
                        name='query type'
                        onClick={handleClick} 
                        />  
                    {query === 'general enquiry' && <img className={styles.radio_checked} src={icons['dot']}/>}
                </label>
                General Enquiry
            </div>
            <div className={styles.radio_box} style={query === 'support request' ? selectedStyles : {}}>
                <label className={styles.radio} htmlFor='support request'>
                    <input 
                        type='radio' 
                        id='support request'
                        value='support request' 
                        name='query type'
                        onClick={handleClick} />
                    {query === 'support request' && <img className={styles.radio_checked} src={icons['dot']}/>}
                </label>
                Support Request
            </div>
        </fieldset>
    )
}

export default SelectQueryType;