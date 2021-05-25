import {
  connect,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  WidgetFaq,
  Wrapper,
  WidgetContestantCompanies,
  WidgetContestantCompaniesWinners,
  WidgetContestantCompaniesArchiveWinners,
  WidgetVoteStatus,
  MyTypography,
  Markdown,
  EmbedSection
} from 'eventjuicer-site-components';


import {Timeline, Categories} from '../src/icons' 
import AllPartners from '../src/AllPartners'
import RegForm from '../src/RegForm'
import Intro from '../src/Intro'
import Jurors from '../src/Jurors'

import settings from '../settings';

const PageIndex = (props) => (

<div>

  <Wrapper label="awards.ceremony.title">
    <EmbedSection data="https://youtu.be/bAJOeLNOhss" playerProps={{light: false}}/>
  </Wrapper>

  <WidgetVideoWithEventInfo insert="https://res.cloudinary.com/eventjuicer/image/upload/v1619183737/hypernode.png" />

  {/* <WidgetContestantCompaniesWinners /> */}

  <Wrapper label="awards.hello.title"><Timeline /></Wrapper>

  <WidgetContestantCompanies

  intro={
    <div style={{ width: '80%' }}>
    <WidgetVoteStatus  max_votes={10} />
    <MyTypography template="benefitsText">
      <Markdown label="awards.contestants.voting-rules.description" />
    </MyTypography>
    </div>
  }
  limit={500}
  keyword_source="awards_category"
  label='awards.contestants.categories.title'
  show_votes={false}
  resolveTitle={function(item){ return item.profile.cname2 } }
  />


  <WidgetFaq setting="contestant.faq" />

  <Jurors />

  <WidgetContestantCompaniesArchiveWinners />

  <WidgetPhotostream setting="awardsphotostream" />

  <AllPartners />

</div>

)
 
 
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