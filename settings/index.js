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

        lang_api_endpoint : 'https://api.eventjuicer.workers.dev/?url=https%3A%2F%2Flocalise.biz%2Fapi%2Fexport%2Fall.json%3Fformat%3Dmulti%26pretty%26key%3DtWMy1RRHuiW6DD9T7AyYtFlQzAeztbBK',
        available_locales : ["en", "de"],
        default_locale : "en",
      //  api : "https://api.eventjuicer.com/v1/public/hosts/ecommercegermanyawards.com",
        api : "https://api.eventjuicer.com/v1/public/hosts/ecommercegermanyawards.com",
        proxy: "https://api.eventjuicer.workers.dev?url=",

        service_api : "https://api.eventjuicer.com/v1/services",
        post_api : "https://api.eventjuicer.com/v1/public/hosts/ecommercegermanyawards.com/register",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",
    
    },

    premium : {

        ticketgroups : [427],
        soldout: 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1684149426/Website/PREMIUM%20SERVICES/sold-out.png'


    },

    hero : {
        heading : "awards.hero.title",
        subheading : "awards.hero.description", 
        videoSrc : "https://res.cloudinary.com/ecommerceberlin/video/upload/q_auto,f_auto/v1688480752/Awards%20website/EGA_website_video_2023_2.mp4",
        background : "https://res.cloudinary.com/ecommerceberlin/image/upload/q_auto,f_auto/v1691504706/Awards%20website/ega24_final_poster.png",
        overlay : "black",
        template : "heroGold",
        showable: ["date"],
        // insert: "https://res.cloudinary.com/eventjuicer/image/upload/v1674051390/ebe_ega/nexi.png"
    },

    bookingmap : {
        api : "https://pages.ecommercegermanyawards.com/preorder"
    },

    reviews : {

    },

    appbar: {
        logotype: "https://res.cloudinary.com/eventjuicer/image/upload/c_fit,h_30,f_auto,q_auto/v1711106330/Logo_b_y_awards.png",
        links: [
            // {label: "Vote!", color: "secondary",  href: "/vote", variant: "contained"}
        ],
        profile: ["edit"]
    },

    ui : {

        menuItems : [
            {
              name: 'general',
              items: [
                {name: 'home', to: '/'},
                {name: 'winners', to: '/winners'},
              ]
            },
            {
                name: 'awards',
                items: [
                    // {name: 'vote', to: '/vote'},
                    {name: 'about', to: '/about'},
                    {name: 'categories', to: '/categories'},
                    // {name: 'register', to: '/register'},
                    {name: 'jurors', to: '/jurors'},
                    // {name: 'party', to: '/party'},
                ]
              },

            {
              name: 'partners',
              items: [
                // {name: 'premium', to: '/premium'},
                {name: 'sponsors', to: '/sponsors'},
              ]
            },
          
        ]
    },


    common : {

        organizer_name : 'E-commerce Capitals Sp. z o.o. Sp.k.',
        organizer_address : 'POLAND, 60‐586 Poznań, ul. Botaniczna 26/2',
        organizer_regno : 'VAT ID PL7792439665',
        event_name : 'E-commerce Germany Awards',
        event_location : 'Spindler & Klatt, Köpenicker Str. 16-17, 10997 Berlin',
        event_date : '19th February 2025',
        event_hours : '10:00-17:00',

    },

    rolebuttons : {
    },

    customer_support : {
    },

    sales_support : {

       
    },

    schedule : {
    },

    footer : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            {             
                name: 'Aleksandra Dalemba',
                position : 'Event Manager',
                langs : ["en","de"],
                avatar: 'https://res.cloudinary.com/ecommerceberlin/image/upload/c_thumb,g_face,w_120,h_120,f_auto,q_auto/v1661348122/Website/image_1.jpg',
                phone: '',
                email: 'awards@ecommerceberlin.com',
                chatlio : true
            }
        ],


        hideOrganizerDetails: true,

        showable: ["date"],
        primaryStyle: null,
        secondaryStyle: null,
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
        iconSize: "40",

        items : [
            {date: "2023-11-20", name: "submissions", icon:  "NoteAdd", dotColor: 'black', active: true  },
            {date: "2023-12-18", name: "verification", icon:  "NoteAdd"  },
            {date: "2024-01-08", name: "public-voting", icon:  "Public"},
            {date: "2024-01-25", name: "qualification", icon:  "Assessment" },
            {date: "2024-01-29", name: "jury-voting", icon:  "HowToVote" },
            {date: "2024-02-21", name: "results", icon:  "Mic" }
            
        ]

    },

    awards : {

        about : {
            wrapperProps: {
                label: "awards.about.stats"
            },
            items : [
                {
                    image:
                    'https://res.cloudinary.com/ecommerceberlin/image/upload/v1692708940/Awards%20website/INFOGRAFIKA-aboutus-01-01.svg',
                    // 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1663079096/EGA22%20photo/wykresy_2023_NumberOfContestVotersmall.svg',
                //    'https://res.cloudinary.com/eventjuicer/image/upload/v1631743692/ega/ega_2022_numberOfContestVoters.svg',
                
                },

                {
                    image:
                      'https://res.cloudinary.com/ecommerceberlin/image/upload/v1692708940/Awards%20website/INFOGRAFIKA-aboutus-02-01.svg',
                    //   'https://res.cloudinary.com/ecommerceberlin/image/upload/v1663079096/EGA22%20photo/wykresy_2023_NumberOfContestParticipants.svg',
                    //  'https://res.cloudinary.com/eventjuicer/image/upload/v1631743692/ega/ega_2022_numberOfContestParticipants.svg',
                   
                  },

                  
                {
                  image:
                    'https://res.cloudinary.com/ecommerceberlin/image/upload/v1692708940/Awards%20website/INFOGRAFIKA-aboutus-03-01.svg',
                    // 'https://res.cloudinary.com/eventjuicer/image/upload/v1604003805/ega/ega_2021_awardsCeremonyGuests.svg',
                },
               
                {
                  image:
                    'https://res.cloudinary.com/ecommerceberlin/image/upload/v1692708940/Awards%20website/INFOGRAFIKA-aboutus-04-01.svg',
                    // 'https://res.cloudinary.com/eventjuicer/image/upload/v1604003805/ega/ega_2021_promotion.svg',
                },
               
            ]
        },

        become_a_juror: {

            wrapperProps : {
                label: "juror.form.title",
            },
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
            ticket_id : 2587,
            cc: "awards+juror@ecommerceberlin.com",
            email_template : "ega-juror-submission-confirmation",
            background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",

        },

        attend_a_party: {
            wrapperProps: {
                label : "party.form.title",
            },  
            baseLabel: "juror",
            legend: "party.form.intro",
            fields : [
              {name: "email", required: true},
              {name: "fname", required: true},
              {name: "lname", required: true},
              {name: "cname2", required: true},
              {name: "position", required: true},
              {name: "phone", required: true},
              {name: "company_website", required: true},
              {
                name: "participant_type",
                required: true,
                options: [
                    "ega_participant",
                    "ebe_exhibitor",
                    "ega_sponsor",
                    "jury_ambassador",
                    "speaker",
                    "media",
                    "association",
                    "other"
                ]
            },
            ],
            start : ['fname', 'lname', 'cname2'],
            ticket_id : 2576,
            cc: "awards+party@ecommerceberlin.com",
            email_template : "ega-party-submission-confirmation",
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

            wrapperProps: {
                secondaryLabel : "awards.register.title",
            },
            baseLabel: "awards",
            fields : [
              {name: "email", required: true},
              {name: "fname", required: true},
              {name: "lname", required: true},
              {name: "cname2", required: true},
            //   {name: "position", required: true},
              {name: "nip", required: true},
              {name: "company_address", required: true},
              {name: "project_name", required: true},
              {name: "awards_category", required: true, options: "categories"},
              {name: "phone", required: true},
              {name: "company_website", required: true},
              {name: "accept", required: true, type: "confirm"}
            ],

            start : ['cname2', 'project_name', 'awards_category'],
            ticket_id : 2586,
            cc: "awards+submission@ecommerceberlin.com",
            email_template : "ega-submission-confirmation",
            background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",

        },

        benefits: {

          
            baseLabel: "awards.benefits",
            label: "awards.benefits.title",
            secondaryLabel: "awards.benefits.description",
            typography: "subtitle",
            dense: true,
            iconColor: "black",
            iconSize: "70",
            items: [

                {
                    icon : "TrendingUp",
                    label :  'celebrate',
                },

                {
                    icon : "People",
                    label :  'networking',
                },

                {
                    icon : "VerifiedUser",
                    label :  'confidence',
                }
            ]
        },

        categories : {

            label: "awards.categories.title",
            secondaryLabel: "awards.categories.description",
            baseLabel: "awards.categories",
            typography: "subtitle",
            dense: true,
            iconColor: "black",
            iconSize: "70",
            items: [

                {
                    icon : "ShoppingCart",
                    label :  'sales',
                    buttons: [{
                        href: "/vote/categories/sales",
                        label: "common.vote_now"
                    }]
                },
            
                {
                    icon : "Forum",
                    label : 'communication',
                    buttons: [{
                        href: "/vote/categories/communication",
                        label: "common.vote_now"
                    }]
                },

                {
                    icon : "EmojiEmotions",
                    label : 'customers_experience',
                    buttons: [{
                        href: "/vote/categories/customers_experience",
                        label: "common.vote_now"
                    }]
                },                

                {
                    icon : "Public",
                    label : 'expansion',
                    buttons: [{
                        href: "/vote/categories/expansion",
                        label: "common.vote_now"
                    }]
                },

                {
                    icon : "LocalShipping",
                    label : 'logistics',
                    buttons: [{
                        href: "/vote/categories/logistics",
                        label: "common.vote_now"
                    }]
                },

                {
                    icon : "ForwardRounded",
                    label : 'fulfillment_optimization',
                    buttons: [{
                        href: "/vote/categories/fulfillment_optimization",
                        label: "common.vote_now"
                    }]
                },

                {
                    icon : "Storefront",
                    label :  'platform',
                    buttons: [{
                        href: "/vote/categories/platform",
                        label: "common.vote_now"
                    }]
                },
            
                {
                    icon : "MonetizationOn",
                    label : 'payment',
                    buttons: [{
                        href: "/vote/categories/payment",
                        label: "common.vote_now"
                    }]
                },
            
                {
                    icon : "Assessment",
                    label : 'analytics',
                    buttons: [{
                        href: "/vote/categories/analytics",
                        label: "common.vote_now"
                    }]
                },

                {
                    icon : "People",
                    label : 'agency',
                    buttons: [{
                        href: "/vote/categories/agency",
                        label: "common.vote_now"
                    }]
                },

                {
                    icon : "ShoppingBasket",
                    label : 'omnichannel',
                    buttons: [{
                        href: "/vote/categories/omnichannel",
                        label: "common.vote_now"
                    }]
                },

                // {
                //     icon : "Computer",
                //     label : 'security_it',
                //     buttons: [{
                //         href: "/vote/categories/security_it",
                //         label: "common.vote_now"
                //     }]
                // },

                {
                    icon : "NewReleases",
                    label : 'innovation',
                    buttons: [{
                        href: "/vote/categories/innovation",
                        label: "common.vote_now"
                    }]
                }                


            ]
        },



    },

    profile_editor: {

        label: "awards.update.title",
        baseLabel: "awards",
        legend: "awards.update.description",

        roles: {
            
            contestant_company : {

                preview: [
                    {typography: "h5", field: "cname2"},
                    {typography: "subtitle1", field: "project_name"}
                ],
    
                fields: [
                    {name: "project_description", required: true},
                    {name: "logotype", required: true},
                    {name: "difference", long: true, required: true},
                    {name: "innovations", long: true, required: true},
                    // {name: "testimonials", long: true},
                    {name: "case_study", long: true},
                    {name: "confidential", long: true},
                    {name: "video"},
                    {name: "company_website"},
     
                ],
    
    
          
             actionFinishedProps: {
                action : "profile_updated", 
                category : "visitors", 
                // label : "method",
                // value : ""
             },
    
            },
    
            fallback: {
                source: "contestant_company"
            }
    
        },
    },

    awardsphotostream : {

        wrapperProps: {
            label : "awards.gallery.title"
        },

        cols: 12,
        
        items : [

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710428717/EGA24/photos%20for%20www/i-hs4vJj7-X3.jpg", cols: 8},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710428731/EGA24/photos%20for%20www/i-Sd9jzLS-X3.jpg", cols: 4},


            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710428391/EGA24/photos%20for%20www/i-tx38gTd-X3.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710428725/EGA24/photos%20for%20www/i-HW5DmVb-X3.jpg", cols: 6},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710428727/EGA24/photos%20for%20www/i-MqmmHDN-X3.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710428732/EGA24/photos%20for%20www/i-6FCKW7J-X3.jpg", cols: 6},

  
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710428723/EGA24/photos%20for%20www/i-DrwPSBj-X3.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710428723/EGA24/photos%20for%20www/i-xFTGjz2-X3.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710428722/EGA24/photos%20for%20www/i-FNnfzDd-X3.jpg", cols: 4},


            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710428718/EGA24/photos%20for%20www/i-6phWm7H-X3.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710428730/EGA24/photos%20for%20www/i-tMV4dxd-X3.jpg", cols: 6},

            
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710428717/EGA24/photos%20for%20www/i-JDwnsg9-X3.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710428716/EGA24/photos%20for%20www/i-WmZgcSV-X3.jpg", cols: 6},


            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012207/ega/beer.jpg", cols: 3},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012209/ega/audience1.jpg", cols: 3},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012208/ega/photowall2.jpg", cols: 6},


            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012184/ega/award1.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012217/ega/category_winner2.jpg", cols: 6},


            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012216/ega/MC_stage.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012215/ega/party_screens2.jpg", cols: 6},

  
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012221/ega/patio3.jpg", cols: 4},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012219/ega/venue3.jpg", cols: 4},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012183/ega/beer2.jpg", cols: 4},


            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012196/ega/bimmer_mainscreen.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012193/ega/venue2.jpg", cols: 6},

            
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012179/ega/MC_audience.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012191/ega/photowall.jpg", cols: 6},

            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012212/ega/MC_stage2.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012177/ega/photo_wall.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012177/ega/award3.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012169/ega/patio1.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012213/ega/category_winner.jpg", cols: 3},  
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012204/ega/party_screens.jpg", cols: 6},        
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012203/ega/patio2.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012197/ega/venue1.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012192/ega/award2.jpg", cols: 6},

        ]
    },



};


export default settings
 