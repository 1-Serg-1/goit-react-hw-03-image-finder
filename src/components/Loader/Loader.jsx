import { Bars } from 'react-loader-spinner';
import { Box } from 'components/Box';

export const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" className="Loader" pt="50px">
      <Bars
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Box>
  );
};
