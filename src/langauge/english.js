import Prod from "./pro.json";
export const English = {
    "lang":"en",
    "title":{
        "gallery":"gallery",
        "about":"about-us",
        "contact":"contact-us",
        "car":"car refinish",
        "wood":"wood",
        "paint":"Decorative Paints",
        "where":"where to buy"

    },
    "navbar": [    

        {
            "id": 1,
            "text":"Home",
            "bath":"/"
        },
        {
            "id": 2,
            "text":"Products",
            "bath":"/products"
        },
        {
            "id": 3,
            "text":"News",
            "bath":"/news"
        },
        {
            "id": 4,
            "text":"Gallery",
            "bath":"/gallery"
        },
        {
            "id": 5,
            "text":"Contact",
            "bath":"/contact"
        },
        {
            "id": 6,
            "text":"About Us",
            "bath":"/about"
        }
    ],

    
    "megaProducts":[
        {
            "section":"Car Finish",
            "links":[
                {
                 "id":1,   
                "name":"Products",
                "bath":"/products/cars"
                },
                {
                    "id":2,   
                   "name":"Color Formule",
                   "bath":"/gallery"
                   },
                   {
                    "id":3,   
                   "name":"Color Matching",
                   "bath":"/gallery"
                   },
                   {
                    "id":4,   
                   "name":"Troubleshooting",
                   "bath":"/troubleshooting"
                   },
                   {
                    "id":5,   
                   "name":"Car FAQ",
                   "bath":"/questionCar"
                   }
            ]
        },
        {
            "section":"Wood",
            "links":[
                {
                    "id":1,   
                   "name":"Products",
                   "bath":"/products/woods"
                },
                {
                    "id":2,   
                   "name":"Wood FAQ",
                   "bath":"/questionWood"
                   }
            ]
        },
        {
            "section":"Decorative Paints",
            "links":[
                {
                 "id":1,   
                "name":"Products",
                "bath":"/products/paints"
                },
                {
                    "id":2,   
                   "name":"Decorative FAQ",
                   "bath":"/questionPaint"
                   }
            ]
        }

    ],

    "home":{
        "boxProducts":{
            "car":{
                "title":"Car Refinish",
                "why":["الافضل في مصر","الافضل في العالم"],
                "prag":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            "wood":{
                "title":"Woods",
                "why":["الافضل في مصر","الافضل في العالم"],
                "prag":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            "paint":{
                "title":"Paints",
                "why":["الافضل في مصر","الافضل في العالم"],
                "prag":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
        },

        "family":[
            {
                "type":"Kapci",
                "details":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "class":"one"

            },
            {
                "type":"Latico",
                "details":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "class":"two"

            },
            {
                "type":"Dima",
                "details":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "class":"three"

            }
        ],
        "testimonial":[ 
            {
                "name":"Mohamed",
                "content":"In one a highly competitive and rapidly developing market relying on research and technology, our vision is to be the market leader in Egypt for our full range of products and to become a global player in the field of car refinishes paints.As KAPCI COATINGS guiding principles are; Integrity, sustainability, investing in people and environmentally friendly products. It is committed to enhancing its services and performance and leading the market in Africa and the Middle East by 2012."
                
            },
            {
                "name":"Nasr",
                "content":"In two a highly competitive and rapidly developing market relying on research and technology, our vision is to be the market leader in Egypt for our full range of products and to become a global player in the field of car refinishes paints.As KAPCI COATINGS guiding principles are; Integrity, sustainability, investing in people and environmentally friendly products. It is committed to enhancing its services and performance and leading the market in Africa and the Middle East by 2012."
                
            },
            {
                "name":"Merna",
                "content":"In three a highly competitive and rapidly developing market relying on research and technology, our vision is to be the market leader in Egypt for our full range of products and to become a global player in the field of car refinishes paints.As KAPCI COATINGS guiding principles are; Integrity, sustainability, investing in people and environmentally friendly products. It is committed to enhancing its services and performance and leading the market in Africa and the Middle East by 2012."
                
            },
            {
                "name":"Ahmed",
                "content":"In four a highly competitive and rapidly developing market relying on research and technology, our vision is to be the market leader in Egypt for our full range of products and to become a global player in the field of car refinishes paints.As KAPCI COATINGS guiding principles are; Integrity, sustainability, investing in people and environmentally friendly products. It is committed to enhancing its services and performance and leading the market in Africa and the Middle East by 2012."
                
            },
            {
                "name":"Khaled",
                "content":"In five a highly competitive and rapidly developing market relying on research and technology, our vision is to be the market leader in Egypt for our full range of products and to become a global player in the field of car refinishes paints.As KAPCI COATINGS guiding principles are; Integrity, sustainability, investing in people and environmentally friendly products. It is committed to enhancing its services and performance and leading the market in Africa and the Middle East by 2012."
                
            },
        
         ],
         "experience":[
            "experience",
            "User Connected",
            "Branchs",
            "Products"
                 ],
         "title":{
             "product":"Products",
             "family":"Family",
             "gallery":"Gallery",
             "experience":"experience",
             "new":"what's new",
             "testimonial":"testimonial"
         }
    },
    
    "products":{  
                "cars":Prod.cars,
                "woods":Prod.woods,
                "paints":Prod.paints
              },
    
    "aboutUs":Prod.aboutUs,
    "contact":Prod.contact,
    "place":Prod.place,
    "question":Prod.question,
    "troubleshooting":Prod.troubleshooting
            
    
     
     
 }  
 