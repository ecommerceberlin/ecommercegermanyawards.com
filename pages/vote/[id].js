
import {
  connect,
  VoteWithLinkedIn,
  WidgetContestantCompanies,
  WidgetContestantPerson,
  WidgetVoteStatus,
  MyTypography as Typography,
  Markdown,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure,
  HeadVoteContestant,
  WidgetRegForm,
  ExternalSettings
} from 'eventjuicer-site-components';

import Head from 'next/head'
import dynamic from 'next/dynamic'

import settings from '../../settings'

import {Winners2021} from '../../src/Winners'
import {Categories} from '../../src/icons' 

const DynamicWidgetVoteWithLinkedIn = dynamic(
  () => import('../../proxy/WidgetVoteWithLinkedIn'),
  { ssr: false }
)

const RegForm = () => <WidgetRegForm wrapperProps={{
  label: "awards.ebereg.title",
  secondaryLabel: "awards.ebereg.description"
}} setting="https://ecommerceberlin.com/api/settings?path=visitor.register" />

const onVoted = (canVote) => (<>
  <WidgetVoteStatus max_votes={12} />
  {canVote ? <div><RegForm /><Categories label={null} secondaryLabel={null} /></div>: <RegForm />}</>)


const PageVote = ({id}) => (

<div>

<ExternalSettings urls={["https://ecommerceberlin.com/api/settings?path=visitor.register"]} />
<HeadVoteContestant id={id} template="ega2022_opengraph_template">{(data) => <Head>{data}</Head>}</HeadVoteContestant> 

       
<WidgetContestantPerson
  id={id}
  wrapperProps={{label: null, first: true}}
  vote={<DynamicWidgetVoteWithLinkedIn id={id} max_votes={12} onVoted={onVoted} />}
  status={<WidgetVoteStatus max_votes={12} />}
  show_votes={true}
/>

<Categories first dense={false} typography={undefined} secondaryTypography={undefined} wrapperProps={{label: "awards.voting.cta"}}/>

  <Winners2021 />

  <RegForm />

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
    preload: [resource],
    externalSettings: [
      // "https://ecommerceberlin.com/api/settings?path=visitor.register",
      // "https://ecommerceberlin.com/api/settings?path=visitor.benefits"
    ]
  })

  return {props : {
    id: "id" in params ? params.id : 0
  }, 
  revalidate: 60}
  
})


export default connect()(PageVote);
