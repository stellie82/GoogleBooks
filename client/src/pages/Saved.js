import React, {Component} from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Results from "../components/Results";
import SavedCard from "../components/SavedCard";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({books: res.data})
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Navbar />
                <Jumbotron />
                {this.state.books.length ? (
                    <Results>
                        <h4>Saved Books</h4>
                        {this.state.books.map(book => (
                            <SavedCard
                                id={book._id}
                                title={book.title}
                                link={book.link}
                                authors={book.authors}
                                image={book.image}
                                description={book.description}
                                deleteBook={this.deleteBook}
                            />
                        ))}
                    </Results>
                ) : (
                        <Results><h4><i>There are no books saved</i></h4></Results>
                    )}
            </Container>
        );
    }
}

export default Saved;