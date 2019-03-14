const allMails=[{
    id:1,
    createOn:"02/02/2019",
    subject:"challenge 1 submission",
    message:"Challenge 1 submission",
    senderId: 2,
    receiverId:1,
    parentMessageId:2,
    status: "received"
    },{
        id:2,
    createOn:"03/02/2019",
    subject:"hello postman",
    message:"Challenge 3 submission",
    senderId: 1,
    receiverId:2,
    parentMessageId:3,
    status: "sent"
    },{
        id:2,
    createOn:"03/02/2019",
    subject:"hello postman",
    message:"Challenge 3 submission",
    senderId: 2,
    receiverId:1,
    parentMessageId:3,
    status: "received"
    },{
        id:3,
    createOn:"02/02/2019",
    subject:"challenge 1 submission",
    message:"Challenge 1 submission",
    senderId: 1,
    receiverId:2,
    parentMessageId:3,
    status: "unread"
    }, {   id:4,
    createOn:"02/02/2019",
    subject:"challenge 1 results",
    message:"Challenge 1 results : 80%",
    senderId: 1,
    receiverId:2,
    parentMessageId:2,
    status: "sent"
    },{
        id:5,
    createOn:"03/02/2019",
    subject:"challenge 3 results",
    message:"Challenge 3 results: 77%",
    senderId: 2,
    receiverId:1,
    parentMessageId:3,
    status: "sent"
    },{
        id:6,
    createOn:"02/02/2019",
    subject:"challenge 1 results",
    message:"Challenge 1 results: 60%",
    senderId: 1,
    receiverId:2,
    parentMessageId:3,
    status: "sent"
    },{id:7,
    createOn:"02/12/2019",
    subject:"test 1 submission",
    message:"Challenge 1 submission",
    senderId: 1,
    receiverId:2,
    parentMessageId:2,
    status: "unread"
    },{
        id:8,
    createOn:"03/12/2019",
    subject:"test 3 submission",
    message:"Challenge 3 submission",
    senderId: 2,
    receiverId:1,
    parentMessageId:3,
    status: "unread"
    },{
        id:9,
    createOn:"12/12/2019",
    subject:"test 1 submission",
    message:"Challenge 1 submission",
    senderId: 2,
    receiverId:2,
    parentMessageId:3,
    status: "unread"
    }
]

export default allMails;