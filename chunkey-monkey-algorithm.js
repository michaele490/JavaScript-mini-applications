function chunkArrayInGroups(arr, num) {
    let twoDimensionArr = [];
    for (let i = 0; i < arr.length; i = i + num) {
        let subArr = [];
        for (let y = i; y < (i + num) && y < arr.length; y++) {
            subArr.push(arr[y]);
        }
        twoDimensionArr.push(subArr);
    }

    return twoDimensionArr;
}

// This may look like just a few lines of code
// but it took me a long time to figure this
// out, please appreciate the effort lol