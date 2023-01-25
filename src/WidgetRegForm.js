

import {
    WidgetRegForm
} from 'eventjuicer-site-components';

const CustomWidgetRegForm = ({right=null}) =>  <WidgetRegForm
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
            'product_content'
        ]
        }} 
        right={right}
        summary={<div>asd</div>}
    />


export default CustomWidgetRegForm