import {
  connect,
  MyHead as Head,
  VoteWithLinkedIn,
  WidgetContestantCompanies,
  WidgetContestantCompany,
  WidgetVoteStatus,
  LayoutMain as Layout,
  MyTypography as Typography,
  Markdown,
  WidgetVideoWithEventInfo,
} from 'eventjuicer-site-components';

/*
  'err',
  'req',
  'res',
  'pathname',
  'query',
  'asPath',
  'AppTree',
  'store',
  'isServer'
*/

const settings = require('../settings').default;

class PageVote extends React.Component {
  static async getInitialProps(props) {
    const { query, asPath } = props;

    return {
      preload: ['contestant_companies'],
      query: query,
      asPath: asPath,
      settings: settings,
    };
  }

  render() {
    const { query, asPath } = this.props;
    const { id, keyword } = query;

    return (
      <Layout>
        <Head />

        {id && (
          <WidgetContestantCompany
            id={id}
            asPath={asPath}
            vote={<VoteWithLinkedIn id={id} max_votes={10} disabled={true} />}
            status={<WidgetVoteStatus />}
            show_votes={true}
          />
        )}

        <WidgetContestantCompanies
          intro={
            <div style={{ width: '80%' }}>
              <WidgetVoteStatus />
              <Typography template="benefitsText">
                <Markdown label="awards.contestants.voting-rules.description" />
              </Typography>
            </div>
          }
          limit={350}
          filter={item =>
            'product_name' in item &&
            item.product_name.length > 2 &&
            'logotype' in item &&
            item.logotype.indexOf('http') > -1 &&
            'featured' in item &&
            item.featured == '1'
          }
          keyword_source="awards_category"
          keyword={keyword}
          label={
            keyword
              ? 'awards.contestants.list.title'
              : 'awards.contestants.categories.title'
          }
          show_votes={true}
        />

        <WidgetVideoWithEventInfo />
      </Layout>
    );
  }
}

export default connect()(PageVote);
