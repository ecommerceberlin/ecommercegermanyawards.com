
import {
    WidgetJurors,
  } from 'eventjuicer-site-components';


const Jurors = (props) => (

    <WidgetJurors
        label="awards.jury.title"
        secondaryLabel="awards.jury.description"
        disableTemps={false}
        limit={100}
        filter={null}
        bio={false}
        minToShow={1}
        sort="fname"
        {...props}
    />

)


Jurors.defaultProps = {

}

export default Jurors;