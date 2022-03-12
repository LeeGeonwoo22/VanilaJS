const quotes = [
    {
        quote : "실생활에 맞딱드리게 되는 문제의 해결책이 바로 아이디어의 원천이다",
        author : "미상",
    },
    {
        quote : "인생이란 끊임없이 콤플렉스를 극복해가는 과정이다.",
        author : "공병호",
    },
    {
        quote : "판단력을 기르려면 뇌의 하드웨어 성능을 높여주는 것 만으로는 의미가없다. 뇌에 양질의 '소프트웨어'를 주입함으로써 비로소 높은 성능의 '뇌 하드웨어'가 탄생하는 것이다.",
        author : "미상",
    },
    {
        quote : "현상은 복잡하지만 본질은 단순하다",
        author : "아리스토텔레스",
    },
    {
        quote : "좋은 습관들이 하나가 되어 시너지를 일으킬 때 '아우라'가 나온다.",
        author : "미상",
    },
    {
        quote : "지식은 사회적이며, 지혜는 개인적이고 지식은 전승이 가능하지만, 지혜는 가르칠 수 없다.",
        author : "미상",
    },
    {
        quote : "자신의 잠재력을 발견하는 것은 `다양한 체험` 뿐이다. 하지만 모든일일 직접 체험하는 것은 불가능하며 독서를 통해 다양한 분야를 간접체험 할 수 있다. ",
        author : "미상",
    },
    {
        quote : "지금의 일이 아닌 다른일에 도전한다는 판단이 선다고 해도 지금 당장 현재를 버리고 뛰어들것이 아니라 현재를 바탕으로 새로운 일을 위한 준비를 충실히 한 다음 선택의 상황에 서라고 조언한다.",
        author : "자기혁명, 시골의사 박경철",
    },
    {
        quote : "학이불사즉망, 사이불학즉태. 배우기만하고 생각치 않으면 어리석어지고, 생각하기만하고 배우지않으면 위태로워진다.",
        author : "논어, 공자",
    },
    {
        quote : "자꾸 생각나는 `나쁜기억`은 뇌가 당신에게 할말이 있다는 뜻이다. 당신이 문제를 회피하거나 상처로부터 도망칠때 뇌는 되풀이해서 나쁜기억을 떠올린다.",
        author : "프로이트",
    },
    {
        quote : "접촉하는 두 개체는 서로 흔적을 주고받는다.",
        author : "로카르의 법칙",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[1]);
// Math.round. cecil, floor 중에 하나를 쓸것임.
// const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;