import {
  connect,
  Markdown,
  Wrapper,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

import settings from '../../settings';
import content from '../../texts/imprint.md'

const PageLegalImprint = (props) => (
  <Wrapper first label="common.pages.imprint">
  <Markdown>{content}</Markdown>
  </Wrapper>
)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  await configure(props, {
    settings: settings,
    preload: []
  })
})


export default connect()(PageLegalImprint);
