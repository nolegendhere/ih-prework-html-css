
/Description grid 10x10 (rosMax*colsMax)
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
  name: "firstRover",
  position: [0,0], //0-->rows, 1-->cols
  direction: 'N',
  initialDirection:'N',
  initialRow: 0,
  initialCol: 0
};

var mySecondRover = {
  name: "secondRover",
  position: [9,9], //0-->rows, 1-->cols
  direction: 'S',
  initialDirection:'S',
  initialRow: 9,
  initialCol: 9
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
    if((i===myRover.position[0] && j===myRover.position[1]) || (i===mySecondRover.position[0] && j===mySecondRover.position[1]))
    {
      grid[i][j]=3;
    }
    else
    {
      grid[i][j]=1;
    }
  }
}

//it puts and obstacle in the cell with these rows and cols coordinates on the grid
function placeObstacles(row, col)
{
  if((row!=myRover.position[0] && col!=myRover.position[1]) || (row!=mySecondRover.position[0] && col!=mySecondRover.position[1]))
  {
    grid[row][col]=2;
  }
  else {
    console.log("Impossible to customize this cell, there is a rover on it");
  }
}

//it returns to walkable the cell with these rows and cols coordinates on the grid
function placeWalkable(row, col)
{
  if((row!=myRover.position[0] && col!=myRover.position[1]) || (row!=mySecondRover.position[0] && col!=mySecondRover.position[1]))
  {
    grid[row][col]=1;
  }
  else {
    console.log("Impossible to customize this cell, there is a rover on it");
  }
}

//It resets to walkable all the cells of the grid
function resetGrid()
{
  for (i=0;i<rowsMax;i++) {
    for (j=0;j<colsMax;j++) {
      if((i===myRover.position[0] && j===myRover.position[1]) || (i===mySecondRover.position[0] && j===mySecondRover.position[1]))
      {
        grid[i][j]=3;
      }
      else
      {
        grid[i][j]=1;
      }
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
//rovercan be myRover or mySecondRover
function goForward(rover) {

  var actualRow = rover.position[0];
  var actualCol = rover.position[1];
  var lastRow = actualRow;
  var lastCol = actualCol;

  console.log("Forward");
  switch(rover.direction) {
    case 'N':
      actualRow++;
      if((actualRow)%rowsMax===0) //go y+
      {
        actualRow=0;
      }
      console.log("Value grid " + grid[actualRow][actualCol]);
      if(grid[actualRow][actualCol] === 1)
      {
        grid[actualRow][actualCol] = 3;
        grid[lastRow][lastCol] = 1;
        console.log("New "+ rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else if (grid[actualRow][actualCol] === 3)
      {
        actualRow = lastRow;
        console.log("Bumped into the other rover");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else {
        actualRow = lastRow;
        console.log("Bumped into an obstacle");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      break;
    case 'W':
      actualCol++;
      if((actualCol)%colsMax===0) //go x+
      {
        actualCol=0;
      }
      console.log("Value grid " + grid[actualRow][actualCol]);
      if(grid[actualRow][actualCol] === 1)
      {
        grid[actualRow][actualCol] = 3;
        grid[lastRow][lastCol] = 1;
        console.log("New "+ rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else if (grid[actualRow][actualCol] === 3)
      {
        actualCol = lastCol;
        console.log("Bumped into the other rover");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else {
        actualCol = lastCol;
        console.log("Bumped into an obstacle");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      break;
    case 'S':

      actualRow--;
      if(actualRow===-1) //go y-
      {
        actualRow=rowsMax-1;
      }
      console.log("Value grid " + grid[actualRow][actualCol]);
      if(grid[actualRow][actualCol] === 1)
      {
        grid[actualRow][actualCol] = 3;
        grid[lastRow][lastCol] = 1;
        console.log("New "+ rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else if (grid[actualRow][actualCol] === 3)
      {
        actualRow = lastRow;
        console.log("Bumped into the other rover");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else {
        actualRow = lastRow;
        console.log("Bumped into an obstacle");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      break;
    case 'E':

      actualCol--;
      if(actualCol===-1) //go x-
      {
        actualCol=colsMax-1;
      }
      console.log("Value grid " + grid[actualRow][actualCol]);
      if(grid[actualRow][actualCol] === 1)
      {
        grid[actualRow][actualCol] = 3;
        grid[lastRow][lastCol] = 1;
        console.log("New "+ rover.name +" Position: [" + actualRow + ", " + rover.position[1] + "]; Direction: " + rover.direction);
      }
      else if (grid[actualRow][actualCol] === 3)
      {
        actualCol = lastCol;
        console.log("Bumped into the other rover");
        console.log( rover.name +" Position: [" + ractualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else {
        actualCol = lastCol;
        console.log("Bumped into an obstacle");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      break;
  }

  rover.position[0] = actualRow;
  rover.position[1] = actualCol;
}

//go backwards; if direction is N, it will go y-, to the S; if direction is W, it will go x-, to the E; the same for the other to cases
//It returns the position of the rover and its direction in the console; also returns if the rover has bumped into an obstacle
//rovercan be myRover or mySecondRover
function goBackwards(rover) {

  var actualRow = rover.position[0];
  var actualCol = rover.position[1];
  var lastRow = actualRow;
  var lastCol = actualCol;
  console.log("Barckwards");
  switch(rover.direction) {
    case 'N':

      actualRow--;
      if(actualRow===-1) //go y-
      {
        actualRow=rowsMax-1;
      }
      console.log("Value grid " + grid[actualRow][actualCol]);
      if(grid[actualRow][actualCol] === 1)
      {
        grid[actualRow][actualCol] = 3;
        grid[lastRow][lastCol] = 1;
        console.log("New "+ rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else if (grid[actualRow][actualCol] === 3)
      {
        actualRow = lastRow;
        console.log("Bumped into the other rover");
        console.log( rover.name +" Position: [" + ractualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else {
        actualRow = lastRow;
        console.log("Bumped into an obstacle");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      break;
    case 'W':

      actualCol--;
      if(actualCol===-1) //go x-
      {
        actualCol=colsMax-1;
      }
      console.log("Value grid " + grid[actualRow][actualCol]);
      if(grid[actualRow][actualCol] === 1)
      {
        grid[actualRow][actualCol] = 3;
        grid[lastRow][lastCol] = 1;
        console.log("New "+ rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else if (grid[actualRow][actualCol] === 3)
      {
        actualCol = lastCol;
        console.log("Bumped into the other rover");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else {
        actualCol = lastCol;
        console.log("Bumped into an obstacle");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      break;
    case 'S':

      actualRow--;
      if(actualRow%rowsMax===0) //go y+
      {
        actualRow=0;
      }
      console.log("Value grid " + grid[actualRow][actualCol]);
      if(grid[actualRow][actualCol] === 1)
      {
        grid[actualRow][actualCol] = 3;
        grid[lastRow][lastCol] = 1;
        console.log("New "+ rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else if (grid[actualRow][actualCol] === 3)
      {
        actualRow = lastRow;
        console.log("Bumped into the other rover");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else {
        actualRow = lastRow;
        console.log("Bumped into an obstacle");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      break;
    case 'E':

      actualCol--;
      if(actualCol%colsMax===0) //go x+
      {
        actualCol=0;
      }
      console.log("Value grid " + grid[actualRow][actualCol]);
      if(grid[actualRow][actualCol] === 1)
      {
        grid[actualRow][actualCol] = 3;
        grid[lastRow][lastCol] = 1;
        console.log("New "+ rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else if (grid[actualRow][actualCol] === 3)
      {
        actualCol = lastCol;
        console.log("Bumped into the other rover");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      else {
        actualCol = lastCol;
        console.log("Bumped into an obstacle");
        console.log( rover.name +" Position: [" + actualRow + ", " + actualCol + "]; Direction: " + rover.direction);
      }
      break;
  }

  rover.position[0] = actualRow;
  rover.position[1] = actualCol;
}

//Turn to the right; if direction is N, it will turn to E; if direction is W, it will turn to N; the same for the other cases
//It returns the position of the rover and its direction in the console
//rovercan be myRover or mySecondRover
function turnRight(rover) {
  console.log("turnRigh");
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

  console.log(rover.name +" Position: [" + rover.position[0] + ", " + rover.position[1] + "]; New Direction: " + rover.direction);
}

//Turn to the left; if direction is N, it will turn to W; if direction is W, it will turn to S; the same for the other cases
//It returns the position of the rover and its direction in the console
//rovercan be myRover or mySecondRover
function turnLeft(rover) {
  console.log("turnLeft");
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

  console.log(rover.name +" Position: [" + rover.position[0] + ", " + rover.position[1] + "]; New direction: " + rover.direction);
}

//In chrome console introduce commandExecution('fffff',roverToMove); for example, and resetPositionDirection(roverToReset); to reset the rover's position
//roverToMove and roverToReset can be myRover or mySecondRover
function commandsExecution(commandsSent, rover)
{
  if(rover===null) //TO-DO: not working
  {
    console.log("no rover parameter");
  }
  else
  {
    console.log("commandsReceived by "+ rover.name);
    for(var command in commandsSent)
    {
      switch (commandsSent[command]) {
        case 'f':
          goForward(rover);
          break;
        case 'b':
          goBackwards(rover);
          break;
        case 'r':
          turnRight(rover);
          break;
        case 'l':
          turnLeft(rover);
          break;
        default:
          console.log("invalidCommand");
          break;
      }
    }
  }
}

//retuns the rover to its initialPosition
//rovercan be myRover or mySecondRover
function resetPositionDirection(rover)
{
  rover.position[0] = rover.initialRow;
  rover.position[1] = rover.initialCol;
  rover.direction = river.initialDirection;
  console.log("Reset Position and direction of "+ rover.name +" Position: [" + rover.position[0] + ", " + rover.position[1] + "]; Direction: " + rover.direction);
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
