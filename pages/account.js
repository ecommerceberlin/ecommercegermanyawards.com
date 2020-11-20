import React from 'react';

import {
    connect,
    Wrapper,
    reduxWrapper,
    configure,
    WidgetRegForm,
    Loading,
    MyTypography,
    useUserData
  } from 'eventjuicer-site-components';
  
import settings from '../settings';
  
const PageAccount = () => {

    const user = useUserData();
    
   if(user){
    return (<Wrapper><WidgetRegForm 
        fields={[
            {name: "project_description", required: true},
            {name: "logotype", required: true},
            {name: "difference", long: true, required: true},
            {name: "innovations", long: true, required: true},
            {name: "testimonials", long: true},
            {name: "case_study", long: true},
            {name: "confidential", long: true},
            {name: "video"},
     
         ]}
         data={user.fields} 
         label="awards.update.title"
         baseLabel="awards"
         legend="awards.update.description"
         token={user.token}
         actionFinishedProps={{
            action : "profile_updated", 
            category : "visitors", 
            // label : "method",
            // value : ""
         }}
         right={
            <>
            <MyTypography template="h5">{user.fields.cname2}</MyTypography>  
            <MyTypography template="subtitle1">{user.fields.project_name}</MyTypography>  

            {/* <Markdown label="awards.rules-summary.body" /> */}
            </>
          }
        //  onSuccess={false}
        //  onError={false}
         />
         </Wrapper>)
   }

   return (<Wrapper style={{paddingTop: 100, paddingBottom: "80vh"}}><Loading /></Wrapper>)
   
}
  
  
export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    await configure(store, {
        settings: settings,
        //preload: ['contestant_companies_all']
    })

    return {
        props: {},
        revalidate: 1
    }  
  })
  
  
 export default connect()(PageAccount);
  
  
  
  