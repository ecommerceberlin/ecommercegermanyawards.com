import {
  connect,
  WidgetVideoWithEventInfo,
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
import {Winners2021} from '../src/Winners'

const PageIndex = (props) => (

<div>

  <RegForm first />
  <Intro />
  <Categories />
  <WidgetVideoWithEventInfo />
  <WidgetFaq setting="contestant.faq" />
  <Jurors />
  {/* <Winners2021 /> */}
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