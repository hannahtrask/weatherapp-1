import React, { useState } from 'react'

const Form = (props) => {

    //this will set the default zipcode to 83002
    //when we set the zipcode in handleSubmit and handleChange it will change the value!!!! hopefully!!!
    const [zipCode, setZipCode] = useState(19382)

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('handle submit in form clicked')

        props.handleSubmitFromApp(zipCode)
        setZipCode();
    }

    const handleChange = (event) => {
        event.preventDefault()
        // console.log('this is handle change in form!')
//this saves the value entered in the submit thing to a variable called zip
        const zip = event.target.value
        setZipCode(zip)
    }

    return (
			<div className='weather-form'>
				<form onSubmit={handleSubmit}>
					<input
						id='Weather Data'
						type='number'
						value={zipCode}
						onChange={handleChange}
					/>
					<input className='submit' type='submit' value='find your weather!' />
				</form>
			</div>
		);
}

export default Form