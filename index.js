// Code your solution in this file!
function distanceFromHqInBlocks(x){
    const start = 42;
    return Math.abs(x - 42 )
}
function distanceFromHqInFeet(x){
    return distanceFromHqInBlocks(x) * 264   
}

function distanceTravelledInFeet(x,y){
    return Math.abs((y - x) * 264)
}
function calculatesFarePrice(start, destination){
    const feetTravelled = distanceTravelledInFeet(start,destination);  
    if (feetTravelled < 401){
        return 0
    } else if ( feetTravelled < 2001){
        return .02 * (feetTravelled - 400)
    }
    else if (feetTravelled <2501){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}
