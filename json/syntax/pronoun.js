let pronounQueArr = [
    {
        "que": "David left __ raincoat in the room and went out",
        "options": [
            "his",
            "him",
            "theirs",
            "them"
        ],
        "answer": 0,
        "translate": "David 把雨衣忘在了房间里然后出去了",
        "explain": "David 是一个人，所以C、D排除,raincoat雨衣是一个名词，所以要选形容词性物主代词his，选A",
        "other": "在学位英语考试中，left/leave 70% 都不是指离开，而是留下，要特别注意"
    }
];

function setId() {
    let idIndex = 0;
    for(let i = 0;i < pronounQueArr.length - 1;i++) {    
        pronounQueArr[i].fileId = idIndex++;
    }
}
setId()