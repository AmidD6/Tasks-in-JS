let col;

function loadGrain(levels) {
    col = 0
    let f_ind = 0,
        dx = 1;
    let arr = getArrayBody(levels);
    console.log("-----------------------\nArray body received:")
    console.log(arr)

    for(let item in arr) {
        if (item == levels.length - 1) {
            // console.log("End")
            break;
        } else if (arr[f_ind].length <= arr[dx].length) {
            isMaxMinLimit(arr, f_ind, dx)
            // console.log(f_ind, dx);
            f_ind = dx;
        } else if (arr[f_ind].length > arr[dx].length) {
            isMaxMinLimit(arr, f_ind, dx)
        }
        dx++;
    }
    console.log("Result:", col, "\n")
}

function isMaxMinLimit(arr, f_ind, l_ind){
    let index = (arr[f_ind].length < arr[l_ind].length) ? arr[f_ind].length : arr[l_ind].length;
    for (let i = ++f_ind; i < l_ind; i++){
        // console.log("-----------", i)
        for (let j = arr[i].length; j < index; j++) {
            arr[i][j] = 8;
            col++
        }
    }
}


function getArrayBody(array){
    let num = 1;
    let len = array.length;
    let arr = new Array(len);
    for(let i in array){
        arr[i] = new Array(array[i]);
        for(let j = 0; j < arr[i].length; j++){
            arr[i][j] = num;
        }
    }
    return arr;
}

//-------------------------------------------------------------------


// loadGrain([1, 1, 12, 3,1,2, 6, 5, 2, 7, 4, 11, 7, 4, 5])


loadGrain([4, 1, 3]) // 2
loadGrain([2, 1, 5, 2, 7, 4, 10]) // 7
loadGrain([2, 0, 1, 5, 2, 7]) // 6
loadGrain([2, 4, 2]) // 0
loadGrain([7, 4]) // 0
loadGrain([]) // 0

