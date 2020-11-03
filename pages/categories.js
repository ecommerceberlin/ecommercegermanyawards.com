import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetContestantCompaniesArchiveWinners,
  WidgetJurors,
  Wrapper,
  reduxWrapper,
  configure,
  TwoColsLayout as Section,
  MyTypography,
  Markdown,
  WidgetVerticalTimeline,
  WidgetPhotostream,
  WidgetRegForm,
  WidgetFaq,
  WidgetIconGrid
} from 'eventjuicer-site-components';


import {Categories, Timeline} from '../src/icons' 
import AllPartners from '../src/AllPartners'
import settings from '../settings';


const PageCategories = (props) => (

<div>

<Categories first dense={false} typography={undefined} secondaryTypography={undefined} />

<WidgetRegForm

  setting="contestant.register"
  options={{
  "categories": [
    'sales_generation',
    'communication',
    'internationalization',
    'logistics',
    'platform',
    'payment',
    'analytics',
    'agency',
    'infrastructure',
    'innovation'
  ]
  }} 
  right={
    <>
    <MyTypography template="subtitle1" label="awards.rules-summary.title" />  
    <Markdown label="awards.rules-summary.body" />
    </>
  }
 summary={<div>asd</div>}
 />

  <Wrapper first label="awards.hello.title">
  
  <Section 
   
   left={  
      <div style={{marginTop: '5rem'}}>
      <MyTypography template="h4" label="awards.hello.submit" />
      <MyTypography template="subtitle1" label="awards.hello.needs" />
      <Markdown label="awards.hello.details" />
      </div> 
    }
   right={ 
      <Timeline />
   }
 leftCentered={true}
/>


 </Wrapper>


<WidgetFaq setting="contestant.faq" />

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



export default connect()(PageCategories);



