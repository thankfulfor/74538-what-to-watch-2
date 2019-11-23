import * as React from 'react';
import PropTypes from 'prop-types';

export class PlayButton extends React.PureComponent {

  render() {
    const {onShowPlayerButtonClick} = this.props;

    return (
      <button onClick={onShowPlayerButtonClick} className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play" />
        </svg>
        <span>Play</span>
      </button>
    );
  }
}

PlayButton.propTypes = {
  onShowPlayerButtonClick: PropTypes.func.isRequired,
};

