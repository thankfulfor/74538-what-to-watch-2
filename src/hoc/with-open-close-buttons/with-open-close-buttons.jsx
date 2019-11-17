import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';

const withOpenCloseButtons = (Popup, Button) => {
  class WithOpenCloseButtons extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isShown: false,
        isFullScreen: false,
        isPlaying: false
      };

      this.showPlayerButtonClickHandler = this.showPlayerButtonClickHandler.bind(this);
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

    showPlayerButtonClickHandler() {
      document.getElementsByTagName(`body`)[0].style.overflow = `hidden`;
      this.setState({isShown: true});
    }

    render() {
      return (
        <React.Fragment>
          <Button
            {...this.props}
            onShowPlayerButtonClick={this.showPlayerButtonClickHandler}
          />
          {this.state.isShown &&
            ReactDOM.createPortal(
                <div
                  aria-modal={true}
                  tabIndex={-1}
                  role="dialog">
                  <Popup
                    {...this.props}
                    onExitButtonClick={this.exitButtonClickHandler}
                  />
                </div>,
                document.body
            )
          }
        </React.Fragment>
      );
    }
  }

  WithOpenCloseButtons.propTypes = {};

  return WithOpenCloseButtons;
};

export default withOpenCloseButtons;
