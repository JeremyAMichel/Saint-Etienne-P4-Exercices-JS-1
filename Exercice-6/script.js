function countLetters(sentence) {

    const letterCounts = {};

    for(let letter of sentence){
        if(letter.match(/[a-z]/ig)){
            letter = letter.toLowerCase();
            if (letterCounts[letter]) {
                letterCounts[letter] += 1;
            } else {
                letterCounts[letter] = 1;
            }
        }
        
    }


    return letterCounts;
}


const randomSentence = "Une phrase random !";

console.log(countLetters(randomSentence));

