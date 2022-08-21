function snapCracklePrime (n){
    let finalStr = ''
    for(let i = 1; i <= n; i++){
        if(i % 2 == 0 && i % 5 != 0 && i != 2){
            finalStr += `${i}`
        } else if (i % 2 == 0 && i % 5 == 0){
            finalStr += `crackle`
        } else {
            if(i % 5 != 0 && i != 2){
                finalStr += 'Snap'
            } else if (i % 5 == 0) {
                finalStr += 'SnapCrackle'
            }
        }
        let primo = true
        for(let j = 2; j < i; j++){
            if(i % j == 0) {
                primo = false
            }
        }
        if (primo && i != 1) {
            finalStr += 'Prime'
        }

        finalStr += ', '

    }
    finalStr = finalStr.slice(0, -2)
    console.log(finalStr)
    return finalStr
}

snapCracklePrime(25)