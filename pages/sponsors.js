import {
  connect,
  reduxWrapper,
  configure,
  CompanyCardSimple,
  Wrapper
} from 'eventjuicer-site-components';

import settings from '../settings'


const PageSponsors = (props) => (

    <div>
    <Wrapper first label="awards.sponsors.list.title">
        <CompanyCardSimple id={2028} label="awards.sponsor.headline" labelParam="2022" />
        <CompanyCardSimple id={1939} label="awards.sponsor.drinkables" labelParam="2022" />
        <CompanyCardSimple id={2044} label="awards.sponsor.supporting" labelParam="2022" />

        <CompanyCardSimple id={1822} label="awards.sponsor.year" labelParam="2021" />
        <CompanyCardSimple id={1061} label="awards.sponsor.year" labelParam="2020"/>
        <CompanyCardSimple id={1366} label="awards.sponsor.year" labelParam="2019"/>
    </Wrapper>
    </div>
)


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    preload: [
        'companies/2044', //mail alliance
        'companies/2028', //trevipay
        'companies/1939', //emplifi.io
        'companies/1822', //hypernode
        'companies/1061', //leaseweb
        'companies/1366' //intershop
    ]
  })

  
})


export default connect()(PageSponsors);
