import {
    connect,
    MyHead as Head,
    LayoutMain as Layout,
    Wrapper,
    reduxWrapper,
    configure,
    DatasourceUrl
  } from 'eventjuicer-site-components';
  

  import settings from '../settings';
  
  const PageAccount = (props) => (
  
    <div>
       <DatasourceUrl>{
           (params) => {

            console.log(params)
            return null
           }
        }</DatasourceUrl>
    </div>
  
  )
   
  
 
  
 export const getServerSideProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    await configure(store, {
        settings: settings,
        //preload: ['contestant_companies_all']
    })

    return {
        props: {},
     //   revalidate: 1
    }
    
  })
  
  
  
 export default connect()(PageAccount);
  
  
  
  