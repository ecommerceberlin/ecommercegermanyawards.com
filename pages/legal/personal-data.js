import {
  connect,
  Wrapper,
  Markdown,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

import settings from '../../settings'
import content from '../../texts/personal-data.md'

const PageLegalPersonalData = (props) => (
  <Wrapper first label="awards.contest.legal-data.title">
  <Markdown>{content}</Markdown>
</Wrapper>
)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  return await configure(props, {
    settings: settings,
    preload: []
  })
  
})

export default connect()(PageLegalPersonalData);
