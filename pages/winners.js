import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetContestantCompaniesArchiveWinners,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

import settings from '../settings'

const PageVote = (props) => (

  <div>

      <WidgetContestantCompaniesArchiveWinners  />
      <WidgetVideoWithEventInfo />
  </div>

)


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    preload: ['contestant_companies_all']
  })

  return {
    props: {}, 
    revalidate: 10
  }
  
})


export default connect()(PageVote);
