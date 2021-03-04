function friend(friends){
    var real_friend = []
    for (let name in friends) {
        if (friends[name].length == 4){
            real_friend.push(friends[name])
        }
    
    }
    return (real_friend)
}


