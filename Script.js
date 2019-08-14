let QuoteArray = ["Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along. -George Herbert", 
"You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand. -Woodrow Wilson", 
"It does not matter how slowly you go as long as you do not stop. -Confucius", 
"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. -Norman Vincent Peale"];

let q = Math.floor(Math.random() * QuoteArray.length);
let quoteS= document.getElementById("quote");
// console.log(i);

quoteS.innerHTML = "Daily Quote: "+ QuoteArray[q];

let PoetryArray = ["uh", "hi", "I guess"];
let p = Math.floor(Math.random() * PoetryArray.length);
let poemS= document.getElementById("poems");
// console.log(i);

poemS.innerHTML = "Daily Poems: "+ PoetryArray[p];