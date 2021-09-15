import {
  connect,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  Wrapper,

  EmbedSection
} from 'eventjuicer-site-components';


import {Timeline, Categories} from '../src/icons' 
import AllPartners from '../src/AllPartners'
import RegForm from '../src/RegForm'
// import Intro from '../src/Intro'
import Jurors from '../src/Jurors'
import {Winners2021} from '../src/Winners'
import settings from '../settings';

const PageIndex = (props) => (

<div>

  <WidgetVideoWithEventInfo  />

 <Wrapper label="awards.hello.title"><Timeline /></Wrapper>

  <RegForm />

  <Jurors limit={8} />

  <Winners2021 />

  <Wrapper label="awards.ceremony.title">
    <EmbedSection data="https://youtu.be/bAJOeLNOhss" playerProps={{light: true}}/>
  </Wrapper>



 {/* 

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

  */}

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