import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      textError: null,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true, textError: 'Произошла непредвиденная ошибка, перезапустите приложение' });
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.textError}</h1>;
    }
    return this.props.children;
  }
}
