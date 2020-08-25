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
  configure
} from 'eventjuicer-site-components';

// import FeaturedExhibitors from '../src/FeaturedExhibitors';
//import FeaturedPresenters from '../src/FeaturedPresenters';

import settings from '../settings';

const PageIndex = (props) => (

  <div>
     
        <WidgetVideoWithEventInfo />

        {/* <WidgetContestantCompanies label="awards.contestants.categories.title" /> */}

        <WidgetJurors
          label="awards.jury.title"
          secondaryLabel="awards.jury.description"
          disableTemps={false}
          limit={100}
          filter={null}
          bio={false}
          minToShow={1}
        />

        <WidgetContestantCompaniesArchiveWinners />


     

        {/* <Wrapper label="awards.timeline.title">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,w_1000/v1572367319/Awards%20website/timeline2.png"
              alt=""
            />
          </div>
        </Wrapper>

        <Wrapper label="awards.winners.archive.title">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,w_1000/v1572365340/Awards%20website/winners.jpg"
              alt=""
            />
          </div>
        </Wrapper>
 */}



        {/* 
        
       

        <WidgetFeaturedCompanies />

        <WidgetSalesMap
          label="exhibitors.map.title2"
          secondaryLabel="exhibitors.map.opensales"
        />

        <FeaturedPresenters bio={false} />

        <WidgetVisitor
          label="visitors.register"
          secondaryLabel="event.parties"
        />

        <WidgetRoleButtons first={true} /> 

         <FeaturedExhibitors /> 

       <WidgetVisitor
          label="visitors.register_alt"
          secondaryLabel="event.parties"
        /> 

        <WidgetVideoWithReviews overlay="black" /> 
      
      */}

        {/* <WidgetAllExhibitorsColumnList /> */}

        {/* <FsVideo
          background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
          videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"
        /> */}

        {/* <WidgetVisitor
          label="visitors.register"
          secondaryLabel="event.parties"
        />

        */}

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
  
})



export default connect()(PageIndex);



