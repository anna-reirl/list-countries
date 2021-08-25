import * as React from 'react'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'
import "../styles/Country.css"
import { propTypes } from 'react-bootstrap/esm/Image';

function Country(props) {
    const [selected, changeSelected] = React.useState(false)
    return (
        <tr className={selected ? "selected-country": ""}>
            <td>{props.name}</td>
            <td>{props.capital}</td>
            <td>
                { selected ?
                <Button variant="danger" onClick={() => changeSelected(false)}>Remove</Button> :
                <Button variant="success" onClick={() => changeSelected(true)}>Add</Button> 
                }
            </td>
        </tr>
        )
}

Country.defaultProps = {
    capital: "Not Available"
}

export default Country
