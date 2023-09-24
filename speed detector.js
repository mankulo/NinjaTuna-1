function speedDetector(speed) {
    const speedLimit = 70;//speedlimit set 70
    const demeritPoints = Math.floor((speed - speedLimit) / 5);//subtracts speedlimit from speed and rounds down the value to the nearest integer

    if (speed <= speedLimit) {
        return "Ok";//returns Ok if speed is less than the speed limit
    } 
    else if (demeritPoints <= 12) {
        return `Points: ${demeritPoints}`;//returns demerit points if they are less than or equal to 12
    } 
    else {
        return "License suspended";//returns License suspended if the speed limit has exceeded the reward of demerit points
    }
}

// Example usage
const speed = parseInt(prompt("Enter the speed of the car:"));
const result = speedDetector(speed);
console.log(result);
