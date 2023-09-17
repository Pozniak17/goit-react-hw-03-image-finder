import { Modal } from 'components/Modal/Modal';
import style from '../style.module.css';
import { Component } from 'react';

// export const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => {
//   console.log(largeImageURL);
//   return (
//     <li key={id} className={style.imageGalleryItem} onClick={() => <Modal />}>
//       <img
//         src={webformatURL}
//         alt={tags}
//         className={style.imageGalleryItemImage}
//       />
//     </li>
//   );
// };

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
      <li key={id} className={style.imageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          className={style.imageGalleryItemImage}
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </li>
    );
  }
}
