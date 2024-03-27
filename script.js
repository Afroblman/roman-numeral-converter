const numInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

const checker = () => {
    if(numInput.value === "") {
        output.textContent = "Please enter a valid number";
        output.classList.remove("hidden");
        return;
    }
    if(parseInt(numInput.value) < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        numInput.value = "";
        output.classList.remove("hidden");
        return;
    }
    if(parseInt(numInput.value) > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
        numInput.value = "";
        output.classList.remove("hidden");
        return;
    }
    output.textContent = inToRoman(parseInt(numInput.value));
    numInput.value = "";
    output.classList.remove("hidden");
}

convertBtn.addEventListener("click", checker);

function inToRoman(num) {
    let romanNum = '';
    let i = 0;
        while(num > 0) {
            while(num >= arabicNumerals[i]) {
                romanNum += romanNumerals[i];
                num -= arabicNumerals[i];
            }
            i++;
        }
        return romanNum;
}

numInput.addEventListener("keydown", (e) => {
     if(e.key == "Enter") {
        e.preventDefault();
        checker();
     }
})