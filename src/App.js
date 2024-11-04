import React, {useState, useEffect} from 'react';
import EnterFirstName from './Components/EnterFirstName';
import EnterLastName from './Components/EnterLastName';
import EnterEmail from './Components/EnterEmail';
import SelectQueryType from './Components/SelectQueryType';
import EnterMessage from './Components/EnterMessage';
import Consent from './Components/Consent';
import {ClipLoaders} from 'react-spinners';
import icons from './icons';
import {motion, AnimatePresence} from 'framer-motion';
import './styles.css';


function App() {
    const [loading, setLoading] = useState(false);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const firstName = e.target.elements['first name'].value;
        const lastName = e.target.elements['last name'].value;
        const email = e.target.elements['email'].value;
        const queryTypes = e.target.elements['query type'];
        let queryType;
        queryTypes.forEach(node => {
           if(node.checked)
                queryType = node.value;
        })
        const message = e.target.elements['message'].value;

        const body = {
            firstName,
            lastName,
            email,
            queryType,
            message
        }
        try{
            const response = await fetch('https://contact-form-server-1ffe5b24a2df.herokuapp.com/upload_data', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            if(response.status === 200){
                const message = await response.text();
                console.log(message);                 
                setDisplayMessage(true);   
            }
        }
        catch(error){
            console.log(error);
        }
        finally{
            setLoading && setLoading(false);
        }
    }

    useEffect(() => {
        if(!displayMessage) return;

        setTimeout(() => {
            setDisplayMessage(false);
        }, 4000)
        setTimeout(() => {
            window.location.reload();
        }, 4500)
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
                {loading ? <ClipLoaders size='25px' color='white'/> : 'Submit'}
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