import { Formik } from 'formik';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  FormSearch,
  ButtonForm,
  InputSearch,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    await onSubmit(values);
    setSubmitting(false);
    resetForm();
  };
  return (
    <>
      <Header className="searchbar">
        <Formik initialValues={{ querySearch: '' }} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <FormSearch className="form" autoComplete="off">
              <ButtonForm
                type="submit"
                className="button"
                disabled={isSubmitting}
              >
                <ImSearch />
              </ButtonForm>

              <InputSearch
                name="querySearch"
                type="text"
                placeholder="Search images and photos"
              />
            </FormSearch>
          )}
        </Formik>
      </Header>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
