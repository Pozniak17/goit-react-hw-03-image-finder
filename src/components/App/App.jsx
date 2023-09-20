// import axios from 'axios';
import { Toaster } from 'react-hot-toast';

import { Component } from 'react';
import { Seachbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Button } from './App.styled';
import { articlesWithQuery } from 'components/services/Api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    largeImage: '',
    isLoading: false,
    quantityOnPage: 12,
    // error: null,
    // showModal: true,
  };

  // componentDidMount() {
  //   this.setState({ images: [] });
  // }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    // перевіряємо попереднє і поточне ім'я
    if (page !== prevState.page || query !== prevState.query) {
      try {
        this.setState({ isLoading: true });

        // передаємо запит та сторінку та сторінку функцію запиту
        const ImageResponse = await articlesWithQuery(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...ImageResponse],
        }));
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  // коли запит відрізняється, з cat=>dog, записуємо новий запит, images та page скидуємо
  handleFormSubmit = query => {
    if (this.state.query !== query) {
      this.setState({
        query,
        images: [],
        page: 1,
      });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      // quantityOnPage: prevState.quantityOnPage + 12,
    }));
  };

  render() {
    const { images, query, isLoading, error } = this.state;
    return (
      <>
        {error && <h1>Whoops, something went wrong</h1>}
        <Seachbar onSubmit={this.handleFormSubmit} />
        {isLoading ? <Loader /> : <ImageGallery data={images} />}
        {query && <Button onClick={this.handleLoadMore}>Load more</Button>}
        {/* {isLoading ? (<Loader />) : (<ImageGallery data={images} /> && (<Button onClick={this.handleLoadMore}>Load more</Button>))} */}
        <Toaster position="top-center" />
      </>
    );
  }
}
