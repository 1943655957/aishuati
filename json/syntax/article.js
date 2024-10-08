let articleQueArr = [
    {
        "que": "__ singer and __ dancer is also gooad a drawing",
        "options": [
            "The;a",
            "The;the",
            "a;a",
            "The;/"
        ],
        "answer": 3,
        "translate": "这位歌手兼舞者对绘画也很擅长",
        "explain": "关注点在dancer 后面的 is，说明是单数，只能有一个冠词，因此选D"
    },
    {
        "que": "I went to __ London yesterday and saw __ strange old man and a little girl, begging by the roadside",
        "options": [
            "/;a",
            "a;/",
            "/;the",
            "the;/"
        ],
        "answer": 0,
        "translate": "我昨天去伦敦看到一个陌生的老人和一个小女孩，他们在街上乞讨",
        "explain": "城市前面不能加冠词，排除BD，old man 与 a little girl通过and连接，and 前后一致，所以也需要是a，选A"
    },
    {
        "que": "It was __ winter night and a pale moon hung low in __ sky",
        "options": [
            "a;a",
            "the;the",
            "a;the",
            "the;a"
        ],
        "answer": 2,
        "translate": "在冬季的夜晚，暗淡的月亮悬挂在天空中",
        "explain": "winter night and a pale moon 通过 and 连接，前后需要一致，所以第一空填入a,排除B、D，sky是独一无二的，需要使用the，所以答案选C"
    },
    {
        "que": "I am not sure whether New York is __ biggest city in __ world or not",
        "options": [
            "a;a",
            "a;the",
            "the;the",
            "the;a"
        ],
        "answer": 3,
        "translate": "我不确定纽约是不是世界上最大的城市",
        "explain": "biggest 是最高级，前面用the，排除A、B，world 是独一无二的，也用the，答案选C"
    },
    {
        "que": "__ Yellow River is known to be __ second longest river in China",
        "options": [
            "The;the",
            "/;/",
            "The;/",
            "/;the"
        ],
        "answer": 0,
        "translate": "众所周知，黄河是中国第二大长河",
        "explain": "江河湖海山脉前面用The，B、D排除，second longest 最高级，前面用the，选A"
    },
    {
        "que": "Shanghai is __ biggest city in __ China in terms of population",
        "options": [
            "the;the",
            "the;/",
            "/;the",
            "/;/"
        ],
        "answer": 1,
        "translate": "上海是中国人口最多的城市",
        "explain": "biggest 最高级前面用the,排除C、D，国家（非全称）、城市前面不加冠词，所以选B"
    },
    {
        "que": "I went to __ Shanghai yesterday. On __ train I met a famous pop star",
        "options": [
            "the;/",
            "/;the",
            "the;the",
            "/;/"
        ],
        "translate": "我昨天去了上海，在这辆火车上我遇到了一位著名的摇滚歌手",
        "explain": "城市前面不加冠词，排除A、C，根据题目翻译理解，是在特指遇到明星的那辆火车上，用the，所以选B"
    },
    {                
        "que": "__ Hong Kong is one of __ busiest seaports in the world",
        "options": [
            "The;the",
            "/;/",
            "The;/",
            "/;the"
        ],
        "translate": "香港是全世界最繁忙的港口之一",
        "answer": 3,
        "explain": "城市前面不加冠词，排除A、C，busiest最繁忙的是最高级，用the，所以选D"
    },
    {                
        "que": "Beijing, as a capital of __ People's Republic of China, enjoys __ diverse range of people cultures",
        "options": [
            "the;the",
            "a;a",
            "the;a",
            "a;the"
        ],
        "answer": 2,
        "translate": "北京，作为中华人民共和国的首都，拥有各种各样的人和文化",
        "explain": "国家的全称（非简称）,冠词要用the，排除B、D，a range of是固定搭配，所以选C",
        "other": "a range of 一系列；diverse：多种多样的"
    },
    {
        "que": "Yesterday Mr.Smith bought __ English dictionary while I got a Russian novel in the bookstore",
        "options": [
            "a",
            "an",
            "the",
            "/"
        ],
        "answer": 1,
        "translate": "昨天斯密斯先生买了一本英语字典，而我在书店买了一本俄语小说",
        "explain": "一本英语字典，排除C、D，以元音字母开头的用an，选B"
    },
    {
        "que": "Becoming __ American citizen take a lot of work",
        "options": [
            "/",
            "an",
            "a",
            "the"
        ],
        "answer": 1,
        "translate": "成为美国公民需要付出很多努力",
        "explain": "American citizen,美国公民，A开头，元音字母，用an，选B",
        "other": "注意：不要误选A选项，American是美国人，不是美国，America 才是美国，而且这句话冠词修饰的是American citizen，美国公民，所以不能认为是修饰美国这个国家而不加冠词"
    },
    {
        "que": "__ Pacific Ocean is __ very large sea to west of North and south America,and to the east of Asia and Australia",
        "options": [
            "The;a",
            "A;the",
            "The;the",
            "A;a"
        ],
        "answer": 0,
        "translate": "太平洋是一个巨大的海洋，在美洲西部，亚洲和澳大利亚的东部",
        "explain": "特指的江河湖海用the，Pacific Ocean 不认识没关系，大写字母说明是专有名词，后面又有large sea，所以盲猜是个海，因此用the Pacific Ocean,排除B、D，后面的large sea一个大海，没有特指，因此用a，选A"
    },
    {
        "que": "The education of __ young is always __ hot and serious topic",
        "options": [
            "/;/",
            "the;a",
            "/;the",
            "the;the"
        ],
        "answer": 1,
        "translate": "年轻人的教育问题总是一个热门而严肃的话题",
        "explain": "The 加 形容词代表一类人，例如 the poor 穷人,the rich 富人,所以这里是 the young 年轻人，排除A、C，a topic一个话题，用a，选B"
    },
    {
        "que": "It is known that __ Galieo invented __ telescope",
        "options": [
            "the;the",
            "/;the",
            "a;/",
            "the;a"
        ],
        "answer": 1,
        "translate": "总所周知伽利略发明了望远镜",
        "explain": "这题破题点是invented（发明），如果不认识就很难答题，知道invented是发明，那Galieo一定是个人的名字，只有人能发明，而人名是不加冠词的，不能说一个张三、一个李四，所以答案选定B选项",
        "other": "telescope:望远镜；发明一类事物应该用the，不能用a，如果说invented a telescope，发明了一个望远镜，那就很奇怪了，当然，本题通过第一空就可以秒杀出答案，不需要看第二空"
    },
    {
        "que": "__ Hongkong is often regarded as __ international centre for business,finance and tourism",
        "options": [
            "/;an",
            "An;/",
            "The;/",
            "/;the"
        ],
        "answer": 0,
        "translate": "香港经常被认为是商务、金融和旅游的国际中心",
        "explain": "城市前面不加冠词，直接排除B、C，international centre，i 开头，用an，选A",
        "other": "be regard as ，被认为"
    }
];
function setId() {
    let idIndex = 0;
    for(let i = 0;i < articleQueArr.length - 1;i++) {    
        articleQueArr[i].fileId = idIndex++;
    }
}
setId()