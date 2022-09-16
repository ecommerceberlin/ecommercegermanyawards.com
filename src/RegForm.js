

import {
    WidgetRegForm,
    MyTypography,
    Markdown,
    Box,
    Wrapper
} from 'eventjuicer-site-components';

import CustomWidgetRegForm from './WidgetRegForm';
import RegFormRules from './RegFormRules';

const RegForm = () => (
<>
    <Wrapper label="awards.register.title">

    <CustomWidgetRegForm right={<RegFormRules />} />

    </Wrapper>
    </>


)

RegForm.defaultProps = {

}

export default RegForm