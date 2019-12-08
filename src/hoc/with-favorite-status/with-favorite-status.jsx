import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withFavoriteStatus = (Component) => {
  class WithFavoriteStatus extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFavorite: props.isFavorite,
      };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }


    render() {
      return (
        <Component
          {...this.props}
          isFavorite={this.state.isFavorite}
        />
      );
    }
  }

  WithFavoriteStatus.propTypes = {
    isFavorite: PropTypes.bool.isRequired
  };

  return WithFavoriteStatus;
};

export default withFavoriteStatus;
