import {
  connect,
  MyHead as Head,
  VoteWithLinkedIn,
  WidgetContestantCompanies,
  WidgetContestantCompany,
  WidgetVoteStatus,
  LayoutMain as Layout,
  MyTypography as Typography,
  Markdown,
  WidgetVideoWithEventInfo,
  WidgetContestantCompaniesWinners,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';


import settings from '../../settings'


const PageVote = ({keyword}) => (

<div>
       
       

       <WidgetContestantCompaniesWinners />

        {/* <WidgetContestantCompanies
          intro={
            <div style={{ width: '80%' }}>
              <WidgetVoteStatus />
              <Typography template="benefitsText">
                <Markdown label="awards.contestants.voting-rules.description" />
              </Typography>
            </div>
          }
          limit={350}
          filter={item =>
            'product_name' in item &&
            item.product_name.length > 2 &&
            'logotype' in item &&
            item.logotype.indexOf('http') > -1 &&
            'featured' in item &&
            item.featured == '1'
          }
          keyword_source="awards_category"
          keyword={keyword}
          label={
            keyword
              ? 'awards.contestants.list.title'
              : 'awards.contestants.categories.title'
          }
          show_votes={true}
        /> */}

        <WidgetVideoWithEventInfo />

</div>


)

export const getStaticPaths = () => {

return {paths: [], fallback: true}
}

export const getStaticProps = reduxWrapper.getStaticProps(async ({ params, store }) => {

  await configure(store, {
    settings: settings,
    preload: ['contestant_companies']
  })

  return {props : {
    keyword: "keyword" in params ? params.keyword : ""
  }, 
  revalidate: 1}
  
})


export default connect()(PageVote);
