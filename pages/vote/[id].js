
import {
  connect,
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
  ExternalSettings,
  HasTicketWithRole
} from 'eventjuicer-site-components';

import Head from 'next/head'
import dynamic from 'next/dynamic'

import settings from '../../settings'

import {Winners2023} from '../../src/Winners'
import {Categories} from '../../src/icons' 

const DynamicWidgetVoteWithLinkedIn = dynamic(
   () => import('../../proxy/WidgetVoteWithLinkedIn'),
   { ssr: false }
)

const RegForm = () => <HasTicketWithRole>{(check) => (<WidgetRegForm wrapperProps={{
  label: "awards.ebereg.title",
  secondaryLabel: "awards.ebereg.description"
  }}

  options={{
    participant_type: [
        "retailer_wholesaler",
        "brand_manufacturer",
        "service_provider",
        "consultant",
        "developer",
        "media",
        "student"
    ],
    company_role: [
        "student",
        "entry",
        "manager",
        "professional",
        "head_of_department",
        "director",
        "c_level",
        "board_member",
        "other"
    ],
    location: [
        "yes",
        "no",
    ]}}

 setting="https://ecommerceberlin.com/api/settings?path=visitor.register" />)}</HasTicketWithRole>

const onVoted = (canVote) => (<>
  <WidgetVoteStatus max_votes={12} />
  {canVote ? <div><RegForm /><Categories label={null} secondaryLabel={null} /></div>: <RegForm />}</>)


const PageVote = ({id}) => (

<div>

<ExternalSettings urls={["https://ecommerceberlin.com/api/settings?path=visitor.register"]} />
<HeadVoteContestant id={id} template="ega2024_vote_template">{(data) => <Head>{data}</Head>}</HeadVoteContestant> 
{/* <RegForm /> */}
       
<WidgetContestantPerson
  id={id}
  wrapperProps={{label: null, first: true}}
 vote={<DynamicWidgetVoteWithLinkedIn id={id} max_votes={12} onVoted={onVoted} />}
//  vote={null}
  status={<WidgetVoteStatus max_votes={12} />}
  // show_votes={true}
/>

{/* <Categories first dense={false} typography={undefined} secondaryTypography={undefined} wrapperProps={{label: "awards.voting.cta"}}/> */}

  <Winners2023 />

  {/* <RegForm /> */}

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
