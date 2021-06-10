const input = require('readline-sync');
let fuelLevel = 0, numAstronats = 0, shuttleAltitude = 0;
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.





/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

fuelLevel = input.question("What is the starting fuel level? ")
while (fuelLevel > 30000 || fuelLevel < 5000 || isNaN(fuelLevel)) {
  fuelLevel = input.question("Enter a valid fuel level between 5,000 and 30,000: ")
}




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numAstronats = input.question("How many astronauts are there? ")
while (numAstronats > 7 || numAstronats < 0 || isNaN(numAstronats)) {
  numAstronats = input.question("How many astronauts(1-7): ")
}
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
