// click event
var started = false;
$("#btn").on("click", function () {
    loveCalculator();
});
function loveCalculator() {
    var tOne = $("#t-one").val();
    var tTwo = $("#t-two").val();
    var randomPercentage = Math.floor(Math.random() * 101);
    if (!started) {
        if (tOne.length > 2 && tTwo.length > 2) {
            if (randomPercentage < 30) {
                $("#results").text(
                    tOne + " and " + tTwo + " are  Literal Enemies. 😈"
                );
            }
            if (randomPercentage < 50) {
                $("#results").text(
                    tOne + " and " + tTwo + " are " + randomPercentage + " % in love, Love Na Scam!" +
                    "!! 😂"
                );
            } else if (randomPercentage > 50 && randomPercentage < 75) {
                $("#results").text(
                    tOne + " and " + tTwo + " are " + randomPercentage + " % in love, Y'all are in " +
                    "Love. 😻"
                );
            } else if (randomPercentage > 75) {
                $("#results").text(
                    tOne + " and " + tTwo + " are " + randomPercentage + " % in love, Y'all are rea" +
                    "lly in Love. ❤️"
                );
            }
            $("#t-one").val(" ");
            $("#t-two").val(" ");
        }
    }
}

// Bmi calculator
$("#btn1").on("click", function () {
    bmiCalculator();
});
function bmiCalculator() {
    var tOne1 = $("#t-one1").val();
    var tTwo2 = $("#t-two2").val();
    var bmi = Math.floor(tOne1 / (tTwo2 * tTwo2));
    if (tOne1.length > 1 && tTwo2.length > 1) {
        if (bmi < 18.5) {
            $("#results1").text(
                "Your BMI is " + bmi + ", so you are underweight."
            );
        } else if (bmi > 18.5 && bmi <= 24.9) {
            $("#results1").text(
                "Your BMI is " + bmi + ", so you have a normal weight."
            );
        } else {
            $("#results1").text(
                "Your BMI is " + bmi + ", so you are overweight."
            );
        }
        $("#t-one1").val(" ");
        $("#t-two2").val(" ");
    }
}

// leapYear calculator
$("#btn2").on("click", function () {
    leapYearCalculator();
});
function leapYearCalculator() {
    var tOne2 = $("#t-one2").val();
    var leapYear = tOne2 % 4;
    var noleapYear = tOne2 % 100;
    var leapYear1 = tOne2 % 400;
    if (tOne2.length > 2) {
        if (leapYear === 0 && noleapYear > 0 && leapYear1 > 0) {
            $("#results2").text("Leap year.");
        } else {
            $("#results2").text("Not leap year.");
        }
    }
    $("#t-one2").val(" ");
}

// language translator

$("#btnT").on("click", function () {
    translateToMorse();
});
$("#btnT1").on("click", function () {
    translateFromMorse();
});
const secretLanguageNew = {
    "a": "@3",
    "b": "#@",
    "c": "%ˆ",
    "d": "(ˆ)",
    "e": ")&",
    "f": "$%",
    "g": "#$",
    "h": "!@$",
    "i": "(ˆ()",
    "j": "@$ˆ",
    "k": "!#%",
    "l": "&$ˆ",
    "m": ")ˆ$",
    "n": "(ˆ&)",
    "o": ")&*",
    "p": ")ˆ$&",
    "q": ")ˆ*$&",
    "r": "*%%*",
    "s": "%ˆ.",
    "t": "(%(&))",
    "u": "*%(%",
    "v": "*ˆ(&%*",
    "w": "*(&%",
    "x": "ˆ*(ˆ*",
    "y": "()ˆ(&%)",
    "z": "*ˆ(ˆ*$",
    " ": "$",
    "'": "5d",
    '"': "@$",
    ".": "±",
    ",": "@",
    "0": "(&*(*ˆ%))",
    "1": "&(*ˆ",
    "2": ".*(%*",
    "3": ")(ˆ(%*&ˆ$",
    "4": "(&(&*$))",
    "5": "(ˆ(&%)",
    "6": "(*ˆ&)",
    "7": "ˆ(*%&",
    "8": "*ˆ&%*",
    "9": "*ˆ&*%&"
};
function translateToMorse() {
    var tTrans = $("#t-trans").val();
    tTrans = tTrans.toLowerCase();
    let translatedMessage = "";
    for (let i = 0; i < tTrans.length; i++) {
        translatedMessage += secretLanguageNew[tTrans[i]] + " ";
    }
    $("#resultstr").text(" " + translatedMessage);
}
function translateFromMorse() {
    var tTrans = $("#t-trans1").val();
    tTrans = tTrans.split(" ");
    let translatedMessage = "";
    for (let i = 0; i < tTrans.length; i++) {
        for (const [key, value] of Object.entries(secretLanguageNew)) {
            if (value === tTrans[i]) {
                translatedMessage += key;
            }
        }
    }
    $("#resultstr1").text(" " + translatedMessage);
}