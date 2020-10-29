import {
  connect,
  MyHead as Head,
  LayoutMain as Layout,
  WidgetVideoWithEventInfo,
  WidgetContestantCompaniesArchiveWinners,
  WidgetPartners,
  WidgetJurors,
  Wrapper,
  reduxWrapper,
  configure,
  TwoColsLayout as Section,
  MyTypography,
  Markdown,
  WidgetVerticalTimeline,
  WidgetPhotostream,
  WidgetSpeaking,
  WidgetFaq,
  WidgetIconGrid
} from 'eventjuicer-site-components';

import * as Icons from '../src/icons' 

import settings from '../settings';

const PageIndex = (props) => (


  <div>



  <Wrapper first label="awards.hello.title">
  
  <Section 
   
   left={  <div style={{marginTop: '5rem'}}>

     <MyTypography template="h4" label="awards.hello.submit" />
    
     <MyTypography template="subtitle1" label="awards.hello.needs" />

     <Markdown label="awards.hello.details" />


     </div> }
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

 leftCentered={true}

 />


 </Wrapper>


<WidgetSpeaking

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


<WidgetIconGrid setting="contestant.categories" icons={{

}}/>



   <WidgetFaq 
      label="awards.faq.title"
      secondaryLabel={null}
      baseLabel="awards.faq"
       items={[
       {
         label: 'categories'
       },
       {
         label: 'timeline',
       },
       { label: 'fee' },
       { label: 'limits' },
       { label: 'status' },
       { label: 'abuse' },
       { label: 'sponsorship'},
]} />




<WidgetPhotostream setting="awardsphotostream" />


   {/* <div>

   Why speak at the E-commerce Berlin Expo?
Over 7,000 e-commerce professionals
90% average session capacity
3,000+ CEOs, Directors & Heads of Departments
Relevant visitors, 65% of whom come from retailers & brands


   </div> */}

   {/*

Website Conversion Rate
Marketing in E-commerce
eLogistics / International Expansion
ePayments
IT for E-commerce
New Developments in E-commerce

*/}

 
   

   <WidgetJurors
          label="awards.jury.title"
          secondaryLabel="awards.jury.description"
          disableTemps={false}
          limit={100}
          filter={null}
          bio={false}
          minToShow={1}
        />




   {/* <WidgetPresentersAll 
     filter={(item)=> parseInt(item.featured_cfp) } limit="24" 
     label="cfp.featured_presenters"
   /> */}

      {/* <WidgetContestantCompanies label="awards.contestants.categories.title" /> */}


     <WidgetContestantCompaniesArchiveWinners />


     <WidgetPartners
          label="partners.networking.title"
          filter={item =>
            item['scopes(deprecated)'].indexOf('networking') > -1 &&
            item.logotype.indexOf('cloudinary') > -1
          }
          limit={50}
          center={true}
        />

        <WidgetPartners
          label="partners.media.title"
          filter={item =>
            item['scopes(deprecated)'].indexOf('media') > -1 &&
            item.logotype.indexOf('cloudinary') > -1
          }
          limit={50}
        />

        <WidgetPartners
          label="partners.community.title"
          filter={item =>
            item['scopes(deprecated)'].indexOf('community') > -1 &&
            item.logotype.indexOf('cloudinary') > -1
          }
          limit={50}
        />

        <WidgetPartners
          label="partners.communication.title"
          filter={item =>
            item['scopes(deprecated)'].indexOf('communication') > -1 &&
            item.logotype.indexOf('cloudinary') > -1
          }
          center={true}
          limit={50}
        />



            <WidgetVideoWithEventInfo />



</div>

  
)
 

 


 // static async getInitialProps({ query, isServer, store }) {
  //   return {
  //     preload: ['contestant_companies'],
  //     settings: settings,
  //     //    load : ["bookingmap", "formdata", "ticketgroups"]
  //   };
  // }


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



