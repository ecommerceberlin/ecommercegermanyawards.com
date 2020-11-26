
import {
    WidgetJurors,
  } from 'eventjuicer-site-components';


const Jurors = () => (

    <WidgetJurors
        label="awards.jury.title"
        secondaryLabel="awards.jury.description"
        disableTemps={false}
        limit={100}
        filter={null}
        bio={false}
        minToShow={1}
        sort="fname"
    />

)


Jurors.defaultProps = {

}

export default Jurors;