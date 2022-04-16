// code your solution here



// function superbowlWin(record){
//     return record.find((record) => {if(record.result === "W") {
//         return record.year;
//     } else return undefined;
// });
// }

function superbowlWin(record){
    let Winner = record.find((record) => (record.result === "W"));
    return Winner? Winner.year: undefined;
}