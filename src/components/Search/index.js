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
        console.log("Getting employees")
        API.getEmployeeList()
            .then(res => {
                console.log(res.data.results);
                this.setState({ employee: res.data.results })
            })
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

