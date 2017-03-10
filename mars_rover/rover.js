
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

//the rover that we will move through the grid
var myRover = {
  position: [0,0], //0-->rows, 1-->cols
  direction: 'N'
};

//dimensions of the grid where the rover will walk on
var rowsMax = 10;
var colsMax = 10;
//the actual grid where the rover will walk on
var grid = [];

//'initialization' of the grid where the rover will walk on
for (i=0;i<rowsMax;i++) {
  grid[i]=[];
  for (j=0;j<colsMax;j++) {
    grid[i][j]=1;
  }
}

//it puts and obstacle in the cell with these rows and cols coordinates on the grid
function placeObstacles(row, col)
{
  grid[row][col]=2;
}

//it returns to walkable the cell with these rows and cols coordinates on the grid
function placeWalkable(row, col)
{
  grid[row][col]=1;
}

//It resets to walkable all the cells of the grid
function resetGrid()
{
  for (i=0;i<rowsMax;i++) {
    for (j=0;j<colsMax;j++) {
      grid[i][j]=1;
    }
  }
}

//it returns to the console the actual grid by its coordinates and the value of each cell
function displayGrid()
{
  for (i=0;i<rowsMax;i++) {
    for (j=0;j<colsMax;j++) {
      console.log("row " + i + " col " + j + " value " + grid[i][j]);
    }
  }
}

//go forward if direction is N, it will go y+, to the N; if direction is W, it will go x+, to the W; the same for the other to cases
//It returns the position of the rover and its direction in the console; also returns if the rover has bumped into an obstacle
function goForward(rover) {
  var lastPosition;
  switch(rover.direction) {
    case 'N':
      lastPosition = rover.position[0];
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
        rover.position[0] = lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
    case 'W':
      lastPosition = rover.position[1];
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
        rover.position[1] = lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
    case 'S':
      lastPosition = rover.position[0];
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
        rover.position[0] = lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
    case 'E':
      lastPosition = rover.position[1];
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
        rover.position[1] = lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
  }


}

//go backwards; if direction is N, it will go y-, to the S; if direction is W, it will go x-, to the E; the same for the other to cases
//It returns the position of the rover and its direction in the console; also returns if the rover has bumped into an obstacle
function goBackwards(rover) {
  var lastPosition;
  switch(rover.direction) {
    case 'N':
      lastPosition = rover.position[0];
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
        rover.position[0] = lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
    case 'W':
      lastPosition = rover.position[1];
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
        rover.position[1] = lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
    case 'S':
      lastPosition = rover.position[0];
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
        rover.position[0] = lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
    case 'E':
      lastPosition = rover.position[1];
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
        rover.position[1] = lastPosition;
        console.log("Bumped into an obstacle");
        console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      break;
  }
}

//Turn to the right; if direction is N, it will turn to E; if direction is W, it will turn to N; the same for the other cases
//It returns the position of the rover and its direction in the console
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

//Turn to the left; if direction is N, it will turn to W; if direction is W, it will turn to S; the same for the other cases
//It returns the position of the rover and its direction in the console
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

//In chrome console introduce commandExecution('fffff'); for example, and resetPositionDirection(); to reset the rover's position
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
