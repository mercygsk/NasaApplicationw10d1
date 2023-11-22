import { useState, useEffect } from 'react'

function Form(props) {
    // add state to hold the data of the form
    const [formData, setFormData] = useState({
        searchterm: "",
    })

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event) => {
        // prevent page from refreshing on form submissin
        event.preventDefault();

        // pass the search term to nasasearch prop (the method that will search)
        props.nasasearch(formData.searchterm);
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '50px', margin: '10px', borderRadius: '5px', backgroundColor:'beige',display:"grid" }}>
            <br></br>
            <h1>Search here for the content:</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <input type="submit" value="submit" />

            </form>
        </div>
    )
}

export default Form