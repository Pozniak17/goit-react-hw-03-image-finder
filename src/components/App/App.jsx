import axios from 'axios';
import { Component } from 'react';
import { Seachbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';

import { Button } from './App.styled';

const KEY = '28544484-259b47bf7f7000ebfc4f498cb';
// axios.defaults.baseURL = `https://pixabay.com/api/?key=${KEY}&q=cat&image_type=photo`;

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    largeImage: '',
    isLoading: false,
    // error: null,
    // showModal: true,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    // перевіряємо попереднє і поточне ім'я
    if (page !== prevState.page || query !== prevState.query) {
      try {
        this.setState({ isLoading: true });
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState({ images: response.data.hits });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = query => {
    this.setState({ query });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, query, isLoading, error } = this.state;
    return (
      <>
        {error && <h1>Whoops, something went wrong: {error.message}</h1>}
        <Seachbar onSubmit={this.handleFormSubmit} />
        {isLoading ? <Loader /> : <ImageGallery data={images} />}
        {query && <Button onClick={this.handleLoadMore}>Load more</Button>}
      </>
    );
  }
}
