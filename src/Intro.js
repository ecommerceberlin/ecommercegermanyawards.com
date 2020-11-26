import {
    Wrapper,
    TwoColsLayout as Section,
    MyTypography,
    Markdown
} from 'eventjuicer-site-components';
import {Timeline} from './icons'

const Intro = () => (

<Wrapper first label="awards.hello.title">
  
    <Section    
        left={  
        <div style={{marginTop: '5rem'}}>
        <MyTypography template="h4" label="awards.hello.submit" />
        <MyTypography template="subtitle1" label="awards.hello.needs" />
        <Markdown label="awards.hello.details" />
        </div> 
        }
        right={ 
        <Timeline />
        }
        leftCentered={true}
    />

 </Wrapper>


)


export default Intro;