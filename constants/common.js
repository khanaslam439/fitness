export const TRAINER_LIST = [{
    id:101,
    name: 'Reheman sharif',
    type: 'Yoga Trainer',
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
    filters:[
        {type:'level', value:'Expert'},
        {type:'session', value:'2 sessions'}, 
        {type:'distance',value:'20km away'},
        {type:'lang', value: ['English','Hindi']},
        {type:'rating', value: 2.5},
        {type:'mode', value: 'Online'}
    ],
    profileLink: '',
}]

export const ADV_FILTER = [
    {type:'gender', data: ['any', 'male','female']},
    {type:'level', data: ['Beginner',' Intermediate', 'Expert']},
    {type:'language', data: ['English', 'Hindi', 'Other']}
]