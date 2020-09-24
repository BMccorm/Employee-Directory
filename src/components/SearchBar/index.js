import React from "react"

function SearchBar() {
    return (
        <form className="form-group d-flex mx-5 mt-3 justify-content-center">

            <input type="text" className="form-control col-10 mr-2" placeholder="Search" aria-label="search" />

            <input type="submit" value="Submit" className="btn btn-primary btn-sm" />
        </form>
    )
};

export default SearchBar

    // < form onSubmit = { this.handleSubmit } >
    // < input type = "text" value = { this.state.value } onChange = { this.handleChange } />
