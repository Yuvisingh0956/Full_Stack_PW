function uniqueCharactersCheck(username) {
    const charSet = new Set();
    let flag = true;
    for (const char of username) {
        if (charSet.has(char)) {
            console.log('The input string contains duplicates.')
            flag = false; // Found a repeated character
            break;
        }
        charSet.add(char);
    }

    if (flag) console.log('The input string contains unique characters.')
}

uniqueCharactersCheck("mithun") 