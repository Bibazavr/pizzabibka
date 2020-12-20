import React from 'react';

import {AuthContextTypes, WithAuth} from '../../../contexts/WithAuth';

interface SignUpProps {
  auth: AuthContextTypes;
}

const SignUpIMPL = (props: SignUpProps): React.ReactElement => {
  console.log(props);
  return <div>ads</div>;
};

export const SignUp = WithAuth(SignUpIMPL);
