import axios from 'axios';
import { Component } from 'react';
import { Seachbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
// import { Grid } from 'react-loader-spinner';

const KEY = '28544484-259b47bf7f7000ebfc4f498cb';
// axios.defaults.baseURL = `https://pixabay.com/api/?key=${KEY}&q=cat&image_type=photo`;

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 2,
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

  handleLargeImageSubmit = largeImage => {
    this.setState({ largeImage });
  };

  render() {
    const { images, isLoading, error } = this.state;
    // console.log(images);
    return (
      <>
        {error && <h1>Whoops, something went wrong: {error.message}</h1>}
        <Seachbar onSubmit={this.handleFormSubmit} />
        {isLoading ? <Loader /> : <ImageGallery data={images} />}
        <Button>Load more</Button>
      </>
    );
  }
}
