import {
    WidgetContestantCompaniesArchiveWinners
} from 'eventjuicer-site-components'


export const Winners2021 = (props) =>  (<WidgetContestantCompaniesArchiveWinners 
    filter={ (data) => parseInt(data.event_id) === 91 }
    wrapperProps={{
        label : ["awards.winners.archive.title", {name: 2021}],
        secondaryLabel :[ "awards.winners.archive.description", {name: 2021, date: ""}],
      }}  
/>)


export const Winners2020 = (props) =>  (<WidgetContestantCompaniesArchiveWinners 
    filter={ (data) => parseInt(data.event_id) === 88 }
    wrapperProps={{
        label : ["awards.winners.archive.title", {name: 2020}],
        secondaryLabel : ["awards.winners.archive.description", {name: 2020, date: "12.02.2020"}],
    }}  
/>)


const AllWinners = () => (<><Winners2021 /><Winners2020 /></>)

export default AllWinners