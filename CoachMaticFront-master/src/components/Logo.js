import PropTypes from 'prop-types';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  const theme = useTheme();

  return (
    <Box sx={{ width: 60, height: 60, ...sx }}>
      <img src="/static/brand/logo_single.png" width="100%" height="100%"></img>
    </Box>
  );
}
