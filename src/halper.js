export function getWinner(arr){

    const lines=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [2,4,6],
        [2,5,8],
        [1,4,7],
        [3,4,5],
        [6,7,8]
    ]
    for(let i=0;i<lines.length;i++){
        let [a,b,c]=lines[i]

        if(arr[a]&&arr[a]===arr[b] && arr[a]===arr[c]){

            return {player:arr[a],line:lines[i]}
        }


    }
    return null
}