import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetContestantCompaniesArchiveWinners,
  WidgetContestantCompaniesWinners,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  WidgetFaq
} from 'eventjuicer-site-components';


import {Categories} from '../src/icons' 
import AllPartners from '../src/AllPartners'
import RegForm from '../src/RegForm'
import Intro from '../src/Intro'
import Jurors from '../src/Jurors'

import settings from '../settings';

const PageIndex = (props) => (

<div>

  <Intro first />

  <RegForm />

  <Categories />

  <WidgetVideoWithEventInfo />

  <WidgetFaq setting="contestant.faq" />

  <Jurors />

  <WidgetContestantCompaniesWinners />
  <WidgetContestantCompaniesArchiveWinners />

  <WidgetPhotostream setting="awardsphotostream" />

  <AllPartners />

</div>

)
 
 
export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    preload: ['contestant_companies_all']
  })

  return {
    props: {},
    revalidate: 1
  }
  
})



export default connect()(PageIndex);