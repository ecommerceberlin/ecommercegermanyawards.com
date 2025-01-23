import {
  connect,
  Wrapper,
  reduxWrapper,
  configure,
  Markdown
} from 'eventjuicer-site-components';

import settings from '../../settings'
import content from '../../texts/cookies.md'


const PageLegalCookies = (props) => (
  <Wrapper first label="common.pages.cookies">
  <Markdown>{content}</Markdown>
  </Wrapper>
)


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    preload: []
  })
  
})

export default connect()(PageLegalCookies);
