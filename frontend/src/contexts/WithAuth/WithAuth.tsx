import * as React from 'react';
import Cookies from 'cookies-js';
import {WithAPI} from '../WithAPI';
import {API} from '../../API';

export interface AuthContextTypes {
  authenticated: boolean;
  user: null;
  token: string;
  obtainToken: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string) => void;
  getUserData: (id: string) => void;
}

export const AuthContext = React.createContext<AuthContextTypes>({
  authenticated: false,
  user: null,
  token: '',
  obtainToken: () => {
    console.log('obtainToken empty');
  },
  logout: () => {
    console.log('logout empty');
  },
  register: () => {
    console.log('register empty');
  },
  getUserData: () => {
    console.log('getUserData empty');
  },
});

interface WithAuthProps {
  auth: AuthContextTypes;
}

export const WithAuth = <P extends WithAuthProps, R = Omit<P, 'auth'>>(
  Element: React.ComponentType<P>
): React.FunctionComponent<R> => {
  const wrapper = (props: P) => (
    <AuthContext.Consumer>
      {(value) => <Element {...props} auth={value} />}
    </AuthContext.Consumer>
  );
  wrapper.displayName = `WithAuth<${Element.displayName}>`;
  // TODO: deal with types
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return wrapper;
};

export interface AuthProps {
  API: API;
  children: React.ReactElement;
}

const AuthIMPL = (props: AuthProps): React.ReactElement => {
  const [user, setUser] = React.useState(null);
  const [authStatus, setAuthStatus] = React.useState();

  const register = (email: string, password: string) => {
    props.API.register(email, password).then((res) => {
      console.log(res);
    });
  };

  const obtainToken = (email: string, password: string) => {
    props.API.obtainToken(email, password).then((res) => {
      console.log(res);
    });
  };

  const logout = () => {
    Cookies.set('token', '');
    setUser(null);
  };

  const getUserData = React.useCallback(
    (id: string) => {
      props.API.getUserData(id).then((res) => {
        console.log(res);
      });
    },
    [setUser]
  );

  const verifyToken = React.useCallback(() => {
    props.API.verifyToken().then((res) => {
      console.log(res);
    });
  }, [getUserData]);

  React.useEffect(() => {
    const token = Cookies.get('token');
    if (token && token.length > 0) {
      verifyToken();
    } else {
      logout();
    }
  }, [verifyToken]);

  const auth: AuthContextTypes = {
    authenticated: false,
    user: null,
    token: '',
    obtainToken: obtainToken,
    logout: logout,
    register: register,
    getUserData: getUserData,
  };

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export const Auth = WithAPI(AuthIMPL);
