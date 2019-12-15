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

      this.showPlayerButtonClickHandle = this.showPlayerButtonClickHandle.bind(this);
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

    showPlayerButtonClickHandle() {
      document.getElementsByTagName(`body`)[0].style.overflow = `hidden`;
      this.setState({isShown: true});
    }

    render() {
      return (
        <React.Fragment>
          <Button
            {...this.props}
            onShowPlayerButtonClick={this.showPlayerButtonClickHandle}
          />
          {this.state.isShown &&
            ReactDOM.createPortal(
                <div
                  aria-modal={true}
                  tabIndex={-1}
                  role="dialog">
                  <Popup
                    {...this.props}
                    onExitButtonClick={this.exitButtonClickHandle}
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
