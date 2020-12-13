import React from 'react';
import Typography from '@material-ui/core/Typography';

export const ErrorMessage = (): React.ReactElement => {
  return (
    <div>
      <Typography>
        Something went wrong. We are already working on this problem.
      </Typography>
      <Typography>
        Visit our <a href="/">Home page</a>
      </Typography>
    </div>
  );
};
