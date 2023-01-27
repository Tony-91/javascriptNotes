# This is: Javascript Notes

## Race Day

![](images/raceDayNotes.png)

`let registeredEarly = prompt("Are you early?: ").toLocaleLowerCase === "yes";`

- If registeredEarly variable is equal to "yes", the comparison will evaluate to true (*truthy*) and the variable registeredEarly will be assigned the value of true. If the input is not "yes" the variable registeredEarly will be assigned the value of false (*falsey*). It's a one liner that check if the user is registered early or not by checking if the user input is 'yes' or not.

## Magic 8 Ball

![](images/magic8Ball.png)

`console.log(`the magic 8 ball says: ${eightBallResponses[randomNumber]}`);`

- The `randomNumber` will dynaimcally return a correct number because of the (dot) length notation of eightBallResponses - this 'connects' a random number to our `eightBallResponses` array. 
