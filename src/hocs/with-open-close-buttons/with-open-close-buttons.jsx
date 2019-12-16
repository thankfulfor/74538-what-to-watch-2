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

      this.handleShowPlayerButtonClick = this.handleShowPlayerButtonClick.bind(this);
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

    handleShowPlayerButtonClick() {
      document.getElementsByTagName(`body`)[0].style.overflow = `hidden`;
      this.setState({isShown: true});
    }

    render() {
      return (
        <React.Fragment>
          <Button
            {...this.props}
            onShowPlayerButtonClick={this.handleShowPlayerButtonClick}
          />
          {this.state.isShown &&
            ReactDOM.createPortal(
                <div
                  aria-modal={true}
                  tabIndex={-1}
                  role="dialog">
                  <Popup
                    {...this.props}
                    onExitButtonClick={this.handleExitButtonClick}
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
