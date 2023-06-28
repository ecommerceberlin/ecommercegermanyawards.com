import {
    connect,
    Wrapper,
    reduxWrapper,
    configure,
    MyTypography,
    TwoColsLayout as Section,
    WidgetGridWithImages,
    WidgetVideoWithEventInfo,
    Markdown
  } from 'eventjuicer-site-components';
 
  import {Timeline, WhyParticipate} from '../src/icons' 

  import settings from '../settings';
  
  const PageAbout = (props) => (

    <div>
  <WidgetGridWithImages setting="awards.about" />

  <WhyParticipate />

    <Wrapper label="awards.about.title" first>

    <Section

left={

    <Markdown label="awards.about.body" />
   
  
}
    right={
      <Timeline />
    }     
    
/>
 
</Wrapper>

<WidgetVideoWithEventInfo/>

</div>
  
    
  )
   
  
 
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings: settings,
      preload: ['contestant_companies_all']
    })

    
  })
  
  
  
  export default connect()(PageAbout);
  
  
  
  