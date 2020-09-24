import React, { Component } from "react"
import "./search.css"
import API from "../../utils/API";
import SearchResults from "../SearchResults/index"

class Search extends Component {

    state = {
        search: "",
        employee: [],

    };

    handleOnInputChange = (event) => {
        const searchItem = event.target.value;
        console.log(searchItem)
        this.setState({ search: searchItem })
    }

    componentDidMount() {
        console.log("Getting employees")
        API.getEmployeeList()
            .then(res => {
                // console.log(res.data.results);
                this.setState({ employee: res.data.results })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <form className="form-group d-flex mx-5 mt-3 justify-content-center">

                    <input type="text"
                        value={this.state.search}
                        className="form-control col-10 mr-2"
                        placeholder="Search"
                        onChange={this.handleOnInputChange} />
                </form>
                <SearchResults
                    search={this.state.search}
                    employee={this.state.employee} />
            </div>
        )
    }
}

export default Search

