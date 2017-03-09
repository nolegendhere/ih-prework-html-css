var myRover = {
  position: [0,0], //0-->rows, 1-->cols
  direction: 'N'
};

var rowsMax = 10;
var colsMax = 10;
var grid = [];

for (i=0;i<rowsMax;i++) {
  grid[i]=[];
  for (j=0;j<colsMax;j++) {
    grid[i][j]=0;
  }
}

function goForward(rover) {

  switch(rover.direction) {
    case 'N':
      if((rover.position[0]++)%rowsMax===0) //go y+
      {
        rover.position[0]=0;
      }
      break;
    case 'W':
      if((rover.position[1]++)%colsMax===0) //go x+
      {
        rover.position[1]=0;
      }
      break;
    case 'S':
      if((rover.position[0]--)===-1) //go y-
      {
        rover.position[0]=rowsMax;
      }
      break;
    case 'E':
      if((rover.position[1]--)===-1) //go x-
      {
        rover.position[1]=colsMax;
      }
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goBackwards(rover) {

  switch(rover.direction) {
    case 'N':
      if((rover.position[0]--)===-1) //go y-
      {
        rover.position[0]=rowsMax;
      }
      break;
    case 'W':
      if((rover.position[1]--)===-1) //go x-
      {
        rover.position[1]=colsMax;
      }
      break;
    case 'S':
      if((rover.position[0]++)%rowsMax===0) //go y+
      {
        rover.position[0]=0;
      }
      break;
    case 'E':
      if((rover.position[1]++)%colsMax===0) //go x+
      {
        rover.position[1]=0;
      }
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnRight(rover) {

  switch(rover.direction) {
    case 'N':
      rover.direction='E';
      if((rover.position[1]--)===-1) //go x-
      {
        rover.position[1]=colsMax;
      }
      break;
    case 'W':
      rover.direction='N';
      if((rover.position[0]++)%rowsMax===0) //go y+
      {
        rover.position[0]=0;
      }
      break;
    case 'S':
      rover.direction='W';
      if((rover.position[1]++)%colsMax===0) //go x+
      {
        rover.position[1]=0;
      }
      break;
    case 'E':
      rover.direction='S';
      if((rover.position[0]--)===-1) //go y-
      {
        rover.position[0]=rowsMax;
      }
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnLeft(rover) {

  switch(rover.direction) {
    case 'N':
      rover.direction='W';
      if((rover.position[1]++)%colsMax===0) //go x+
      {
        rover.position[1]=0;
      }
      break;
    case 'W':
      rover.direction='S';
      if((rover.position[0]--)===-1) //go y-
      {
        rover.position[0]=rowsMax;
      }
      break;
    case 'S':
      rover.direction='E';
      if((rover.position[1]--)===-1) //go x-
      {
        rover.position[1]=colsMax;
      }
      break;
    case 'E':
      rover.direction='N';
      if((rover.position[0]++)%rowsMax===0) //go y+
      {
        rover.position[0]=0;
      }
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function commandsExecution(commandsSent)
{
  console.log("entra");
  console.log(commandsSent);
  for(var command in commandsSent)
  {
    console.log("entra2");
    console.log(command);
    switch (commandsSent[command]) {
      case 'f':
        console.log("entra2");
        goForward(myRover);
        break;
      case 'b':
        console.log("entra2");
        goBackwards(myRover);
        break;
      case 'r':
        console.log("entra2");
        turnRight(myRover);
        break;
      case 'l':
        console.log("entra2");
        turnLeft(myRover);
        break;

    }
  }
}

var commands = ['f','b'];

commandsExecution(commands);
