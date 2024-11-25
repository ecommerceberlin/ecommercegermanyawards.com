import {
  connect,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  Wrapper,
  Markdown,
  EmbedSection,
  WidgetFaq,
} from 'eventjuicer-site-components';


// import {Timeline, Categories} from '../src/icons' 
import AllPartners from '../src/AllPartners'
import Jurors from '../src/Jurors'
import RegForm from '../src/RegForm'
import IntroRegformTimeline from '../src/IntroRegformTimeline'
import {Winners2024} from '../src/Winners'
import settings from '../settings';
import {Categories} from '../src/icons' 

const PageIndex = (props) => (

<div>

  <WidgetVideoWithEventInfo  />

  <Wrapper first label="awards.intro.title">
  <Markdown label="awards.intro.description" />
  </Wrapper>
  <RegForm />
  <Categories dense={false} typography={undefined} secondaryTypography={undefined} wrapperProps={{label: "awards.voting.cta"}}/>
  <IntroRegformTimeline />

  <Wrapper label="awards.infovideo.title">
    <EmbedSection data="https://youtu.be/ZJKWjBRlcHo" playerProps={{light: true}}/>
  </Wrapper>

  <Winners2024 />

  <Jurors limit={8} />

  <Wrapper label="awards.ceremony.title">
    <EmbedSection data="https://www.youtube.com/watch?v=ymXfBldjdKo&t" playerProps={{light: true}}/>
  </Wrapper>

  <WidgetPhotostream setting="awardsphotostream" />
  <WidgetFaq setting="contestant.faq" />
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