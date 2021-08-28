import * as React from 'react'
import Countries from './Countries'
import Alerts from './Alerts'
import '../styles/Main.css'


function Main() {
    let alertText = "This is some text for alert"
        return (
            <main>
                <Alerts>{alertText}</Alerts>
                <Countries />
            </main>
        )
    }


export default Main;