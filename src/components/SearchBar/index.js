import React from "react"

function SearchBar() {
    return (
        <form>
            <label>
                Name:
          <input type="text" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
};

export default SearchBar

    // < form onSubmit = { this.handleSubmit } >
    // < input type = "text" value = { this.state.value } onChange = { this.handleChange } />




        //     <div class="input-group flex-nowrap">
        //         <div class="input-group-prepend">
        //             <span class="input-group-text" id="addon-wrapping">@</span>
        //         </div>
        //         <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"> 
        // </div>