import {
  connect,
  WidgetPremiumTicket,
  WidgetPremiumTickets,
  reduxWrapper,
  configure,
  get
} from 'eventjuicer-site-components';


import settings from '../../settings';


const PagePremiumSingle = ({name}) => {


  return (

    <div>
      <WidgetPremiumTicket name={name} labelPrefix="resources.awards.premium." resolve={item => item.translation_asset_id.indexOf(name)!==-1} />
      <WidgetPremiumTickets label="resources.awards.premium.title" />
  
    </div>
  )

} 


 export async function getStaticPaths() {
  
  const request = await fetch(`${settings.system.api}/tickets`)
  const tickets = await request.json();

  const scope = get(settings, "premium.ticketgroups", []);

  const filtered = tickets.data.filter(t => scope.includes(t.group_id) );
 
  const paths = filtered.map(row => ({ 
    params: {
      name : row.translation_asset_id.replace('resources.awards.premium.', '')
    }
  }))

  return {
    paths: paths,
    fallback: true 
  };
   
}


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params }) => {

  await configure(store, {
    settings : settings,
    preload: ['tickets', 'ticketgroups'],
  })

  return {
    props : {
      name : "name" in params ? params.name : ""
    },
    revalidate: 1
  }

})

export default connect()(PagePremiumSingle);
