function exeption(ans) {
    if (ans.errno == 1366)
        return 'wrong details values';
    else if (ans.errno == 1062)
        return 'this id already exist';
    else if (ans.errno == 1452)
        return 'this id does not exist'
    //Any other error
    else
        return 'error';
}


module.exports = { exeption };