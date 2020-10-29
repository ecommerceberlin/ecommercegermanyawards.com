import {
  connect,
  get as _get,
  MyHead as Head,
  // Typography,
  // Faq,
  // FaqLink,
  Wrapper,
  LayoutMain as Layout,
  Markdown,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

import settings from '../../settings'


const PageLegalContest = (props) => (

  <Wrapper first label="awards.contest.agreement.title">
  {/* <Markdown>{`${terms}`}</Markdown> */}
</Wrapper>

)

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    preload: ['contestant_companies']
  })
  
})


export default connect()(PageLegalContest);
