import {
  connect,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  Wrapper,

  EmbedSection
} from 'eventjuicer-site-components';


import {Timeline, Categories} from '../src/icons' 
import AllPartners from '../src/AllPartners'
import Jurors from '../src/Jurors'
import RegForm from '../src/RegForm'
import IntroRegformTimeline from '../src/IntroRegformTimeline'

import {Winners2022} from '../src/Winners'
import settings from '../settings';

const PageIndex = (props) => (

<div>

  <WidgetVideoWithEventInfo  />

  {/* <Wrapper label="awards.hello.title"><Timeline /></Wrapper> */}

  <Categories dense={false} typography={undefined} secondaryTypography={undefined} wrapperProps={{label: "awards.voting.cta"}}/>

  <IntroRegformTimeline />


  <Jurors limit={8} />

  <Winners2022 />

  <Wrapper label="awards.ceremony.title">
    <EmbedSection data="https://www.youtube.com/watch?v=RNK3s3IquCQ" playerProps={{light: true}}/>
  </Wrapper>

  <WidgetPhotostream setting="awardsphotostream" />
  <AllPartners />

</div>

)
 
 
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    preload: []
  })

  
  
})



export default connect()(PageIndex);