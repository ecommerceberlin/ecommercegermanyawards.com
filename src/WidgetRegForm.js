

import {
    WidgetRegForm
} from 'eventjuicer-site-components';

const CustomWidgetRegForm = ({right=null}) =>  <WidgetRegForm
        setting="contestant.register"
        options={{
            "categories": [
            'sales',
            'communication',
            'expansion',
            'logistics',
            'platform',
            'payment',
            'analytics',
            'agency',
            'security_it',
            'innovation',
            'omnichannel',
            'customers_experience',
            'fulfillment_optimization'
        ]
        }} 
        right={right}
        summary={<div>asd</div>}
    />


export default CustomWidgetRegForm