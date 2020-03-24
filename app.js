var questions = [
    {
        prompt:"What color are apples\n(a) Red/Green\n\
        (b) Purple\n(c) Orange",

        answer: "a"
    },

    {
        prompt:"What color are Bananas\n(a) Blue\n\
        (b) Purple\n(c) Yellow",

        answer: "c"
    },
    {
        prompt:"What color are strawberries\n(a) Purple\n\
        (b) Red\n(c) Pink",

        answer: "a"
    },
    {
        prompt:"What color are Grapes\n(a) Purple/Green\n\
        (b) Black\n(c) Rainbow",

        answer: "a"
    },

];

var score = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct");
    } else {
        alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length);