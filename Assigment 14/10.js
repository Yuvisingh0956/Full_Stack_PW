function wordcounter(sentence) {
    const words = sentence.split(/\s+/); // Split sentence into words
    const wordCountMap = new Map();

    for (const word of words) {
        const normalizedWord = word.toLowerCase(); // Convert to lowercase to treat words case-insensitively
        
        if (wordCountMap.has(normalizedWord)) {
            wordCountMap.set(normalizedWord, wordCountMap.get(normalizedWord) + 1);
        } else {
            wordCountMap.set(normalizedWord, 1);
        }
    }

    return wordCountMap;
}

const sentence = "please please submit your assignment on time, your assignments are important";
const result = wordcounter(sentence);

console.log(result);