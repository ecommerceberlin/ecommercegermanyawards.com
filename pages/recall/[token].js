import React, {useEffect} from 'react'
import {
    connect,
    reduxWrapper,
    configure,
    getUserByToken,
    Wrapper,
    lsSet
  } from 'eventjuicer-site-components';
  
import {useRouter} from 'next/router'

  import settings from '../../settings';
  
  const Recall = ({token}) => {

    const router = useRouter();

    useEffect(()=>{
        
        console.log(router)      

        if(token){
            lsSet("token", token)
            router.push("/account")
        }
    })

     return  <Wrapper> {token}</Wrapper>

  }

Recall.defaultProps = {
    token: ""
}

Recall.disableLayout = true;

export const getServerSideProps = reduxWrapper.getServerSideProps(async ({ store, query }) => {

    const {token} = query;

    //validate token
    //fetch via service

    const user = await getUserByToken(settings.system.service_api, token)

    await configure(store, {
        settings: settings
    })
    return {
        props: {
            token: "token" in user ? user.token: ""
        },
    }  
})
  
  
export default connect()(Recall);
  
  
  
  