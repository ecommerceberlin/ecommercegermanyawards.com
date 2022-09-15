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

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload: ['tickets', 'ticketgroups'],
  })


})

export default connect()(PagePremium);
