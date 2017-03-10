
//Description grid 10x10 (rosMax*colsMax)
/*               (y-)
                 S
       0,0 0,1 0,2 0,3......0,9
       1,0 1,1 1,2 1,3......1,9
(x-)E  ......................... W (x +)
       .........................
       9,0 9,1 9,2 9,3......9,9
                 N
                (y+)
*/

//In chrome console introduce commandExecution('fffff'); for example, and resetPositionDirection(); to reset the rover's position

var myRover = {
  position: [0,0], //0-->rows, 1-->cols
  direction: 'N',
  lastPosition: this.position
};

var rowsMax = 10;
var colsMax = 10;
var grid = [];

for (i=0;i<rowsMax;i++) {
  grid[i]=[];
  for (j=0;j<colsMax;j++) {
    grid[i][j]=1;
  }
}

function placeObstacles()
{

}

function goForward(rover) {

  switch(rover.direction) {
    case 'N':
      rover.lastPosition = rover.position;
      rover.position[0]++;
      if((rover.position[0])%rowsMax===0) //go y+
      {
        rover.position[0]=0;
      }
      console.log("Value grid " + grid[rover.position[0]][rover.position[1]]);
      if(grid[rover.position[0]][rover.position[1]] === 1)
      {
        console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      else {
        rover.position = rover.lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
    case 'W':
      rover.lastPosition = rover.position;
      rover.position[1]++;
      if((rover.position[1])%colsMax===0) //go x+
      {
        rover.position[1]=0;
      }
      console.log("Value grid " + grid[rover.position[0]][rover.position[1]]);
      if(grid[rover.position[0]][rover.position[1]] === 1)
      {

        console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      else {
        rover.position = rover.lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
    case 'S':
      rover.lastPosition = rover.position;
      rover.position[0]--;
      if((rover.position[0])===-1) //go y-
      {
        rover.position[0]=rowsMax-1;
      }
      console.log("Value grid " + grid[rover.position[0]][rover.position[1]]);
      if(grid[rover.position[0]][rover.position[1]] === 1)
      {

        console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      else {
        rover.position = rover.lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
    case 'E':
      rover.lastPosition = rover.position;
      rover.position[1]--;
      if((rover.position[1])===-1) //go x-
      {
        rover.position[1]=colsMax-1;
      }
      console.log("Value grid " + grid[rover.position[0]][rover.position[1]]);
      if(grid[rover.position[0]][rover.position[1]] === 1)
      {
        console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      else {
        rover.position = rover.lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
  }


}

function goBackwards(rover) {

  switch(rover.direction) {
    case 'N':
      rover.lastPosition = rover.position;
      rover.position[0]--;
      if((rover.position[0])===-1) //go y-
      {
        rover.position[0]=rowsMax-1;
      }
      console.log("Value grid " + grid[rover.position[0]][rover.position[1]]);
      if(grid[rover.position[0]][rover.position[1]] === 1)
      {
        console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      else {
        rover.position = rover.lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
    case 'W':
      rover.lastPosition = rover.position;
      rover.position[1]--;
      if((rover.position[1])===-1) //go x-
      {
        rover.position[1]=colsMax-1;
      }
      console.log("Value grid " + grid[rover.position[0]][rover.position[1]]);
      if(grid[rover.position[0]][rover.position[1]] === 1)
      {
        console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      else {
        rover.position = rover.lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
    case 'S':
      rover.lastPosition = rover.position;
      rover.position[0]--;
      if((rover.position[0])%rowsMax===0) //go y+
      {
        rover.position[0]=0;
      }
      console.log("Value grid " + grid[rover.position[0]][rover.position[1]]);
      if(grid[rover.position[0]][rover.position[1]] === 1)
      {
        console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      else {
        rover.position = rover.lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
    case 'E':
      rover.lastPosition = rover.position;
      rover.position[1]--;
      if((rover.position[1])%colsMax===0) //go x+
      {
        rover.position[1]=0;
      }
      console.log("Value grid " + grid[rover.position[0]][rover.position[1]]);
      if(grid[rover.position[0]][rover.position[1]] === 1)
      {
        console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      else {
        rover.position = rover.lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
  }
}

function turnRight(rover) {

  switch(rover.direction) {
    case 'N':
      rover.direction='E';
      break;
    case 'W':
      rover.direction='N';
      break;
    case 'S':
      rover.direction='W';
      break;
    case 'E':
      rover.direction='S';
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
}

function turnLeft(rover) {

  switch(rover.direction) {
    case 'N':
      rover.direction='W';
      break;
    case 'W':
      rover.direction='S';
      break;
    case 'S':
      rover.direction='E';
      break;
    case 'E':
      rover.direction='N';
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
}

function commandsExecution(commandsSent)
{
  console.log("commandsReceived");
  for(var command in commandsSent)
  {
    switch (commandsSent[command]) {
      case 'f':
        console.log("Forward");
        goForward(myRover);
        break;
      case 'b':
        console.log("Barckwards");
        goBackwards(myRover);
        break;
      case 'r':
        console.log("turnRigh");
        turnRight(myRover);
        break;
      case 'l':
        console.log("turnLeft");
        turnLeft(myRover);
        break;
      default:
        console.log("invalidCommand");
        break;
    }
  }
}

function resetPositionDirection()
{
  myRover.position = [0,0];
  myRover.direction = 'N';
  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]; Direction: " + myRover.direction);
  return true;
}


//Description grid 10x10 (rosMax*colsMax)
/*               (y-)
                 S
       0,0 0,1 0,2 0,3......0,9
       1,0 1,1 1,2 1,3......1,9
(x-)E  ......................... W (x +)
       .........................
       9,0 9,1 9,2 9,3......9,9
                 N
                (y+)
*/

//In chrome console introduce commandExecution('fffff'); for example, and resetPositionDirection(); to reset the rover's position
