function isUserPresent(username){
    const nameList = ['Mithun',"param","Yash","raj","John"]
    return nameList.includes(username)
}

let username = "Someone"
if(isUserPresent(username)) console.log ("Yes, " + username + " is a valid user.")
else console.log ("No, " + username + " is not a valid user.")