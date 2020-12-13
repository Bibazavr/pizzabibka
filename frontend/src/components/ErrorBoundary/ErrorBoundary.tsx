import React from 'react';
import {ErrorMessage} from './ErrorMessage';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ErrorBoundaryProps {}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({hasError: true, error, errorInfo});
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return this.state.hasError ? <ErrorMessage /> : this.props.children;
  }
}
