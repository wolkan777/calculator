let input = document.getElementById('input');

function insert(num) {
    input.value += num;
}

function clean() {
    input.value = '';
}

function equal() {
    input.value = eval(input.value)
}

function back() {
    input.value = input.value.substring(0, input.value.length - 1)
}