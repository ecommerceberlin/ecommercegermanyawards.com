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
import {Winners2023} from '../src/Winners'

const PageJury = (props) => (<div>

{/* <WidgetRegForm
  setting="awards.become_a_juror"
  right={
    <div style={{marginTop: 30, marginLeft: 10}}>
    <MyTypography template="subtitle1" label="juror.register.title" /> 
    <Markdown label="juror.register.description" />
    </div>
  }
  summary={<div>asd</div>}
/> */}
<Jurors limit={100} />
<WidgetPhotostream setting="awardsphotostream" />
<Winners2023 />
<AllPartners />
<WidgetVideoWithEventInfo />
</div>)
 
 
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    preload: ['jurors']
  })
  
})



export default connect()(PageJury);



