import React, {PureComponent} from 'react';

const withShowItem = (Component) => {
  class WithShowItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isShown: false
      };

      this.exitButtonClickHandle = this.exitButtonClickHandle.bind(this);
      this.escapeButtonPressHandle = this.escapeButtonPressHandle.bind(this);
    }

    componentDidMount() {
      document.addEventListener(`keydown`, this.escapeButtonPressHandle, false);
    }

    componentWillUnmount() {
      document.removeEventListener(`keydown`, this.escapeButtonPressHandle, false);
    }

    exitButtonClickHandle() {
      document.getElementsByTagName(`body`)[0].style.overflow = `visible`;
      this.setState({isShown: false});
    }

    escapeButtonPressHandle(evt) {
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
          onExitButton={this.exitButtonClickHandle}
          onEscapePress={this.escapeButtonPressHandle}
        />
      );
    }
  }

  WithShowItem.propTypes = {};

  return WithShowItem;
};

export default withShowItem;
