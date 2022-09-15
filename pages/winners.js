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


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    preload: ['contestant_companies_all']
  })


  
})


export default connect()(PageWinners);
