const quotes = [{
    quote: ` The Best Way To Get Started Is To Quit Talking And Begin Doing.`,
    author:` – Walt Disney`
},{
    quote: ` The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.`,
    author: `– Winston Churchill`
},{
    quote:` Don’t Let Yesterday Take Up Too Much Of Today.` ,
    author: `– Will Rogers`
},{
    quote:` It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.` ,
    author:`– Vince Lombardi` 
},{
    quote: ` Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.`,
    author: `– Og Mandino`
},{
    quote:` We May Encounter Many Defeats But We Must Not Be Defeated.` ,
    author: `– Maya Angelou`
},{
    quote: ` The Man Who Has Confidence In Himself Gains The Confidence Of Others.`,
    author: `– Hasidic Proverb`
},{
    quote: ` Creativity Is Intelligence Having Fun.`,
    author: `– Albert Einstein`
},{
    quote: ` Reading Is To The Mind, As Exercise Is To The Body.` ,
    author: ` – Brian Tracy`
},{
    quote:` The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle.` ,
    author: ` – Steve Jobs`
}
]
const quoteBtn = document.getElementById('btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})