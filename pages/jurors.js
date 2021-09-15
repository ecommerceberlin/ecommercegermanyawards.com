import {
  connect,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure,
  MyTypography,
  Markdown,
  WidgetPhotostream,
  WidgetRegForm
} from 'eventjuicer-site-components';

import AllPartners from '../src/AllPartners'
import Jurors from '../src/Jurors'
import settings from '../settings';
import {Winners2021} from '../src/Winners'

const PageJury = (props) => (<div>
<Jurors />
<WidgetRegForm
  setting="awards.become_a_juror"
  right={
    <div style={{marginTop: 30, marginLeft: 10}}>
    <MyTypography template="subtitle1" label="juror.register.title" /> 
    <Markdown label="juror.register.description" />
    </div>
  }
  summary={<div>asd</div>}
/>
<WidgetPhotostream setting="awardsphotostream" />
<Winners2021 />
<AllPartners />
<WidgetVideoWithEventInfo />
</div>)
 
 
export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    preload: ['jurors']
  })

  return {
    props: {},
    revalidate: 1
  }
  
})



export default connect()(PageJury);



