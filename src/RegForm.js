

import {
    WidgetRegForm,
    MyTypography,
    Markdown,
    Box,
    Wrapper
} from 'eventjuicer-site-components';

const RegForm = () => (
<>
    <Wrapper label="awards.register.title">

    <WidgetRegForm
        setting="contestant.register"
        options={{
            "categories": [
            'sales_generation',
            'communication',
            'internationalization',
            'logistics',
            'platform',
            'payment',
            'analytics',
            'agency',
            'infrastructure',
            'innovation',
            'omnichannel',
            'ar_vr_3d'
        ]
        }} 
        right={
        
            <>
            <MyTypography template="subtitle1" label="awards.rules-summary.title" />  
            <Markdown label="awards.rules-summary.body" />
            </>
     }
        summary={<div>asd</div>}
    />
  
  
  
    </Wrapper>
    </>


)

RegForm.defaultProps = {

}

export default RegForm