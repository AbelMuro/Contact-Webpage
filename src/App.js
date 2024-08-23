import React from 'react';
import EnterFirstName from './Components/EnterFirstName';
import EnterLastName from './Components/EnterLastName';
import EnterEmail from './Components/EnterEmail';
import SelectQueryType from './Components/SelectQueryType';
import './styles.css';

function App() {
    return(
        <form className={'container'}>
            <legend>
                Contact Us
            </legend>
            <div className={'names'}>
                <EnterFirstName/>
                <EnterLastName/>
                
            </div>
            <EnterEmail/>
            <SelectQueryType/>
        </form>
    )
}

export default App;