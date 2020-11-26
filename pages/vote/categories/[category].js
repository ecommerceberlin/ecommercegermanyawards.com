import {
    connect,
    MyHead as Head,
    WidgetContestantCompanies,
   // WidgetSalesMap,
    WidgetVoteStatus,
    LayoutMain as Layout,
    MyTypography as Typography,
    Markdown,
    reduxWrapper,
    configure,
    tagsUsed
  } from 'eventjuicer-site-components';
  
  
  const settings = require('../../../settings').default;
  
  
  const PageVote  = ({category}) => {
  
      return (
    
          <div>
        
          <WidgetContestantCompanies
            intro={null
            //   <div style={{ width: '80%' }}>
            //     <WidgetVoteStatus max_votes={6} />
            //     <Typography template="benefitsText">
            //       <Markdown label="callforpapers.voting.general-rules.description" />
            //     </Typography>
            //   </div>
            }
            limit={350}
            filter={item => item && "profile" in item && "logotype_cdn" in item.profile       
            && item.profile.logotype_cdn.indexOf("http")>-1 
            //&& "avatar" in item 
            //&& item.avatar.indexOf('http') > -1 
            //&& "logotype" in item 
            //&& item.logotype.indexOf('http') > -1
            }
            keyword_source="profile.awards_category"
            keyword={category}
            label={
                category
                ? 'awards.contestants.list.title'
                : 'awards.contestants.categories.title'
            }
            show_votes={false}
            first={true}
            renderAs="table"
          />
        
         
         
          </div>
          
        ) 
  
  }
  
  
  export async function getStaticPaths() {
  
    const request = await fetch(`${settings.system.api}/contestant_companies`)
    const response = await request.json();
    const cats = tagsUsed(response.data, "awards_category")
    const paths = cats.map(c => ({params: {category: c}}))
  
    return {
        paths: paths,
        fallback: true 
      };
  }  
  
  
  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params = {}}) => {
  
    await configure(store, {
      settings : settings,
      preload : ["contestant_companies"]
    })
  
    const {category} = params;
  
    return {
      props : {
          category : category
      },
      revalidate: 1
    }
  
  })
  
  
  
  export default connect()(PageVote);
  