const settings  = {

    AVAILABLE_LOCALES : "en,de",
    DEFAULT_LOCALE : "en",
    PROJECT : "ecommercegermanyawards.com",
    NAME : "E-commerce Germany Awards",
    GTM : "GTM-TFSQ6GK",
    PUBLIC_URL: 'https://ecommercegermanyawards.com',
    API_PUBLIC: 'https://api.eventjuicer.com/v1/public/hosts/ecommercegermanyawards.com',
    API_SERVICES: 'https://api.eventjuicer.com/v1/services',

    system : {

        lang_api_endpoint : 'https://localise.biz/api/export/all.json?format=multi&pretty&key=tWMy1RRHuiW6DD9T7AyYtFlQzAeztbBK',
        available_locales : ["en", "de"],
        default_locale : "en",
        api : "https://api.eventjuicer.com/v1/public/hosts/ecommercegermanyawards.com",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",
    
    },

    premium : {

        ticketgroups : [332]

    },

    hero : {
        heading : "awards.hero.title",
        subheading : "awards.hero.description",
        videoSrc : "https://res.cloudinary.com/eventjuicer/video/upload/v1575327611/ega2020_2.mp4",
        background : "https://res.cloudinary.com/eventjuicer/image/upload/v1575328032/ega2020_2_still.png",
        overlay : "black",
        template : "heroGold",
    },

    bookingmap : {
        api : "https://pages.ecommercegermanyawards.com/preorder"
    },

    reviews : {

    },

    ui : {

        menuItems : [
            {
              name: 'general',
              items: [
                {name: 'home', to: '/'},
                // {name: 'vote', to: '/vote'},
              ]
            },
            {
              name: 'partners',
              items: [
                {name: 'premium', to: '/premium'},
              ]
            },
            // {
            //   name: 'exhibitors',
            //   items: [
            //     {name: 'exhibitors', to: '/exhibitors'},
            //     {name: 'exhibit', to: '/exhibit'},
            //     {name: 'faq', to: '/faq'}
            //   ]
            // }
        ]
    },


    visitor : {
        ticket_id : 1549,
        email_template : "ecommerceberlin-visitor-registration",
        background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",
        api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com/register"
    },

    common : {

        organizer_name : 'E-commerce Capitals Sp. z o.o. Sp.k.',
        organizer_address : 'POLAND, Poznan, Jana Matejki 52/4',
        organizer_regno : 'VAT ID PL7792439665',
        event_name : 'E-commerce Germany Awards',
        event_location : 'Spindler & Klatt, Köpenicker Str. 16-17, 10997 Berlin',
        event_date : '17th February 2021',
        event_hours : '10:00-17:00',

    },

    rolebuttons : {
        accent : "gold",
        items : [
        {
          url: 'https://static.eventjuicer.com/photos/12961446_1288640741145929_7684227399478032531_o.jpg',
          label: 'common.visitor',
          width: '50%',
          target : "/visit"
        },
        {
          url: 'https://static.eventjuicer.com/photos/12967348_1288628734480463_3860331543127036065_o.jpg',
          label: 'common.exhibitor',
          width: '50%',
          target : "/exhibit"
        },
        ]
    },

    customer_support : {

    },

    sales_support : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            {             
                name: 'Jacob Przybylski',
                position : 'Event Manager',
                langs : ["en","de"],
                avatar: 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1598270731/Jacob_Linkedin.jpg',
                phone: '+49 302 555 98 79',
                email: 'awards@ecommerceberlin.com',
                chatlio : true
            }
        ]
    },

    schedule : {

    },

    footer : {
        iconStyle : "black",
        links : [
            {label : "common.pages.imprint", href : "/legal-imprint"},
            // {label : "visitors.agreement.title", href : "/legal-visitors"},
            // {label : "exhibitors.agreement.title", href : "/legal-exhibitors"},
            {label : "awards.contest.agreement.title", href : "/legal-contest"},
            {label : "awards.contest.legal-data.title", href : "/legal-personal-data"},
            {label : "common.pages.cookies", href : "/legal-cookies"},
        ]
    },
};


export default settings