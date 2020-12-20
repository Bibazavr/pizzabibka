import * as React from 'react';
import {API} from '../../API';

export const APIContext = React.createContext<API>(new API());

interface APIProp {
  API: API;
}

export const WithAPI = <P extends APIProp, R = Omit<P, 'API'>>(
  Element: React.ComponentType<P>
): React.FunctionComponent<R> => {
  const wrapper = (props: P) => (
    <APIContext.Consumer>
      {(value) => <Element {...props} API={value} />}
    </APIContext.Consumer>
  );
  wrapper.displayName = `WithAPI<${Element.displayName}>`;
  // TODO: deal with types
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return wrapper;
};
