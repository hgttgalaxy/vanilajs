const quotes = [
{
    quote: "지겨워도 해라. 그래야 안굶는다",
    author: "김걸",

},
{
    quote: "인간이 어찌 오늘만 보고 살리오",
    author: "김걸",
},
{
    quote: "밥만먹고 살래 술도 마시고 살래",
    author: "김걸",
},
{
    quote: "잠자는 시간도 아껴서 해야할판에 게임이나 하고",
    author: "김걸",
},
{
    quote: "통장잔고봐라 잠이 오나",
    author: "김걸",
},
{
    quote: "여유있는 삶은 지금부터도 늦지 않았다",
    author: "김걸",
},
{
    quote: "시골가서 혼자 살자. 그럴려면 코딩해야한다",
    author: "김걸",
},
{
    quote: "잘먹고 잘살고 싶다. ",
    author: "김걸",
},
{
    quote: "하루에 한시간이라도 꾸준히가 중요하다",
    author: "김걸",
},
{
    quote: "20년을 후회했다. 오늘은 하자",
    author: "김걸",
},

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

