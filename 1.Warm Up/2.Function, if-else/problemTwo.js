// Create a function which accepts the age and tells whether a person is eligible to vote or not

function eligibleToVote(age){
    if(age < 0){
        console.log("Invalid Input")
    }
    else if(age < 18){
        console.log("Not Eligible for vote")
    }else{
        console.log("Eligible for vote")
    }
}

eligibleToVote(-1)
eligibleToVote(10)
eligibleToVote(20)