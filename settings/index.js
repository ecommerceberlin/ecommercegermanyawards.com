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
        service_api : "https://api.eventjuicer.com/v1/services",
        post_api : "https://api.eventjuicer.com/v1/public/hosts/ecommercegermanyawards.com/register",
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
                name: 'awards',
                items: [
                  {name: 'about', to: '/about'},
                  {name: 'jurors', to: '/jurors'},
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
            {label : "common.pages.imprint", href : "/legal/imprint"},
            {label : "awards.contest.agreement.title", href : "/legal/contest"},
            {label : "awards.contest.legal-data.title", href : "/legal/personal-data"},
            {label : "common.pages.cookies", href : "/legal/cookies"},
        ]
    },


    awardstimeline: {

        baseLabel: "awards.timeline",

        items : [
            {date: "2020-11-02", name: "submissions", icon:  "NoteAdd", dotColor: 'primary', active: true },
            {date: "2020-12-01", name: "public-voting", icon:  "Public" },
            {date: "2020-12-21", name: "qualification", icon:  "Assessment" },
            {date: "2021-01-11", name: "jury-voting", icon:  "HowToVote" },
            {date: "2021-02-17", name: "results", icon:  "Mic", active: false }
            
        ]

    },

    awards : {

        become_a_juror: {

            label : "juror.register.title",
            baseLabel: "juror",
            fields : [
              {name: "email", required: true},
              {name: "fname", required: true},
              {name: "lname", required: true},
              {name: "cname2", required: true},
              {name: "position", required: true},
              {name: "phone", required: true},
              {name: "company_website", required: true},
            ],
            start : ['fname', 'lname', 'cname2'],
            ticket_id : 1886,
            email_template : "ega-juror-submission-confirmation",
            background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",

        },
    },

    contestant: {


        faq : {

            wrapperProps: {
                label: "awards.faq.title",
                secondaryLabel: null,
            },
          
            baseLabel: "awards.faq",
            items: [
             {
               label: 'categories'
             },
             {
               label: 'timeline',
             },
             { label: 'fee' },
             { label: 'limits' },
             { label: 'status' },
             { label: 'abuse' },
             { label: 'sponsorship'},
        ]

        },
        register: {

            label : "awards.register.title",
            baseLabel: "awards",
            fields : [
              {name: "email", required: true},
              {name: "fname", required: true},
              {name: "lname", required: true},
              {name: "cname2", required: true},
            //   {name: "position", required: true},
            //   {name: "nip", required: false},
              {name: "project_name", required: true},
              {name: "awards_category", required: true, options: "categories"},
              {name: "phone", required: true},
              {name: "company_website", required: true},
              {name: "accept", required: true, type: "confirm"}
            ],

            start : ['cname2', 'project_name', 'awards_category'],
            ticket_id : 1861,
            email_template : "ega-submission-confirmation",
            background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",

        },


        categories : {

            label: "awards.categories.title",
            secondaryLabel: "awards.categories.description",
            baseLabel: "awards.categories",
            typography: "subtitle",
            dense: true,
            
            items: [

                {
                    icon : "FaSearch",
                    label :  'sales_generation',
                },
            
                {
                    icon : "FaSearch",
                    label : 'communication'
                },
            
                {
                    icon : "FaSearch",
                    label : 'internationalization'
                },

                {
                    icon : "FaSearch",
                    label : 'logistics'
                },

                {
                    icon : "FaSearch",
                    label :  'platform',
                },
            
                {
                    icon : "FaSearch",
                    label : 'payment'
                },
            
                {
                    icon : "FaSearch",
                    label : 'analytics'
                },

                {
                    icon : "FaSearch",
                    label : 'agency'
                },

                {
                    icon : "FaSearch",
                    label : 'infrastructure'
                },

                {
                    icon : "FaSearch",
                    label : 'innovation'
                }

            ]
        },



    },

    awardsphotostream : {

        wrapperProps: {
            label : "awards.gallery.title"
        },

        cols: 12,

        items : [

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824810/Website/CFP%20-%20gallery/Conference2_MyTheresa.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824698/Website/CFP%20-%20gallery/Conference6_Facebook_Lisa.jpg", cols: 6},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824722/Website/CFP%20-%20gallery/IMG_0782_copy.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824720/Website/CFP%20-%20gallery/IMG_0643.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824718/Website/CFP%20-%20gallery/Conference7_IBM_Isabelle.jpg", cols: 4},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824707/Website/CFP%20-%20gallery/IMG_9984.jpg", cols: 6},
          //  {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824699/Website/CFP%20-%20gallery/2SH07600.jpg", cols: 3},
          {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824808/Website/CFP%20-%20gallery/Conference4_Nivea.jpg", cols: 6},
     

            // {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824698/Website/CFP%20-%20gallery/Conference10_Douglas.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824685/Website/CFP%20-%20gallery/2SH09325.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824685/Website/CFP%20-%20gallery/Conference5_BabySweets.jpg", cols: 4}

        ]
    },



};


export default settings
 