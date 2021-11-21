var kana = ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma",
    "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo", "ga", "gi", "gu", "ge", "go", "za", "ji", "zu", "ze", "zo", "da", "di", "du",
    "de", "do", "ba", "bi", "bu", "be", "bo", "pa", "pi", "pu", "pe", "po", "kya", "kyu", "kyo", "gya", "gyu", "gyo", "sha", "shu", "sho", "ja", "ju", "jo", "cha",
    "chu", "cho", "nya", "nyu", "nyo", "hya", "hyu", "hyo", "bya", "byu", "byo", "pya", "pyu", "pyo", "mya", "myu", "myo", "rya", "ryu", "ryo"]

var currentchar = 0; 

var app = new Vue({
    'el': '.container',
    'data': {
        hiragana: wanakana.toHiragana(kana[0]),
        reponse: "",
        chain: 1,
        points: 0
    }
})

document.getElementById("response").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        var text = $("#response").val();
        console.log("RÉPONSE: " + app.$data.hiragana)
        if(wanakana.toHiragana(text) == app.$data.hiragana) {
            //Kana validé !
            app.$data.reponse = "Bonne réponse !";
            currentchar = randomNumber(0, kana.length)
            app.$data.hiragana = wanakana.toHiragana(kana[currentchar])


            app.$data.points += 300*app.$data.chain;
            app.$data.chain++;

            $("#response").val("")
            setTimeout(() => {
                app.$data.reponse = ""
            }, 3000);
            
        } else {
            var answer = kana[currentchar]
            app.$data.reponse = "Faux ! Réponse : " + answer;
            currentchar = randomNumber(0, kana.length)
            app.$data.hiragana = wanakana.toHiragana(kana[currentchar])
            
            
            app.$data.points += 300*(app.$data.chain - 5);
            console.log()
            app.$data.chain = 0;
            setTimeout(() => {
                app.$data.reponse = ""
            }, 3000);
        }

        console.log("ENTRÉE: " + wanakana.toHiragana(text))
        

    }
})

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  