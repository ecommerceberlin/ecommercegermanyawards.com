

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
            'ar_vr_3d'
        ]
        }} 
        right={right}
        summary={<div>asd</div>}
    />


export default CustomWidgetRegForm