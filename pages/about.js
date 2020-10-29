import {
    connect,
    MyHead as Head,
    Wrapper,
    reduxWrapper,
    configure,
    resizeCloudinaryImage,
    MyTypography,
    WidgetVerticalTimeline,
    TwoColsLayout as Section
  } from 'eventjuicer-site-components';
 
  import * as Icons from '../src/icons' 

  import settings from '../settings';
  
  const PageIndex = (props) => (

    <div>
  

    
    <Wrapper first>

    <Section

    left={<>

  <div style={{marginBottom: 20}}>

       <MyTypography template="h4">
       E-commerce Germany Awards 2021 
       
       </MyTypography>

    </div>
    
       <MyTypography template="subtitle1">
    In 2021 the E-commerce Berlin Expo will take place for the 6th time. When we chose to expand the proven Expo formula back in 2018, we decided to add the Networking Party a day before the actual event. 
    </MyTypography>

    <MyTypography template="subtitle1" >
    We immediately knew that an additional evening spent with the industry leaders would be highly valuable for all participants. Since then, it has become an awaiting tradition for e-commerce professionals all over Europe, and over 2000 guests had a chance to celebrate such an evening with us. 
    </MyTypography>


    <MyTypography template="subtitle1" >
    The Party consists of two parts: a pure Networking part and the E-commerce Germany Awards Ceremony.
    </MyTypography>
    </>}
    right={

      <WidgetVerticalTimeline 
      setting="awardstimeline" 
      icons={{
        NoteAdd: <Icons.NoteAdd />,
        HowToVote: <Icons.HowToVote />,
        Public: <Icons.Public />,
        Mic: <Icons.Mic />,
        Assessment: <Icons.Assessment />
      }} />
 
 
    } 
    
    
    />

 
 
    </Wrapper>




<Wrapper>
    {[
      {
        image:
          'https://res.cloudinary.com/eventjuicer/image/upload/v1604003805/ega/ega_2021_numberOfContestVoters.svg',
      },
      {
        image:
          'https://res.cloudinary.com/eventjuicer/image/upload/v1604003805/ega/ega_2021_awardsCeremonyGuests.svg',
      },
      {
        image:
          'https://res.cloudinary.com/eventjuicer/image/upload/v1604003805/ega/ega_2021_numberOfContestParticipants.svg',
      },
      {
        image:
          'https://res.cloudinary.com/eventjuicer/image/upload/v1604003805/ega/ega_2021_promotion.svg',
      },
     
    ].map(item => (
      <img
        key={item.image}
        src={resizeCloudinaryImage(item.image, 1500, 1000)}
        style={{
          width: '100%',
          margin: '0 auto',
        }}
      />
    ))}
  </Wrapper>


   

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
  
  
  
  