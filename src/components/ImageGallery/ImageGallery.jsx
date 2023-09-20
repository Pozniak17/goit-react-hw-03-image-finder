import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ data }) => {
  return (
    <List>
      {data.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </List>
  );
};
