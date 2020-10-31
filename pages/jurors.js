import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetContestantCompaniesArchiveWinners,
  WidgetPartners,
  WidgetJurors,
  reduxWrapper,
  configure,
  TwoColsLayout as Section,
  MyTypography,
  Markdown,
  WidgetPhotostream,
  WidgetRegForm
} from 'eventjuicer-site-components';
 
import settings from '../settings';

const PageJury = (props) => (

<div>
 
<WidgetRegForm
  first
  setting="awards.become_a_juror"
  right={
    <>
    <MyTypography template="subtitle1" label="juror.register.title" /> 
    <Markdown label="juror.register.description" />
    </>
  }
  summary={<div>asd</div>}
/>

<WidgetJurors
  label="awards.jury.title"
  secondaryLabel="awards.jury.description"
  disableTemps={false}
  limit={100}
  filter={null}
  bio={false}
  minToShow={1}
/>

<WidgetContestantCompaniesArchiveWinners />

<WidgetPhotostream setting="awardsphotostream" />

<WidgetPartners
label="partners.networking.title"
filter={item =>
item['scopes(deprecated)'].indexOf('networking') > -1 &&
item.logotype.indexOf('cloudinary') > -1
}
limit={50}
center={true}
/>

<WidgetPartners
label="partners.media.title"
filter={item =>
item['scopes(deprecated)'].indexOf('media') > -1 &&
item.logotype.indexOf('cloudinary') > -1
}
limit={50}
/>

<WidgetPartners
label="partners.community.title"
filter={item =>
item['scopes(deprecated)'].indexOf('community') > -1 &&
item.logotype.indexOf('cloudinary') > -1
}
limit={50}
/>

<WidgetPartners
label="partners.communication.title"
filter={item =>
item['scopes(deprecated)'].indexOf('communication') > -1 &&
item.logotype.indexOf('cloudinary') > -1
}
center={true}
limit={50}
/>

<WidgetVideoWithEventInfo />

</div>

  
)
 
 
export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    preload: ['jurors']
  })

  return {
    props: {},
    revalidate: 1
  }
  
})



export default connect()(PageJury);



