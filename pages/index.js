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
import {Winners2021} from '../src/Winners'
import settings from '../settings';

const PageIndex = (props) => (

<div>

  <WidgetVideoWithEventInfo  />

  <Categories first dense={false} typography={undefined} secondaryTypography={undefined} wrapperProps={{label: "awards.voting.cta"}}/>

 <Wrapper label="awards.hello.title"><Timeline /></Wrapper>

  {/* <RegForm /> */}

  <Jurors limit={8} />

  {/* <Winners2021 /> */}

  <Wrapper label="awards.ceremony.title">
    <EmbedSection data="https://youtu.be/bAJOeLNOhss" playerProps={{light: true}}/>
  </Wrapper>

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