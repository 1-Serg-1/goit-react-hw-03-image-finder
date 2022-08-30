import { Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ photo, onShowPhoto, onClick }) => {
  const { webformatURL, tags, largeImageURL } = photo;
  return (
    <Image
      src={webformatURL}
      alt={tags}
      onClick={() => {
        onShowPhoto(largeImageURL, tags);
        onClick();
      }}
    />
  );
};

ImageGalleryItem.propTypes = {
  photo: PropTypes.object.isRequired,
  onShowPhoto: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
