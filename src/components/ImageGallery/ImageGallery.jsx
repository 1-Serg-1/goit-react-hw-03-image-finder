import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { ItemImage, ListImage } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    showModal: false,
    largeImage: null,
    tags: null,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleModalLargeImage = (largeImageURL, tags) => {
    this.setState({ largeImage: largeImageURL, tags: tags });
  };

  render() {
    const { photos } = this.props;
    const { handleModalLargeImage, toggleModal } = this;
    const { showModal, largeImage, tags } = this.state;
    return (
      <>
        <ListImage>
          {photos.map(photo => {
            return (
              <ItemImage key={photo.id}>
                <ImageGalleryItem
                  photo={photo}
                  onShowPhoto={handleModalLargeImage}
                  onClick={toggleModal}
                />
              </ItemImage>
            );
          })}
        </ListImage>
        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={largeImage} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
