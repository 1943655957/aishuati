let moreMaxArr = [
    {
        "que": "Of all the girls in the class Jane studies the __",
        "options": [
            "hard",
            "harder",
            "hardest",
            "hardly"
        ],
        "answer": 2,
        "translate": "班级里的所有小女孩中，Jane学的最努力",
        "explain": "the + 最高级固定搭配。秒杀C"
    },
    {
        "que": "The fired fish we ate at the restaurant yesterday is delicious. I'd like to have it again even if it costs __",
        "options": [
            "as twice much",
            "twice as much",
            "much as twice",
            "as much twice"
        ],
        "answer": 1,
        "translate": "这个我们昨天在餐馆吃的烤鱼很美味。我还想再吃一次，尽管它价格涨到了2倍",
        "explain": "twice 倍数一定要放前面，秒杀B选项",
        "other": "倍数+比较级可以简化为A + B的形式，A就是倍数，B则是比较级，B有两种形式<br/>1、more than;2、as + 原级 + as"
    },
    {
        "que": "She is more beautiful than __ in the class",
        "options": [
            "any girl",
            "any other girl",
            "all the girls",
            "any girls"
        ],
        "answer": 1,
        "translate": "她比班里其他女生都要更漂亮",
        "explain": "more 是比较级，肯定是和班里的其他女生（除了自己以外比较），所以选其他女生，any other girl,B选项",
        "other": "注意不要错选C选项，对比肯定不能和自己比，所以要把自己排除，C选项是全班女生包括了自己，如果说他是班里最漂亮的女生，那才能选C"
    },
    {
        "que": "There are not __ students in Class One as in Class Two",
        "options": [
            "many as",
            "as many",
            "more as",
            "as more"
        ],
        "answer": 1,
        "explain": "这题其实不需要翻译，看题目【in Class One as in Class Two】有一个as，选项中也有as，说明考察点是as + 形容词或副词的原级 + as，所以直接秒杀B选项",
        "translate": "一班的学生和二班的学生不一样多"
    },
    {
        "que": "She speaks English __ than her brother does",
        "options": [
            "best",
            "better",
            "good",
            "well"
        ],
        "answer": 1,
        "translate": "她的英语比她哥哥说得好",
        "explain": "than，用比较级，秒杀B，没什么好说的"
    },
    {
        "que": "Everyone is getting old, but you look __ than ever",
        "options": [
            "younger",
            "youngest",
            "the youngest",
            "young"
        ],
        "answer": 0,
        "translate": "每个人都会变老，但是你看起来比别人更年轻",
        "explain": "than，用比较级，秒杀A，送分题"
    },
    {
        "que": "The blue whale is __ any other animal on earth",
        "options": [
            "no bigger than",
            "as big as",
            "the biggest of",
            "bigger than"
        ],
        "answer": 3,
        "translate": "蓝鲸比地球上其他动物都要大",
        "explain": "和地球上的其他动物做比较，用比较级，答案一定在A、D之间，A是没有其他动物大，D是比其他的大，从翻译的角度来说蓝鲸肯定是大，选D，如果不认识 blue whale 从考场思维来看，BCD都说他大，那应该是大，选D",
        "other": "as big as ：指一样大;<br/>blue whale: 蓝鲸"
    },
    {
        "que": "Your sister doesn't study as __ as you do",
        "options": [
            "hard",
            "hardly",
            "harder",
            "hardest"
        ],
        "answer": 0,
        "translate": "你的姐姐学习并不像你一样努力",
        "explain": "选项两边是as as，说明要填原型，C、D排除，这里就要考翻译了，A：努力，B：几乎不，选A"
    },
    {
        "que": "I have been to my uncle's farm many time. His farm __ the one you vistied last weekend",
        "options": [
            "three times larger",
            "three times large",
            "three times larger than",
            "three times as large"
        ],
        "answer": 2,
        "translate": "我去过我叔叔的农场很多次，他的农场比你上周末参观的那个大三倍",
        "explain": "这题不需要看题目，直接看选项就可以知道知识点是想考倍数+比较级，套用A+B的公式，ABCD都满足，无法排除，往后看，B有两种形式，一种as 原型 as， 一种more than，只有C选项符合more than，秒杀C"
    },
    {
        "que": "This new machine is technically far __ to the previous type",
        "options": [
            "superior",
            "junior",
            "senior",
            "equal"
        ],
        "answer": 0,
        "translate": "这个新机器在技术上比之前的要好",
        "explain": "看选项，都是比较级，空格后面跟个to，说明选项要选or结尾的（拉丁语的形容词）,排除D选项，剩下三个选项只能依靠翻译来做了，选A，比之前的好",
        "other": "superior to:更好<br />junior to:更年轻<br />senior to:更年长<br />equal to 相等"
    },
    {
        "que": "The harder you work, __ progress you will make in the future",
        "options": [
            "more",
            "the best",
            "the most",
            "the greater"
        ],
        "answer": 3,
        "translate": "你工作的越努力，将来就会越成功",
        "explain": "The harder 其实就是 the more ... the more的形式，所以选项中要填入一个the more，秒杀D选项"
    }
];
function setId() {
    let idIndex = 0;
    for(let i = 0;i < moreMaxArr.length - 1;i++) {    
        moreMaxArr[i].fileId = idIndex++;
    }
}
setId()