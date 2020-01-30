import React, {Component} from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import {Input, SubmitBtn} from "../components/Form";
import Results from "../components/Results";
import Card from "../components/Card";

class Search extends Component {
    state = {
        books: [],
        search: ""
    };

    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => this.setState({
                books: res.data.items,
                search: ""
            }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };

    saveGoogleBook = id => {
        let book = this.state.books.find(book => book.id === id);
        console.log(book);
        API.saveBook({
            id: book.id,
            title: book.volumeInfo.title,
            link: book.volumeInfo.previewLink,
            authors: book.volumeInfo.authors,
            image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://go-gae-image-api-example-dot-gae-lab-001.appspot.com/img?f=img-api-example/2.jpg",
            description: book.volumeInfo.description
        })
            .then(res => this.searchBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Navbar />
                <Jumbotron />
                <form>
                    <h5>Search Form</h5>
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
                {this.state.books.length ? (
                    <Results>
                        <h5>Results</h5>
                        {this.state.books.map(book => (
                            <Card
                                id={book.id}
                                title={book.volumeInfo.title}
                                link={book.volumeInfo.previewLink}
                                authors={book.volumeInfo.authors}
                                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://go-gae-image-api-example-dot-gae-lab-001.appspot.com/img?f=img-api-example/2.jpg"}
                                description={book.volumeInfo.description}
                                saveGoogleBook={this.saveGoogleBook}
                            />
                        ))}
                    </Results>
                ) : (
                        <Results><h5><i>No results to display</i></h5></Results>
                    )}
            </Container>
        );
    }
};

export default Search;