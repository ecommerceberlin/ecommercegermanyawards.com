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
  WidgetContestantCompaniesArchiveWinners,
  reduxWrapper,
  configure
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

import settings from '../../settings'


const PageVote = (props) => (

  <div>

      <WidgetContestantCompaniesArchiveWinners />
      <WidgetVideoWithEventInfo />


        {/* <WidgetContestantCompanies
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
        /> */}


  </div>

)



export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    preload: ['contestant_companies', 'contestant_companies_all']
  })

  return {
    props: {}, 
    revalidate: 1
  }
  
})


export default connect()(PageVote);
