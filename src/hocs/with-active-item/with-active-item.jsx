import React, {PureComponent} from 'react';

const PREVIEW_DELAY = 1000;

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    componentDidMount() {
      document.addEventListener(`mouseOver`, this.handleMouseOver);
      document.addEventListener(`mouseLeave`, this.handleMouseLeave);
    }

    componentWillUnmount() {
      document.removeEventListener(`mouseOver`, this.handleMouseOver);
      document.removeEventListener(`mouseLeave`, this.handleMouseLeave);
    }

    handleMouseOver() {
      this.delayShowPreview = setInterval(() => {
        this.setState({
          isPlaying: true
        });
      }, PREVIEW_DELAY);
    }

    handleMouseLeave() {
      this.setState({
        isPlaying: false
      });
      clearInterval(this.delayShowPreview);
    }

    render() {
      return <Component
        {...this.props}
        isPlaying={this.state.isPlaying}
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      />;
    }

  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
