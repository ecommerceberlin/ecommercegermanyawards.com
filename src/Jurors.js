
import {
    WidgetJurors,
  } from 'eventjuicer-site-components';


const Jurors = (props) => (

    <WidgetJurors
        wrapperProps={{
            label: "awards.jury.title",
            secondaryLabel: "awards.jury.description"
        }}
        disableTemps={false}
        limit={8}
        filter={null}
        bio={false}
        minToShow={4}
        sort="fname"
        all={false}
        {...props}
    />

)


export default Jurors;