import React, {PureComponent} from 'react';

import {tabNames} from '../../utils/constants.js';

const withActiveTab = (Tab, TabContent1, TabContent2, TabContent3) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        tabToShow: tabNames[0]
      };

      this.tabClickHandler = this.tabClickHandler.bind(this);
    }

    tabClickHandler(evt) {
      evt.preventDefault();
      this.setState({tabToShow: evt.target.textContent});
    }

    render() {
      return (
        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">
            <Tab {...this.props} tabToShow={this.state.tabToShow} onTabClick={this.tabClickHandler} />
          </nav>
          {this.state.tabToShow === tabNames[0] && <TabContent1 {...this.props} />}
          {(this.state.tabToShow === tabNames[1] && TabContent2) && <TabContent2 {...this.props} />}
          {(this.state.tabToShow === tabNames[2] && TabContent3) && <TabContent3 {...this.props} />}
        </div>
      );
    }

  }

  WithActiveTab.propTypes = {};

  return WithActiveTab;
};

export default withActiveTab;
