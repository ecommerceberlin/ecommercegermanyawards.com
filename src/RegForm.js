import {
    WidgetRegForm,
    MyTypography,
    Markdown,
    Box,
    Wrapper
} from 'eventjuicer-site-components';

import CustomWidgetRegForm from './WidgetRegForm';

const RegForm = () => (
  <>
    <Wrapper label="awards.register.title">
      <CustomWidgetRegForm />
    </Wrapper>
  </>
);

RegForm.defaultProps = {};

export default RegForm;
