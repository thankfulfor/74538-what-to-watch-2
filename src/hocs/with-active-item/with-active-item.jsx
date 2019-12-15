import React, {PureComponent} from 'react';

const PREVIEW_DELAY = 1000;

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this.mouseOverHandle = this.mouseOverHandle.bind(this);
      this.mouseLeaveHandle = this.mouseLeaveHandle.bind(this);
    }

    componentDidMount() {
      document.addEventListener(`mouseOver`, this.mouseOverHandle);
      document.addEventListener(`mouseLeave`, this.mouseLeaveHandle);
    }

    componentWillUnmount() {
      document.removeEventListener(`mouseOver`, this.mouseOverHandle);
      document.removeEventListener(`mouseLeave`, this.mouseLeaveHandle);
    }

    mouseOverHandle() {
      this.delayShowPreview = setInterval(() => {
        this.setState({
          isPlaying: true
        });
      }, PREVIEW_DELAY);
    }

    mouseLeaveHandle() {
      this.setState({
        isPlaying: false
      });
      clearInterval(this.delayShowPreview);
    }

    render() {
      return <Component
        {...this.props}
        isPlaying={this.state.isPlaying}
        onMouseEnter={this.mouseOverHandle}
        onMouseLeave={this.mouseLeaveHandle}
      />;
    }

  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
