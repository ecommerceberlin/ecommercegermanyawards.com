
import {
    MyTypography,
    Box,
    useTranslate,
    MarkdownSection,
    Alert,
    makeStyles,
    Translatable
} from 'eventjuicer-site-components';

const useStyles = makeStyles(theme=>({
    container: {
        margin: "0 auto",
        maxWidth: 800,
        padding: 10
    }
}))


const RegFormRules = () => {

    const [translate] = useTranslate()
    const classes = useStyles()

    return (<Box className={classes.container}>
    <Translatable variant="h5" label="awards.rules-summary.title"  />  
    <MarkdownSection text={ translate("awards.rules-summary.body") } limit={750} />
    </Box>)

}

export default RegFormRules