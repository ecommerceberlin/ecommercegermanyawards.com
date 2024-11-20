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

<Wrapper>
  <Wrapper first label="awards.about.title">
  <Markdown label="awards.about.description" />
  </Wrapper>
    {[
      {
        image:
          'https://res.cloudinary.com/eventjuicer/image/upload/v1732103069/EGA_2025_-_01.svg'
              
      },

      {
        image:
          'https://res.cloudinary.com/eventjuicer/image/upload/v1732103071/EGA_2025_-_02.svg',
                 
      },
                
      {
        image:
          'https://res.cloudinary.com/eventjuicer/image/upload/v1732103117/EGA_2025_-_03.svg',
      },
             
      {
        image:
          'https://res.cloudinary.com/eventjuicer/image/upload/v1732103105/EGA_2025_-_04.svg',
      },

      {
        image:
          'https://res.cloudinary.com/eventjuicer/image/upload/v1732103068/EGA_2025_-_05.svg',
      },
    ].map(item => (
      <img
        key={item.image}
        src={item.image}
        style={{
          width: '100%',
          maxWidth: 1200,
          display: 'block', 
          margin: '0 auto',
        }}
      />
    ))}

  </Wrapper>
  {/* <WidgetGridWithImages setting="awards.about" /> */}

  {/* <WhyParticipate /> */}

    {/* <Wrapper label="awards.about.title" first> */}

    {/* <Section */}

{/* left={ */}

    {/* <Markdown label="awards.about.body" /> */}
   
  
{/* } */}
    {/* right={ */}
      {/* <Timeline /> */}
    {/* }      */}
    
{/* /> */}
 
{/* </Wrapper> */}

{/* <WidgetVideoWithEventInfo/> */}

</div>
  
    
  )
   
  
 
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings: settings,
      preload: ['contestant_companies_all']
    })

    
  })
  
  
  
  export default connect()(PageAbout);
  
  
  
  