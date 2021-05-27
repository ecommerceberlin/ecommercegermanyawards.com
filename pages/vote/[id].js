
import {
  connect,
  VoteWithLinkedIn,
  WidgetContestantCompanies,
  WidgetContestantPerson,
  WidgetVoteStatus,
  MyTypography as Typography,
  Markdown,
  WidgetVideoWithEventInfo,
  WidgetContestantCompaniesArchiveWinners,
  WidgetContestantCompaniesWinners,
  reduxWrapper,
  configure,
  HeadVoteContestant
} from 'eventjuicer-site-components';

import Head from 'next/head'
import dynamic from 'next/dynamic'

import settings from '../../settings'


const DynamicWidgetVoteWithLinkedIn = dynamic(
  () => import('../../proxy/WidgetVoteWithLinkedIn'),
  { ssr: false }
)


const PageVote = ({id}) => (

<div>

  
<HeadVoteContestant id={id} template="ega2021_opengraph_template">{(data) => <Head>{data}</Head>}</HeadVoteContestant> 
       
<WidgetContestantPerson
  id={id}
  wrapperProps={{label: null, first: true}}
  // vote={<DynamicWidgetVoteWithLinkedIn id={id} max_votes={10} />}
  status={<WidgetVoteStatus max_votes={10} />}
  show_votes={false}
/>



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
    filter={item => 'product_name' in item && item.product_name.length > 2 && 'logotype' in item && item.logotype.indexOf('http') > -1 && 'featured' in item && item.featured == '1'}
    keyword_source="awards_category"
    keyword={keyword}
    label={ keyword ? 'awards.contestants.list.title' : 'awards.contestants.categories.title' }
    show_votes={true}
  /> */}

  <WidgetContestantCompaniesWinners />

  <WidgetContestantCompaniesArchiveWinners />

  <WidgetVideoWithEventInfo />

</div>


)

export const getStaticPaths = () => {

  return {paths: [], fallback: "blocking"}
}

export const getStaticProps = reduxWrapper.getStaticProps(async ({ params, store }) => {

  const resource = `contestant_companies/${params.id}`

  await configure(store, {
    settings: settings,
    preload: [resource]
  })

  return {props : {
    id: "id" in params ? params.id : 0
  }, 
  revalidate: 5}
  
})


export default connect()(PageVote);
