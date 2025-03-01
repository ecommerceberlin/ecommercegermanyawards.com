
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
  HasTicketWithRole,
  Wrapper,
  Box,
  MyButton,
} from 'eventjuicer-site-components';

import Head from 'next/head'
import dynamic from 'next/dynamic'

import settings from '../../settings'

import {Winners2024} from '../../src/Winners'
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
  {/* <WidgetVoteStatus max_votes={25} /> */}
  {canVote ? (
      <div>
        <Categories label={null} secondaryLabel={null} />
        <Wrapper first label="awards.ebeinfo.title">
          <Markdown label="awards.ebeinfo.description" />
    
        <Box textAlign="center" mt={2}>
          <MyButton
            href="https://ecommerceberlin.com/visit?utm_source=ega&utm_medium=banner&utm_campaign=ega_banner_partner"
            label="ebeinfo.button"
            variant="outlined"
            style={{ width: "300px", height: "50px" }}
          />
        </Box>
        </Wrapper>
      </div>
    ) : (
      <Wrapper first label="awards.ebeinfo.title">
        <Markdown label="awards.ebeinfo.description" />
        <Box textAlign="center" mt={2}>
          <MyButton
            href="/jurors"
            label="ebeinfo.button"
            variant="outlined"
            style={{ width: "300px", height: "50px" }}
          />
        </Box>
      </Wrapper>
    )}
  </>
);

const PageVote = ({id}) => (

<div>

<ExternalSettings urls={["https://ecommerceberlin.com/api/settings?path=visitor.register"]} />
<HeadVoteContestant id={id} template="ega25-vote-banner">{(data) => <Head>{data}</Head>}</HeadVoteContestant> 
{/* <RegForm /> */}
       
<WidgetContestantPerson
  id={id}
  wrapperProps={{label: null, first: true}}
//  vote={<DynamicWidgetVoteWithLinkedIn id={id} max_votes={35} onVoted={onVoted} />}
 vote={null}
  // status={<WidgetVoteStatus max_votes={25} />}
  show_votes={true}
/>

<Categories first dense={false} typography={undefined} secondaryTypography={undefined} wrapperProps={{label: "awards.voting.cta"}}/>

  {/* <Winners2024 /> */}

<Wrapper first label="awards.ebeinfo.title">
        <Markdown label="awards.ebeinfo.description" />
    
      <Box textAlign="center" mt={2}>
        <MyButton
          href="https://ecommerceberlin.com/visit?utm_source=ega&utm_medium=banner&utm_campaign=ega_banner_partner"
          label="ebeinfo.button"
          variant="outlined"
          style={{ width: "300px", height: "50px" }}
        />
      </Box>
</Wrapper>

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
    revalidate: 3600
  }
  
})


export default connect()(PageVote);
