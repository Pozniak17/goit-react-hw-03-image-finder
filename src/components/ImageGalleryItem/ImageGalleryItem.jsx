import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
// import style from '../style.module.css';
import { Item, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { id, webformatURL, tags, largeImageURL } = this.props;
    const { showModal } = this.state;
    return (
      <Item key={id}>
        <Image src={webformatURL} alt={tags} onClick={this.toggleModal} />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </Item>
    );
  }
}
