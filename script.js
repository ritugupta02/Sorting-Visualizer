var arr = [];
function generatebars(num = 25) {
    for (let i = 0; i < num; i += 1) {
        const value = Math.floor(Math.random() * 95) + 1;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = "40px";
        bar.style.width = "40px";
        bar.style.borderRadius = "10px";
        bar.style.textAlign = "center";
        bar.style.backgroundColor = "white";
        bar.style.paddingTop = "10px";
        bar.style.marginTop = "20px";
        bar.style.transform = `translateX(${i * 10}px)`;
        const barLabel = document.createElement("label");
        barLabel.style.color = "black";
        barLabel.classList.add("bar_id");
        barLabel.innerHTML = value;
        bar.appendChild(barLabel);
        arr.push(bar);
    }
    for (let i = 0; i < 25; i++) {
        document.getElementById("ctr").appendChild(arr[i]);
    }
}
var check = 0;
function chk() {
    check = 1;
}


generatebars();

function generate() {

    window.location.reload();
}
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
// **********************************************************************************************************************

const disableB = () => {
    console.log("called");
    // $("input[type=button]").attr("disabled", "disabled");
    const elems = document.querySelectorAll(".clickable");
    console.log(elems.length)
    for (var i = 0; i < elems.length; i++) {

        elems[i].setAttribute("disabled", true);

    }

}
const enableB = () => {
    const elems = document.querySelectorAll(".clickable");
    console.log(elems.length)
    for (var i = 0; i < elems.length; i++) {

        // elems[i].setAttribute("disabled", false);
        elems[i].removeAttribute("disabled");
        console.log(elems[i]);

    }

}

// Bubble Sort****************************************************************************************************************
const bubbleSort = async () => {
    disableB();

    document.getElementById("para").innerHTML = "Bubble sort algorithm is an algorithm that sorts the array by comparing two adjacent elements and swaps them if they are not in the intended order. Here order can be anything like increasing order or decreasing order."
    document.getElementById("tc").innerHTML = "TIME COMPLEXITY: O(N^2)";
    document.getElementById("sc").innerHTML = "SPACE COMPLEXITY: O(1)";
    document.getElementById("in").innerHTML = "Sorting In Place: YES";
    document.getElementById("st").innerHTML = "Stable: YES";

    check = 0;
    console.log("called");
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {

            arr[j].style.backgroundColor = "blue";
            await sleep(300);
            let x = Number(arr[j].children[0].textContent);
            let y = Number(arr[j + 1].children[0].textContent);
            if (x > y) {
                arr[j].style.backgroundColor = "red";
                arr[j + 1].style.backgroundColor = "red";
                const temp = arr[j].children[0].textContent;
                arr[j].children[0].innerHTML = arr[j + 1].children[0].textContent;
                arr[j + 1].children[0].innerHTML = temp;
                await sleep(100);
                if (check == 1) {
                    break;
                }
            }
            arr[j].style.backgroundColor = "white";
            arr[j + 1].style.backgroundColor = "white";
            if (check == 1) {
                break;
            }
        }
        if (check == 1) {
            break;
        }

    }
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = "white";
    }
    enableB();

}

//-*****************************************************************************************************************************

// Selection Sort****************************************************************************************************************
const selectionSort = async () => {
    disableB();

    document.getElementById("para").innerHTML = "The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.1) The subarray which is already sorted. 2) Remaining subarray which is unsorted."
    document.getElementById("tc").innerHTML = "TIME COMPLEXITY: O(N^2)";
    document.getElementById("sc").innerHTML = "SPACE COMPLEXITY: O(1)";
    document.getElementById("in").innerHTML = "Sorting In Place: YES";
    document.getElementById("st").innerHTML = "Stable: NO";
    console.log("called");
    check = 0;
    let i, j, min_idx;

    for (i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = "blue";
        min_idx = i;
        for (j = i + 1; j < arr.length; j++) {
            let x = Number(arr[j].children[0].textContent);
            let y = Number(arr[min_idx].children[0].textContent);
            if (x < y)
                min_idx = j;

            if (check == 1) {
                break;
            }
        }
        await sleep(300);
        if (i != min_idx) {
            arr[i].style.backgroundColor = "red";
            arr[min_idx].style.backgroundColor = "red";
            const temp = arr[min_idx].children[0].textContent;
            arr[min_idx].children[0].innerHTML = arr[i].children[0].textContent;
            arr[i].children[0].innerHTML = temp;
            await sleep(100);
            if (check == 1) {
                break;
            }

        }
        arr[i].style.backgroundColor = "white";
        arr[min_idx].style.backgroundColor = "white";
        if (check == 1) {
            break;
        }

        if (check == 1) {
            break;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = "white";
    }
    enableB();
}
//**************************************************************************************************************************

// Insertion sort***********************************************************************************************************
const insertionSort = async () => {
    disableB();
    console.log("called");
    document.getElementById("para").innerHTML = "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.";
    document.getElementById("tc").innerHTML = "TIME COMPLEXITY: O(N^2)";
    document.getElementById("sc").innerHTML = "SPACE COMPLEXITY: O(1)";
    document.getElementById("in").innerHTML = "Sorting In Place: YES";
    document.getElementById("st").innerHTML = "Stable: YES";

    check = 0;
    let i, key, j;
    for (i = 1; i < arr.length; i++) {
        let key = Number(arr[i].children[0].textContent);
        j = i - 1;
        if (check == 1) {
            break;
        }
        arr[j].style.backgroundColor = "blue";
        await sleep(300);
        let x = Number(arr[j].children[0].textContent);
        while (j >= 0 && x > key) {

            arr[j + 1].style.backgroundColor = "red";
            arr[j].style.backgroundColor = "red";
            arr[j + 1].children[0].innerHTML = arr[j].children[0].textContent;
            if (check == 1) {
                break;
            }

            await sleep(100);
            arr[j + 1].style.backgroundColor = "white";
            arr[j].style.backgroundColor = "white";
            j = j - 1;
            if (j >= 0)
                x = Number(arr[j].children[0].textContent);
            if (check == 1) {
                break;
            }
        }
        arr[j + 1].children[0].innerHTML = key;

        arr[i - 1].style.backgroundColor = "white";
        if (check == 1) {
            break;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = "white";
    }
    enableB();
}
//-**************************************************************************************************************************

//Merge Sort*****************************************************************************************************************
function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    var L = new Array(n1);
    var R = new Array(n2);
    for (var i = 0; i < n1; i++)
        L[i] = Number(arr[l + i].children[0].textContent);
    for (var j = 0; j < n2; j++)
        R[j] = Number(arr[m + 1 + j].children[0].textContent);

    var i = 0;
    var j = 0;
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k].children[0].innerHTML = L[i];
            i++;
        }
        else {
            arr[k].children[0].innerHTML = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k].children[0].innerHTML = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k].children[0].innerHTML = R[j];
        j++;
        k++;
    }
}
// var l = 0;
// var r = arr.length - 1;
function mergeSort() {
    // Here is your recursion stop condition
    if (arr.length === 1) return arr;

    const median = Math.floor(arr.length / 2);

    // Limit arrays should get sliced with each iteration
    const limitA = arr.slice(0, median);
    const limitB = arr.slice(median);

    return merge(
        mergeSort(limitA), mergeSort(limitB)
    );
};
// function mergeSort(arr, l, r) {
//     if (l >= r) {
//         return;
//     }
//     var m = l + parseInt((r - l) / 2);
//     mergeSort(arr, l, m);
//     mergeSort(arr, m + 1, r);
//     merge(arr, l, m, r);
// }
//-**************************************************************************************************************************