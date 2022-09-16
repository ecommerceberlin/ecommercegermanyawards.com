import {
    Wrapper,
    TwoColsLayout as Section,
    MyTypography,
    Markdown,
    Box
} from 'eventjuicer-site-components';

import {Timeline} from './icons'
import RegFormRules from './RegFormRules';
import CustomWidgetRegForm from './WidgetRegForm';

const IntroRegformTimeline = () => (

<Wrapper first label="awards.hello.title">
  
    <Section    
        left={  
        <div>

        <Box style={{marginTop: '1rem'}}>
        <MyTypography template="h4" label="awards.hello.submit" />
        <MyTypography template="subtitle1" label="awards.hello.needs" />
        <Markdown label="awards.hello.details" />
        </Box> 

        <CustomWidgetRegForm />

        </div>
        }
        right={ <Timeline /> }
        leftCentered={true}
    />

    <RegFormRules /> 

 </Wrapper>)


export default IntroRegformTimeline;