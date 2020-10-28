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

import NoteAdd from '@material-ui/icons/NoteAdd'
import HowToVote from '@material-ui/icons/HowToVote'
import Public from '@material-ui/icons/Public'
import Mic from '@material-ui/icons/Mic'
import Assessment from '@material-ui/icons/Assessment'

import settings from '../settings';

const PageIndex = (props) => (


  <div>

  <WidgetVideoWithEventInfo />


  <Wrapper first label="cfp.hello.title">
  
  <Section 
   
   left={  <div style={{marginTop: '5rem'}}>

     <MyTypography template="h4" label="cfp.hello.submit" />
    
     <MyTypography template="subtitle1" label="cfp.hello.needs" />

     <Markdown label="cfp.hello.details" />


     </div> }
   right={ 
     <WidgetVerticalTimeline 
     setting="awardstimeline" 
     icons={{
       NoteAdd: <NoteAdd />,
       HowToVote: <HowToVote />,
       Public: <Public />,
       Mic: <Mic />,
       Assessment: <Assessment />
     }} />
   }

 leftCentered={true}

 />


 </Wrapper>


<WidgetPhotostream setting="cfpphotostream" />

<WidgetSpeaking

 options={{
   "categories": [
     'conversion',
     'marketing',
     'logistics',
     'payments',
     'it',
     'trends',
   ]
 }} 

 right={
   <>
   <MyTypography template="subtitle1" label="presenters.contest-rules.title" /> 
   <Markdown label="presenters.contest-rules.description" />
   </>
 }

 summary={<div>asd</div>}

 />




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


   <WidgetFaq 
       items={[
       {
         label: 'exhibitor-status',
         important: true,
         buttons: [],
       },
       {
     //    baseLabel: 'exhibitors.faq.before_event',
         label: 'fee',
       },
       { label: 'submission-limits' },
       { label: 'co-presenter' },
       { label: 'ranking' },
       { label: 'fair-play' },
       {
       //  baseLabel: 'cfp.faq.before_event',
         label: 'stage',
       },
]} />


<WidgetIconGrid setting="speakers.benefits" icons={{

}}/>


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



