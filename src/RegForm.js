

import {
    WidgetRegForm,
    MyTypography,
    Markdown,
    Box,
    Wrapper
} from 'eventjuicer-site-components';

const RegForm = () => (
<>
{/* <WidgetRegForm

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
        'innovation'
    ]
    }} 
    right={
  
   null }
    summary={<div>asd</div>}
    />
     */}
    <Wrapper ml={3}>
    <MyTypography template="subtitle1" label="awards.rules-summary.title" />  
    <Markdown label="awards.rules-summary.body" />
    </Wrapper>
    </>


)

RegForm.defaultProps = {

}

export default RegForm