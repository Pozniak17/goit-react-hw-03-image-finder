import axios from 'axios';
import { Component } from 'react';
import { Seachbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Grid } from 'react-loader-spinner';

const KEY = '28544484-259b47bf7f7000ebfc4f498cb';
// axios.defaults.baseURL = `https://pixabay.com/api/?key=${KEY}&q=cat&image_type=photo`;

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    largeImage: '',
    // isLoading: false,
    // error: null,
    // showModal: true,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    const prevName = prevState.query;

    try {
      // перевіряємо попереднє і поточне ім'я
      if (prevName !== query) {
        // this.setState({ isLoading: true });

        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
`
        );
        this.setState({ images: response.data.hits });
      }
    } catch (error) {
      this.setState({ error });
      // } finally {
      // this.setState({ isLoading: false });
    }

    // if (
    // this.state.page !== prevState.page ||
    // this.state.query !== prevState.query
    // )
  }

  handleFormSubmit = query => {
    this.setState({ query });
  };

  handleLargeImageSubmit = largeImage => {
    this.setState({ largeImage });
  };

  render() {
    const { images } = this.state;
    // console.log(images);
    return (
      <>
        <Seachbar onSubmit={this.handleFormSubmit} />
        <ImageGallery data={images} />

        {/* {error && <p>Whoops, something went wrong: {error.message}</p>} */}
        {/* {isLoading && <div>Загружае...</div>} */}
        {/* {images.length > 0 && <ImageGallery data={images} />} */}
      </>
    );
  }
}
