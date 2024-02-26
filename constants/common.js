export const TRAINER_LIST = [{
    id:101,
    name: 'Reheman sharif',
    type: 'Yoga Trainer',
    plan:'silver',
    filters:[
        {type:'level', value:'Expert'}, 
        {type:'session', value:'20 sessions'}, 
        {type:'distance', value:'20km away'},
        {type:'rating', value: 4.5},
        {type:'mode', value: 'Society Club'},
        {type:'lang', value: ['English','Telugu']}
    ],
    profileLink: '',
},
{
    id:102,
    name: 'Sandhya',
    type: 'Kids Trainer',
    plan:'gold',
    filters:[
        {type:'level', value:'Intermediate'}, 
        {type:'session', value:'25 sessions'}, 
        {type:'distance', value:'20km away'},
        {type:'rating', value: 4},
        {type:'mode', value: 'Online'},
        {type:'lang', value: ['English','Gujrati']}
    ],
    profileLink: '',
},
{
    id:103,
    name: 'Ishita Sahu',
    type: 'Online Trainer',
    plan:'silver',
    filters:[
        {type:'level',value:'Beginner'}, 
        {type:'session', value:'12 sessions'}, 
        {type:'distance', value:'2km away'},
        {type:'rating', value: 3.7},
        {type:'mode', value: 'Òffline'},
        {type:'lang', value: ['English','Hindi']}
    ],
    profileLink: '',
},
{
    id:104,
    name: 'Arush Kumar',
    type: 'Online Trainer',
    plan: 'silver',
    filters:[
        {type:'level',value:'Expert'}, 
        {type:'session', value:'4 sessions'}, 
        {type:'distance', value:'10km away'},
        {type:'rating', value: 4.2},
        {type:'mode', value: 'Club Society'},
        {type:'lang', value: ['English','Hindi']}
    ],
    profileLink: '',
},
{
    id:105,
    name: 'Nitika Ahuja',
    type: 'Fitness & Nutrition',
    plan:'gold',
    filters:[
        {type:'level',value:'Beginner'}, 
        {type:'session', value:'18 sessions'}, 
        {type:'distance', value:'5km away'},
        {type:'lang', value: ['English','Hindi']},
        {type:'rating', value: 3},
        {type:'mode', value: 'At home'}
    ],
    profileLink: '',
},
{
    id:106,
    name: 'Sanjay Rathod',
    type: 'Gym Trainer',
    plan:'platinum',
    filters:[
        {type:'session', value:'2 sessions'}, 
        {type:'distance',value:'20km away'},
        {type:'rating', value: 2.5},
        {type:'mode', value: 'Online'}
    ],
    profileLink: '',
}]

export const ADV_FILTER = [
    {type:'categories', data: ['Fitness & Nutrition', 'Personal Training','Yoga Classes', 'Fit kids', 'Zumba Dance']},
    {type:'level', data: ['Beginner',' Intermediate', 'Expert']},
    {type:'mode', data: ['Online', 'At Home', 'Society Club']}
]

export const BLOGS = [{
    type: 'video',
    title: 'How to Maximize Time Spent at the Gym',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
    imgUrl:'/assets/images/gym/blog1.jpg',
    link: '1'
},{
    type: 'recipe',
    title: 'Today is the Best Day to Start Training',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
    imgUrl:'/assets/images/gym/blog2.jpg',
    link: '2'
},{
    type: 'blog',
    title: 'Simple Condition for all Around Fitness',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
    imgUrl:'/assets/images/gym/blog3.jpg',
    link: '3'
},{
    type: 'blog',
    title: 'How to reduce belly fat',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
    imgUrl:'/assets/images/gym/blog2.jpg',
    link: '4'
},{
    type: 'recipe',
    title: '10 ways to maximize your immunity',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
    imgUrl:'/assets/images/gym/blog1.jpg',
    link: '5'
},{
    type: 'recipe',
    title: '5 best food to increase blood flow',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
    imgUrl:'/assets/images/gym/blog3.jpg',
    link: "6"
},{
    type: 'blog',
    title: 'Top excersize to increase height naturally',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
    imgUrl:'/assets/images/gym/blog2.jpg',
    link: '7'
}]


export const PLANS = [
    {
        id: 1,
        name: 'Monthly Plan',
        cost: 6000
    },
    {
        id: 2,
        name: 'Quaterly Plan',
        cost: 7500
    },
    {
        id: 3,
        name: 'Half Yearly Plan',
        cost: 9000
    },
    {
        id: 4,
        name: 'Yearly Plan',
        cost: 12000
    },
]