/*Universal Variables*/
var mood = "happy";
var genre = "edm";

/*Function uses the radio button question to save the user's specified genre. */
function getGenre(form) {
    mood = document.getElementById("pred").innerHTML.toLowerCase();

    if (document.getElementById("genre1").checked == true) {
        genre = "edm";
    } else if (document.getElementById('genre2').checked == true) {
        genre = "rap";
    } else if (document.getElementById('genre3').checked == true) {
        genre = "pop";
    } else if (document.getElementById('genre4').checked == true) {
        genre = "country";
    } else if (document.getElementById('genre5').checked == true) {
        genre = "alternative";
    }

    alterMoodSetQuestion();
}

/*This function determines how to set up the next question for the user. It writes the question
using the user's mood/genre and selects the radio button corresponding to the user's mood. */
function alterMoodSetQuestion() {
    document.getElementById("p3Question").innerHTML = "Would you like to listen to " 
    + mood + " " + genre + " music?";

    if (mood == "happy") {
        document.getElementById('alter').getElementsByTagName('label')[0].innerHTML = "Yes, remain happy.";
        document.getElementById('mood1').checked = true;
    } else if (mood == "sad") {
        document.getElementById('alter').getElementsByTagName('label')[1].innerHTML = "Yes, remain sad.";
        document.getElementById('mood1').checked = false;
        document.getElementById('mood2').checked = true;
    } else if (mood == "angry") {
        document.getElementById('alter').getElementsByTagName('label')[2].innerHTML = "Yes, remain angry.";
        document.getElementById('mood1').checked = false;
        document.getElementById('mood3').checked = true;
    } else if (mood == "surprised") {
        document.getElementById('alter').getElementsByTagName('label')[3].innerHTML = "Yes, I'd like to be surprised.";
        document.getElementById('mood1').checked = false;
        document.getElementById('mood4').checked = true;
    }

    document.getElementById('cardThree').style.visibility = 'visible';
}



function alterMood() {
    if (document.getElementById('mood1').checked == true) {
        mood = "happy";
    } else if (document.getElementById('mood2').checked == true) {
        mood = "sad";
    } else if (document.getElementById('mood3').checked == true) {
        mood = "angry";
    } else if (document.getElementById('mood4').checked == true) {
        mood = "surprised";
    }

    getPlaylist();
    document.getElementById('cardFour').style.visibility = 'visible';
}


/*Function evaluates mood and calls corresponding function. */
function getPlaylist() {
    if (mood == "happy")
        happyPlaylist();
    else if (mood == "sad")
        sadPlaylist();
    else if (mood == "angry")
        angryPlaylist();
    else if (mood == "surprised")
        surprisePlaylist();
}

/* Function determines Spotify playlist when mood is happy and based on the genre. */
function happyPlaylist() {
    if (genre == "edm") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX6VdMW310YC7?si=if2FHhFnRWO0tFcPwVAV8Q";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/1J7Ss023ptcos7ZqFS7rjE?si=N73gSUw_SkqRL_WnwuRysQ";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/0hlSvRQEWrtgQudVkgCFFt?si=zG60VVRXT2yXIvcEwpVZOg";
    } else if (genre == "rap") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/2BnJlF2E9UgIyuL1qlNjjG?si=GTp552wKTfedNhg22KHqMQ";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/5qYlKze6iLqi0UiFsqDlAL?si=MHwtExbkR8ivSiubjap_YA";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/6QDApOmwfhB4VL9M98njQs?si=tZNXk9mgSTy5Zn1pOrpzNA";
    } else if (genre == "country") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DWTkxQvqMy4WW?si=RKFm7gREQqSxDZDRd3KpqQ";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DXdgnLr18vPvu?si=S5QgIiTfQ9W9Ygta98zPJQ";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DWYnwbYQ5HnZU?si=FNroG-nKQF2nVU_ReFv-lQ";
    } else if (genre == "pop") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC?si=QKkuTurnRS2nZXkl75utIg";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DXbYM3nMM0oPk?si=usjrD8kYR2WhoJrlKNUYwg";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX0b1hHYQtJjp?si=I9IR4cP7S26IYHXaLpgM_A";
    } else if (genre == "alternative") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/5CDM8rVt27yt09BO5wA5oP?si=dLVDN59NSTanreABrVGjzw";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX2Nc3B70tvx0?si=138PxKxhQuCunszgjjgADw";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX6MUrG3NBYtM?si=P9Tla-6EQSqJLFjIqHsAVA";
    }
}

/* Function determines Spotify playlist when mood is sad and based on the genre. */
function sadPlaylist() {
    if (genre == "edm") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DWVrtsSlLKzro?si=oBJUqxjSQJiPIuiVGrIXuw";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX7H1BP5vXFoO?si=GkiXvQ3CTKib73sT32qifw";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/2Vz3YWfo3tOKqKSHIuW322?si=k9aYSyR3QCqH7Mp0BIhIcA";
    } else if (genre == "rap") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/4XpY2PtCUqzhddUnFEbckt?si=SST3A5IRRvSu7xqhffLBoQ";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX1YPTAhwehsC?si=fiyl5GsvTeWXws0h2y1d9g";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DWT6MhXz0jw61?si=Iiwd0MHIS8mKaI5trdB9PA";
    } else if (genre == "country") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DXdmMcgFhLQ8u?si=a2XS0BFGTO-tqDmDq3LOWQ";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DWYiR2Uqcon0X?si=c1G4nZS5SjCj52KTx1SpOw";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DXdmMcgFhLQ8u?si=Of8YTnTmSPeF9oFS5jZUPQ";
    } else if (genre == "pop") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX3YSRoSdA634?si=KIcRrJ_0SA-TIbLvCJ34pg";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DWZUAeYvs88zc?si=KlXtLFsmQ_WoyoZXXgMXCA";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DXcxvFzl58uP7?si=YaBZqBDDTiCYSHneLu2QSA";
    } else if (genre == "alternative") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/5tPAmcKqoBrGChGO6lMuHu?si=tunyjGu8Q92WOoeNgYluMA";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/4wzIQXpg6448rkjGu5Jlz7?si=ZaUYsO2QR46FyKOENS7lhQ";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/2H7h1SBipoh1rELnwKt6vU?si=ynaULn01QMyJQwNB7WEoPQ";
    }
}

/* Function determines Spotify playlist when mood is angry and based on the genre. */
function angryPlaylist() {
    if (genre == "edm") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX3ND264N08pv?si=lOVuq3rQSnmxft5zRed_Vg";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX6J5NfMJS675?si=6piwkjjGSzeCzTLvrVXluA";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX2VvACCrgjrt?si=6axitIKkTKWeqrvRYgVtrA";
    } else if (genre == "rap") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/62cdYStZNC1u3l6Cu9phP9?si=Q7m2SsEwQ-2UQzigsrN1lA";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP?si=poCU753LQ4Cb8mL80Gqkqw";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DWY4xHQp97fN6?si=TXFZlua1SG67xKnHM-aR8w";
    } else if (genre == "country") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DXc0fQ4sGOnVJ?si=v1KpAR61R9OuTCegBzltZw";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/3Cs9va9KrO7TODZ1U1EP5V?si=v3kcH6ceRtiqhnOnPOpQiQ";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/71EfEBa5IU8rFrDAccc7EE?si=eLgIWHpJTFuq0mSmDPdUpQ";
    } else if (genre == "pop") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1E4xzsHaoCPtt6?si=pqohGe5QQ5GF2Hdv0qseQg";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/4ca6MwaTAiz852ZffCSWRS?si=woM7Xm_GTXqFbryGsZoOWQ";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/5s7Sp5OZsw981I2OkQmyrz?si=muSvcSwVR9S9yAsjGTzMqg";

    } else if (genre == "alternative") {
        number = Math.floor(Math.random() * 3) + 1;
        if (number == 1)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/6UkcmQf7tYlGKX18IL8cyd?si=5oZ4NmJfQhCZIV_uMCw6AQ";
        else if (number == 2)
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/29kNF7XXBkTmkjzTQrb9RI?si=ZLvZY5oVRBGyO97f8h5gHA";
        else
            document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/6RjubEmWJhBTMF7vMG3B0W?si=ZufEFkshTOmB9saibiqwJA";
    }
}

/* Function determines Spotify playlist when mood is surprised. */
/* The genre is not used when the mood is surpised. */
function surprisePlaylist() {
    number = Math.floor(Math.random() * 3) + 1;
    if (number == 1)
        document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/2QOJowHT8eaCbVf0I7If81?si=HGkdO5xWQvq8lfCRRSsOWw";
    else if (number == 2)
        document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/0GrlAcPQBhh0HDXLODAwuv?si=Gqlyi2dNTZasy0UQdSgUVw";
    else
        document.getElementById('spotIframe').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX4QSOvQofBAJ?si=MXjxZQFLRcmHaA4p59Kt9Q";
}
