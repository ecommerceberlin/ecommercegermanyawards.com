import { WidgetPartners } from 'eventjuicer-site-components';

const AllPartners = (props) => {

    return (
<>

<WidgetPartners
label="partners.networking.title"
filter={item =>
item['scopes(deprecated)'].indexOf('networking') > -1 &&
item.logotype.indexOf('cloudinary') > -1
}
limit={50}
center={true}
/>

<WidgetPartners
label="partners.media.title"
filter={item =>
item['scopes(deprecated)'].indexOf('media') > -1 &&
item.logotype.indexOf('cloudinary') > -1
}
limit={50}
/>

<WidgetPartners
label="partners.community.title"
filter={item =>
item['scopes(deprecated)'].indexOf('community') > -1 &&
item.logotype.indexOf('cloudinary') > -1
}
limit={50}
/>

<WidgetPartners
label="partners.communication.title"
filter={item =>
item['scopes(deprecated)'].indexOf('communication') > -1 &&
item.logotype.indexOf('cloudinary') > -1
}
center={true}
limit={50}
/>

</>

)

}

export default AllPartners;