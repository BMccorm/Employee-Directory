import React from "react"

function SearchBar() {
    return (
        <form className="input-group flex-nowrap">
            <label className="input-group-prepend">
                Name:
          <input type="text" />
            </label>
            <input type="submit" value="Submit" className="btn btn-primary btn-sm" />
        </form>
    )
};

export default SearchBar

    // < form onSubmit = { this.handleSubmit } >
    // < input type = "text" value = { this.state.value } onChange = { this.handleChange } />

