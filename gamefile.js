const max=prompt("Enter the max no");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");

while(true)
{
    if(guess=="quit")
    {
        console.log("user quit");
        break;
    }
    if(guess==random)
    {
        console.log("You are right!! and random no was",random);
        break;
    }
    else if(guess<random)
    {
        guess=prompt("Guess number is too Small !! Please try again!");
    }
    else{
        guess=prompt("Guess number is too Large !!Please try again!");
    }
}