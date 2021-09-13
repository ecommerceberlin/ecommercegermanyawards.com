import {
  connect,
  Wrapper,
  Markdown,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

import settings from '../../settings'
import content from '../../texts/contest.md'

const PageLegalContest = (props) => (
  <Wrapper first label="awards.contest.agreement.title">
  <Markdown>{content}</Markdown>
  </Wrapper>
)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings: settings,
    preload: ['contestant_companies']
  })
  
})


export default connect()(PageLegalContest);
