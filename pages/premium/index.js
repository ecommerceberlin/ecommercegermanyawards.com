import {
  connect,
  reduxWrapper,
  configure,
  WidgetPremiumTickets,
  WidgetVideoWithEventInfo
} from 'eventjuicer-site-components';

import settings from '../../settings';
import AllPartners from '../../src/AllPartners'

const PagePremium = () => (
    <>
    <WidgetPremiumTickets label="resources.awards.premium.title"  />
    <WidgetVideoWithEventInfo/>
    <AllPartners />

    </>
)

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params }) => {

  await configure(store, {
    settings : settings,
    preload: ['tickets', 'ticketgroups'],
  })

  return {
    props : {
       
    },
    revalidate: 1
  }

})

export default connect()(PagePremium);
