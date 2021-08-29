import * as React from 'react'
import Alert from 'react-bootstrap/Alert'

function Alerts(props) {
    let children = props.children
    return (
        <>
            {
               React.Children.count(props.children)
            } 
        </>
    )
}

export default Alerts