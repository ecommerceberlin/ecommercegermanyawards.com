import {
  connect,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

import settings from '../settings'
import AllWinners from '../src/Winners'

const PageWinners = (props) => (

  <div>
   
      <AllWinners  />

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


export default connect()(PageWinners);
