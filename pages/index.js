import {
  connect,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  Wrapper,

  EmbedSection
} from 'eventjuicer-site-components';


// import {Timeline, Categories} from '../src/icons' 
import AllPartners from '../src/AllPartners'
import Jurors from '../src/Jurors'
import RegForm from '../src/RegForm'
import IntroRegformTimeline from '../src/IntroRegformTimeline'
import {Winners2023} from '../src/Winners'
import settings from '../settings';
import {Categories} from '../src/icons' 

const PageIndex = (props) => (

<div>

  <WidgetVideoWithEventInfo  />

  {/* <Wrapper label="awards.hello.title"><Timeline /></Wrapper> */}

  <IntroRegformTimeline />

  <RegForm />

  <Categories dense={false} typography={undefined} secondaryTypography={undefined} wrapperProps={{label: "awards.voting.cta"}}/>


  <Jurors limit={8} />

  <Winners2023 />

  <Wrapper label="awards.ceremony.title">
    <EmbedSection data="https://www.youtube.com/watch?v=xCooH-tbgto" playerProps={{light: true}}/>
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