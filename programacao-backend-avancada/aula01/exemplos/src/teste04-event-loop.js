function task01() {
    console.log('Task 01 Finsh!');
}

function task02() {
    num = 10000000;
    count = 0;
    while (count < num) {
        //console.log(`${count}\\${num} Processando...`)
        count++;
        if (count == num) {
            console.log('Task 02 Fish!')
        }
    }
    console.log('Task 02 Final function! ' + count)
}

function task03() {
    console.log('Task 03 Finsh!');
}


task02();
task01();
task03();