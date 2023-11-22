import React from 'react';

import {
    connect,
    Wrapper,
    reduxWrapper,
    configure,
    WidgetRegForm,
    Loading,
    MyTypography,
    useUserData,
    SubPageButton,
    TextSection
  } from 'eventjuicer-site-components';
  
import settings from '../settings';
  
const PageAccount = () => {

    const user = useUserData();
    console.log(user)

   if(user){
    return (<Wrapper><WidgetRegForm 
        fields={[
            {name: "project_description", required: true},
            {name: "logotype", required: true},
            {name: "difference", long: true, required: true},
            {name: "innovations", long: true, required: true},
            // {name: "testimonials", long: true},
            {name: "case_study", long: true},
            {name: "confidential", long: true},
            {name: "video"},
     
         ]}
         start={[]}
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
            <div style={{marginTop: 30}}>
            
            <SubPageButton target={{href: `/vote/${user.id}` }} label="common.preview" />

            <TextSection margin={2} record={user.fields} name="cname2" />
            <TextSection margin={2} record={user.fields} name="project_name" />
            <TextSection margin={2} record={user.fields} name="awards_category" baseLabel="awards.fields.awards_category_options" isOption={true} />

            {/* <Markdown label="awards.rules-summary.body" /> */}
            </div>
          }

         />
         </Wrapper>)
   }

   return (<Wrapper style={{paddingTop: 100, paddingBottom: "80vh"}}><Loading /></Wrapper>)
   
}
  
  
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
        settings: settings,
        //preload: ['contestant_companies_all']
    })

  })
  
  
 export default connect()(PageAccount);
  
  
  
  