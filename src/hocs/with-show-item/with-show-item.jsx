import React, {PureComponent} from 'react';

const withShowItem = (Component) => {
  class WithShowItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isShown: false
      };

      this.handleExitButtonClick = this.handleExitButtonClick.bind(this);
      this.handleEscapeButtonPress = this.handleEscapeButtonPress.bind(this);
    }

    componentDidMount() {
      document.addEventListener(`keydown`, this.handleEscapeButtonPress, false);
    }

    componentWillUnmount() {
      document.removeEventListener(`keydown`, this.handleEscapeButtonPress, false);
    }

    handleExitButtonClick() {
      document.getElementsByTagName(`body`)[0].style.overflow = `visible`;
      this.setState({isShown: false});
    }

    handleEscapeButtonPress(evt) {
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
          onExitButton={this.handleExitButtonClick}
          onEscapePress={this.handleEscapeButtonPress}
        />
      );
    }
  }

  WithShowItem.propTypes = {};

  return WithShowItem;
};

export default withShowItem;
