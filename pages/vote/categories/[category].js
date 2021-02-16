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
            intro={
              <div style={{ width: '80%' }}>
                <WidgetVoteStatus max_votes={10} />
                <Typography template="benefitsText">
                  <Markdown label="awards.contestants.voting-rules.description" />
                </Typography>
              </div>
            }
            limit={350}
            filter={
            item => item && "profile" in item &&
              "logotype" in item.profile && 
              item.profile.logotype.indexOf("http")>-1 && 
              "logotype_cdn" in item.profile && 
              item.profile.logotype_cdn.indexOf("http")>-1 
            }
            keyword_source="profile.awards_category"
            keyword={category}
            label='awards.contestants.list.title'
            show_votes={true}
            first={true}
            renderAs="table"
            resolveTitle={function(item){ return item.profile.cname2 } }
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
  
  
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    await configure(props, {
      settings : settings,
      preload : ["contestant_companies"]
    })
  
    const {category} = props.params;
  
    return {
      props : {
          category : category
      },
      revalidate: 1
    }
  
  })
  
  
  
  export default connect()(PageVote);
  