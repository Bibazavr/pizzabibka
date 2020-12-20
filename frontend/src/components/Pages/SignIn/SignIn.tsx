import React from 'react';

import {AuthContextTypes, WithAuth} from '../../../contexts/WithAuth';

interface SignInProps {
  auth: AuthContextTypes;
}

const SignInIMPL = (props: SignInProps): React.ReactElement => {
  console.log(props);
  return <div>ads</div>;
};

export const SignIn = WithAuth(SignInIMPL);
