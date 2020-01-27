import React from 'react';

import {
  connect,
  MyHead,
  WidgetContestantCompanies,
  LayoutMain as Layout,
  WidgetVideoWithEventInfo,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageError extends React.Component {
  static async getInitialProps({ res, err, store }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return {
      statusCode,
      preload: ['contestant_companies'],
      settings: settings,
    };
  }

  render() {
    const { statusCode } = this.props;

    return (
      <Layout>
        <MyHead />

        <WidgetVideoWithEventInfo />

        <WidgetContestantCompanies label="awards.contestants.categories.title" />
      </Layout>
    );
  }
}

export default connect()(PageError);
