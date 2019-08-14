let QuoteArray = ["Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along. -George Herbert", 
"You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand. -Woodrow Wilson", 
"It does not matter how slowly you go as long as you do not stop. -Confucius", 
"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. -Norman Vincent Peale"];

let q = Math.floor(Math.random() * QuoteArray.length);
let quoteS= document.getElementById("quote");
// console.log(i);

quoteS.innerHTML = "Daily Quote: "+ QuoteArray[q];

let PoetryArray = ["Send a drop of kindness, And see a happy face. A drop of kindness goes real far, It may even reach outer space. Send a drop of love, And feel a loving embrace. It feels so good to feel like, You are in the right place. Send a drop of hope, But be that shinning star. Hope is wonderful to have, But sometimes you cant sit away so far. Send a drop of faith, With a single prayer. And God will show the way, As faith is always there.", 
"Every soul that touches yours -Be it the slightest contact -Get there from some good; Some little grace; one kindly thought; One aspiration yet unfelt; One bit of courage, For the darkening sky; One gleam of faith, To brave the thickening ills of life; One glimpse of brighter skies - To make this life worthwhile, And heaven a surer heritage.", 
"Cuteness comes in many forms, And seen on every day. If you want to see something cute, Open your eyes and filter out the gray. Too many of us are cuteness blind, And see only shades of gray. We allow ourselves to become too busy, And leave no room for play. When you allow happier shades to come through, And you start to look for the cute. You'll realize all you have been missing, As cute should never be put on mute. To see a life with so much cuteness, Is to see a life through the eyes of your heart. And our heart is full of love and kindness, It would be like seeing only the good parts."];
let p = Math.floor(Math.random() * PoetryArray.length);
let poemS= document.getElementById("poems");
// console.log(i);

poemS.innerHTML = "Daily Poems: "+ PoetryArray[p];