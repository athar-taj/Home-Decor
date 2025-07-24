function loopResult(){
    var result = 0;
    for (let i = 0; i <= 10000000; i++) {
        result++
    }
    return result;
}

async function task(){
    console.log("Task Intialize");
    await setTimeout(loopResult,2000);
    console.log("Task Terminate")
    console.log();
} 

task();