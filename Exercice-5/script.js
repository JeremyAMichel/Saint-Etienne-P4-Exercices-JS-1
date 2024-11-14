// function countVowels(word) {
//     const vowels = 'aeiouyAEIOUY';
//     let count = 0;

//     for(let char of word){       
//        if(vowels.includes(char)){
//             count += 1;
            
//        }
//     }

//     return count;
// }

// console.log(countVowels("Nomber of VOwels"));


function countVowels(word) {
    const matches = word.match(/[aeiouy]/gi);

    // si matches a une valeur
    if(matches){
        return matches.length; // car match retourne un tableau
    }
}

const word = "Nomber of VOwels";

console.log("Number of vowels in " + word + ", " + countVowels(word));


