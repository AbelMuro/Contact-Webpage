import React, {useState, useEffect} from 'react';
import EnterFirstName from './Components/EnterFirstName';
import EnterLastName from './Components/EnterLastName';
import EnterEmail from './Components/EnterEmail';
import SelectQueryType from './Components/SelectQueryType';
import EnterMessage from './Components/EnterMessage';
import Consent from './Components/Consent';
import icons from './icons';
import {motion, AnimatePresence} from 'framer-motion';
import './styles.css';

//now i need to work on the responsiveness for tablet and mobile

function App() {
    const [displayMessage, setDisplayMessage] = useState(false);

    const dialogVariant = {
        hidden: {
            y: -200,
        },
        show: {
            y: 0,
            transition: {
                duration: 0.5   
            }
        },
        exit: {
            y: -200,
            transition: {
                duration: 0.5
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayMessage(true);
    }

    useEffect(() => {
        if(!displayMessage) return;

        setTimeout(() => {
            setDisplayMessage(false);
        }, 4000)
    }, [displayMessage])

    return(
        <form className={'container'} onSubmit={handleSubmit}>
            <legend>
                Contact Us
            </legend>
            <div className={'names'}>
                <EnterFirstName/>
                <EnterLastName/>
            </div>
            <EnterEmail/>
            <SelectQueryType/>
            <EnterMessage/>
            <Consent/>
            <button className={'submit'}>
                Submit
            </button>
            <AnimatePresence>
                {displayMessage && 
                    <motion.dialog 
                        className='messageBox'
                        initial='hidden' 
                        animate='show' 
                        exit='exit'
                        variants={dialogVariant}
                        >
                            <img src={icons['successMark']}/>
                            <strong>
                                Message Sent
                            </strong>
                            <p>
                                Thanks for completing the form. We’ll be in touch soon!
                            </p>
                    </motion.dialog>}                
            </AnimatePresence>

        </form>
    )
}

export default App;