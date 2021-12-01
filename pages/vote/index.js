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
  reduxWrapper,
  configure,
  Wrapper
} from 'eventjuicer-site-components';

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

import {Categories} from '../../src/icons' 

import {Winners2021} from '../../src/Winners'

const PageVote = (props) => (

  <div>

      <Wrapper label="awards.contestants.categories.title" secondaryLabel="awards.contestants.list.description">

      <WidgetVoteStatus  max_votes={12} />
      <Typography template="benefitsText">
      <Markdown label="awards.contestants.voting-rules.description" />
      </Typography>

      </Wrapper>

  
       <Categories  dense={false} typography={undefined} secondaryTypography={undefined} />
      <Winners2021 />
      <WidgetVideoWithEventInfo />


  
  </div>

)



export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    preload: ['contestant_companies']
  })

  return {
    props: {}, 
    revalidate: 1
  }
  
})


export default connect()(PageVote);
