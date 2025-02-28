import * as React from 'react';
import Cookies from 'cookies-js';
import {WithAPI} from '../WithAPI';
import {API} from '../../API';
import {User} from '../../types';

export interface AuthContextTypes {
  user: null | User;
  obtainToken: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string) => void;
  getUserData: (id: string) => void;
}

export const AuthContext = React.createContext<AuthContextTypes>({
  user: null,
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
  const [user, setUser] = React.useState<User | null>(null);

  const register = (email: string, password: string) => {
    props.API.register(email, password)
      .then((res) => {
        console.debug('register success', res);
      })
      .catch((e) => {
        console.error('register error', e);
      });
  };

  const obtainToken = (email: string, password: string) => {
    props.API.obtainToken(email, password)
      .then((res) => {
        console.debug('obtainToken success', res);
        const {error, result, status} = res;

        if (error || status >= 300) {
          console.debug('obtainToken error: ', error);
        } else {
          getUserData(result.id);
        }
      })
      .catch((e) => {
        console.error('obtainToken', e);
      });
  };

  const logout = () => {
    Cookies.set('token', '');
    let date: Date | number = new Date();
    date = date.setDate(date.getDate() - 1);
    date = new Date(date);
    Cookies.set('token', '', {expires: date});
    setUser(null);
  };

  const getUserData = React.useCallback(
    (id: string) => {
      props.API.getUserData(id)
        .then((res) => {
          console.debug('getUserData success', res);
          setUser(res.result);
        })
        .catch((e) => {
          console.error('getUserData error', e);
        });
    },
    [setUser]
  );

  const verifyToken = React.useCallback(() => {
    props.API.verifyToken()
      .then((res) => {
        console.debug('verifyToken success', res);
        setUser(res.result);
      })
      .catch((e) => {
        console.error('verifyToken error', e);
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
    user: user,
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
