import React, {PureComponent} from 'react';

const PREVIEW_DELAY = 1000;

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this.mouseOverHandler = this.mouseOverHandler.bind(this);
      this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    }

    mouseOverHandler() {
      this.delayShowPreview = setInterval(() => {
        this.setState({
          isPlaying: true
        });
      }, PREVIEW_DELAY);
    }

    mouseLeaveHandler() {
      this.setState({
        isPlaying: false
      });
      clearInterval(this.delayShowPreview);
    }

    componentDidMount() {
      document.addEventListener(`mouseOver`, this.mouseOverHandler);
      document.addEventListener(`mouseLeave`, this.mouseLeaveHandler);
    }

    componentWillUnmount() {
      document.removeEventListener(`mouseOver`, this.mouseOverHandler);
      document.removeEventListener(`mouseLeave`, this.mouseLeaveHandler);
    }

    render() {
      return <Component
        {...this.props}
        isPlaying={this.state.isPlaying}
        onMouseEnter={this.mouseOverHandler}
        onMouseLeave={this.mouseLeaveHandler}
      />;
    }

  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
