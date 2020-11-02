import {
  connect,
  VoteWithLinkedIn,
  WidgetContestantCompanies,
  WidgetContestantCompany,
  WidgetVoteStatus,
  MyTypography as Typography,
  Markdown,
  WidgetVideoWithEventInfo,
  WidgetContestantCompaniesArchiveWinners,
  reduxWrapper,
  configure,
  HeadVote
} from 'eventjuicer-site-components';

import Head from 'next/head'

/*
  'err',
  'req',
  'res',
  'pathname',
  'query',
  'asPath',
  'AppTree',
  'store',
  'isServer'
*/

import settings from '../../settings'


const PageVote = ({id}) => (

<div>

          <HeadVote id={id}>{(data) => <Head>{data}</Head>}</HeadVote> 

       
       <WidgetContestantCompany
            id={id}
          
            //     vote={<VoteWithLinkedIn id={id} max_votes={10} disabled={true} />}
            // status={<WidgetVoteStatus />}
            //    show_votes={false}
          />
        


       <WidgetContestantCompaniesArchiveWinners />

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

  const resource = `contestant_companies/${params.id}`

  await configure(store, {
    settings: settings,
    preload: [resource, 'contestant_companies_all']
  })

  return {props : {
    id: "id" in params ? params.id : 0
  }, 
  revalidate: 1}
  
})


export default connect()(PageVote);
