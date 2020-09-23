import React, { Component } from "react"
import "./search.css"
import API from "../../utils/API";
import SearchResults from "../SearchResults/index"


class Search extends Component {

    state = {
        search: "",
        employee: [],

    };

    componentDidMount() {
        API.getEmployeeList()
            .then(res => this.setState({ employee: res.data.message }))
            .catch(err => console.log(err));

    }

    render() {
        return (
            <div>
                <SearchResults
                    employee={this.state.employee} />
            </div>
        )
    }
}

export default Search 