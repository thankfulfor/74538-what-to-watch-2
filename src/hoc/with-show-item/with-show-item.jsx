import React, {PureComponent} from 'react';

const withShowItem = (Component) => {
  class WithShowItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isShown: false
      };

      this.exitButtonClickHandler = this.exitButtonClickHandler.bind(this);
      this.escapeButtonPressHandler = this.escapeButtonPressHandler.bind(this);
    }

    componentDidMount() {
      document.addEventListener(`keydown`, this.escapeButtonPressHandler, false);
    }

    componentWillUnmount() {
      document.removeEventListener(`keydown`, this.escapeButtonPressHandler, false);
    }

    exitButtonClickHandler() {
      document.getElementsByTagName(`body`)[0].style.overflow = `visible`;
      this.setState({isShown: false});
    }

    escapeButtonPressHandler(evt) {
      if (evt.keyCode === 27) {
        document.getElementsByTagName(`body`)[0].style.overflow = `visible`;
        this.setState({isShown: false});
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          isShown={this.state.isShown}
          onExitButton={this.exitButtonClickHandler}
          onEscapePress={this.escapeButtonPressHandler}
        />
      );
    }

  }

  WithShowItem.propTypes = {};

  return WithShowItem;
};

export default withShowItem;
