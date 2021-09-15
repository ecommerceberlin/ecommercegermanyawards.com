import {
  connect,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure,
  MyTypography,
  Markdown,
  WidgetPhotostream,
  WidgetRegForm,
  // YouTube
} from 'eventjuicer-site-components';
 
import AllPartners from '../src/AllPartners'
import settings from '../settings';
import {Winners2021} from '../src/Winners'

const PageJury = (props) => (<div>
 
<WidgetPhotostream first setting="awardsphotostream" />
<WidgetRegForm  
  setting="awards.attend_a_party"
  right={
    <div style={{marginTop: 30, marginLeft: 10}}>
    <MyTypography template="subtitle1" label="party.register.title" /> 
    <Markdown label="party.register.description" />
    </div>
  }
  summary={<div>asd</div>}
/>
{/* <YouTube url='https://www.youtube.com/watch?v=pLfnx7B3BBA' /> */}
<Winners2021 />
<AllPartners />
<WidgetVideoWithEventInfo />
</div>)
 
export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    preload: []
  })

  return {
    props: {},
    revalidate: 1
  }
  
})

export default connect()(PageJury);