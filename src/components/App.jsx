import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import * as API from 'services/pixabay-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    querySearch: '',
    page: 1,
    photos: [],
    isLoading: false,
    total: null,
  };
  async componentDidUpdate(_, prevState) {
    const { page, querySearch } = this.state;
    if (prevState.page !== page || prevState.querySearch !== querySearch) {
      try {
        this.setState({ isLoading: true });
        const photos = await API.getPhotos(querySearch, page);
        if (photos.total === 0) {
          toast.warn(`${this.state.querySearch} not found`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          this.setState({ isLoading: false });
          return;
        }
        toast.success(
          `${this.state.querySearch} found! Total: ${photos.total}`,
          {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        this.setState(prevState => ({
          photos: [...prevState.photos, ...photos.hits],
          isLoading: false,
          total: photos.total,
        }));
      } catch (error) {
        console.log(error);
      }
    }
  }

  searchPhotos = ({ querySearch }) => {
    if (querySearch.trim() === '') {
      toast.warn('Field cannot be empty', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.setState({ querySearch, page: 1, photos: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isLoading, photos, total } = this.state;
    const { searchPhotos, loadMore } = this;
    return (
      <>
        <Searchbar onSubmit={searchPhotos} />
        {photos.length > 0 && <ImageGallery photos={photos} />}
        {isLoading && <Loader />}
        {total > 12 && <LoadMore onClick={loadMore} />}
        <GlobalStyle />
        <ToastContainer />
      </>
    );
  }
}
