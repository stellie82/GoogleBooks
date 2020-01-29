import React, {Component} from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/SearchResults";
import Card from "../components/Card";
import {Input, SubmitBtn} from "../components/Form";

class Search extends Component {
    state = {
        books: [],
        search: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = query => {
        query.preventDefault();
        API.googleBooks(query)
            .then(res => this.setState({
                books: res.data.items
            }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Navbar />
                <Jumbotron />
                <form>
                    <Input
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        placeholder="Book search"
                    />
                    <SubmitBtn
                        onClick={this.handleFormSubmit}
                    >
                        Submit
              </SubmitBtn>
                </form>
                <SearchResults
                    books={this.state.books}>
                    {this.state.books.map(book => (
                        <Card
                            id={book.id}
                            title={book.volumeInfo.title}
                            link={book.volumeInfo.previewLink}
                            authors={book.volumeInfo.authors}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            description={book.volumeInfo.description}
                        />
                    ))}
                </SearchResults>
            </Container>
        );
    }
}

export default Search;
