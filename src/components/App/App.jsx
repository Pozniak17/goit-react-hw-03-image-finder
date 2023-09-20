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
    error: null,
    total: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    // перевіряємо попереднє і поточне ім'я
    if (page !== prevState.page || query !== prevState.query) {
      this.getPhotos(query, page);
    }
  }
  getPhotos = async (query, page) => {
    this.setState({ isLoading: true });
    try {
      // передаємо запит та сторінку та сторінку функцію запиту
      const { hits, totalHits } = await articlesWithQuery(query, page);
      if (hits.length === 0) {
        return alert('We dont find');
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        total: totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

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
    }));
  };

  render() {
    const { images, isLoading, error, total } = this.state;
    const allPage = total / images.length;
    return (
      <>
        {error && <h1>Whoops, something went wrong</h1>}
        <Seachbar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery data={images} />}

        {allPage > 1 && !isLoading && images.length > 0 && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
        {/* {isLoading ? (<Loader />) : ( && (<Button onClick={this.handleLoadMore}>Load more</Button>))} */}
        <Toaster position="top-center" />
      </>
    );
  }
}
