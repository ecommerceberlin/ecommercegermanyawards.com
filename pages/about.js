import {
    connect,
    Wrapper,
    reduxWrapper,
    configure,
    MyTypography,
    TwoColsLayout as Section,
    WidgetGridWithImages,
    WidgetVideoWithEventInfo
  } from 'eventjuicer-site-components';
 
  import {Timeline, WhyParticipate} from '../src/icons' 

  import settings from '../settings';
  
  const PageAbout = (props) => (

    <div>
  
    <Wrapper label="awards.about.title" first>

    <Section

left={

  <>
    <div style={{marginBottom: 30}}>
    <MyTypography template="subtitle1">
    In 2022 the E-commerce Berlin Expo will take place for the 6th time. 
    When we chose to expand the proven Expo formula back in 2018, 
    we decided to add the Networking Party a day before the actual event. 
    </MyTypography>
    </div>  
    <div style={{marginBottom: 30}}>
    <MyTypography template="subtitle1" >
    We immediately knew that an additional evening spent with the industry leaders would be highly valuable for all participants. 
    Since then, it has become an awaiting tradition for e-commerce professionals all over Europe, and over 2000 guests had a chance to celebrate such an evening with us. 
    </MyTypography>
    </div>
    <MyTypography template="subtitle1" >
    The Party consists of two parts: a pure Networking part and the E-commerce Germany Awards Ceremony.
    </MyTypography>
  </>

}
    right={
      <Timeline />
    }     
    
/>
 
</Wrapper>

<WidgetGridWithImages setting="awards.about" />

<WhyParticipate />

<WidgetVideoWithEventInfo/>

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
  
  
  
  export default connect()(PageAbout);
  
  
  
  