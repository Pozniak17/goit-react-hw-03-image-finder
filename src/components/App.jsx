import axios from 'axios';
import { Component } from 'react';
import { Seachbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

const KEY = '28544484-259b47bf7f7000ebfc4f498cb';
axios.defaults.baseURL = `https://pixabay.com/api/?key=${KEY}&q=cat&image_type=photo`;

export class App extends Component {
  state = {
    name: [],
    articles: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    // if (
    // this.state.page !== prevState.page ||
    // this.state.query !== prevState.query
    // )
    const response = await axios.get();
    this.setState({ articles: response.data.hits });
  }

  changeName = name => {
    this.setState({ name });
  };

  render() {
    return (
      <>
        <Seachbar onSubmit={this.changeName} />
        <ImageGallery data={this.state.articles} />
      </>
    );
  }
}
