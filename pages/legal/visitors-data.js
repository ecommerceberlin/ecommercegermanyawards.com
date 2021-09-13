import {
  connect,
  Wrapper,
  Markdown,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

import settings from '../../settings'
import content from '../../texts/visitors-data.md'

const PageLegalVisitorsData = (props) => (

  <Wrapper first label="visitors.data-agreement.title">
  <Markdown>{content}</Markdown>
</Wrapper>
)


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings: settings,
    preload: []
  })
  
})

export default connect()(PageLegalVisitorsData);
