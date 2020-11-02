import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Forum from '@material-ui/icons/Forum'
import Public from '@material-ui/icons/Public'
import LocalShipping from '@material-ui/icons/LocalShipping'
import Storefront from '@material-ui/icons/Storefront'
import MonetizationOn from '@material-ui/icons/MonetizationOn'
import Assessment from '@material-ui/icons/Assessment'
import People from '@material-ui/icons/People'
import Computer from '@material-ui/icons/Computer'
import NewReleases from '@material-ui/icons/NewReleases'
import NoteAdd from '@material-ui/icons/NoteAdd'
import HowToVote from '@material-ui/icons/HowToVote'
import Mic from '@material-ui/icons/Mic'
import TrendingUp from '@material-ui/icons/TrendingUp'
import VerifiedUser from '@material-ui/icons/VerifiedUser'

import {WidgetIconGrid, WidgetVerticalTimeline} from 'eventjuicer-site-components'

const Categories = (props) => (<WidgetIconGrid setting="contestant.categories" icons={{
    ShoppingCart,
    Forum,
    Public,
    LocalShipping,
    Storefront,
    MonetizationOn,
    Assessment,
    People,
    Computer,
    NewReleases,
}} iconColor="black" iconSize="70" />)

const Timeline = (props) => (<WidgetVerticalTimeline 
    setting="awardstimeline" 
    icons={{
        NoteAdd,
        HowToVote,
        Public,
        Mic,
        Assessment
}}  iconSize="40" />)

const WhyParticipate = (props) => (<WidgetIconGrid setting="contestant.benefits" icons={{
        TrendingUp,
        People,
        VerifiedUser
}} iconColor="black" iconSize="70" />)

export {Categories, Timeline, WhyParticipate}
