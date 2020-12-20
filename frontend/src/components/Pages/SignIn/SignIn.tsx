import React from 'react';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import {AuthContextTypes, WithAuth} from '../../../contexts/WithAuth';

interface SignInProps {
  auth: AuthContextTypes;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
    margin: 5,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  field: {
    margin: 5,
  },
});
const SignInIMPL = (props: SignInProps): React.ReactElement => {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const submit = () => {
    props.auth.obtainToken(email, password);
    window.location.href = window.location.origin;
  };
  return (
    <div className={classes.root}>
      <Typography align={'center'}>Sing In</Typography>
      <TextField
        id="standard-error"
        className={classes.field}
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <FormControl className={classes.field}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button onClick={submit}>Submit</Button>
    </div>
  );
};

export const SignIn = WithAuth(SignInIMPL);
