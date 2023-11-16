import {
  connect,
  reduxWrapper,
  configure,
  WidgetFaq
} from 'eventjuicer-site-components';


import {Categories} from '../src/icons' 
import AllPartners from '../src/AllPartners'
import Intro from '../src/Intro'
import settings from '../settings';
import RegForm from '../src/RegForm'

const PageCategories = (props) => (

<div>

  <Categories first dense={false} typography={undefined} secondaryTypography={undefined} />

  <Intro />

  <RegForm />

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



export default connect()(PageCategories);



