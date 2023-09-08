$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(0,200,225,7.5)
    createPlatform(375,300,75,7.5,)
    createPlatform(450,0,7.5,650)
    createPlatform(220,200,7.5,50,)
    createPlatform(220,350,7.5,300,)
    createPlatform(220,500,230,7.5) //add a zero after debug//
    createPlatform(900,100,7.5,700,)
    createPlatform(125,350,100,7.5)
    createPlatform(125,300,7.5,50)
    createPlatform(80,300,50,7.5)
    createPlatform(0,450,125,7.5)
    createPlatform(115,550,112.5,7.5)
    createPlatform(0,650,125,7.5)
    createPlatform(335,625,7.5,300)

    createPlatform(550,640,350,7.5)
    createPlatform(450,525,175,7.5)
    createPlatform(725,525,175,7.5)
    createPlatform(525,425,207.5,7.5)
    createPlatform(725,100,7.5,325)
    createPlatform(810,425,5,5)
    createPlatform(810,305,5,5)
    createPlatform(737.5,365,5,5)
    createPlatform(880,365,5,5)
    createPlatform(737.5,240,5,5)
    createPlatform(880,240,5,5)
    createPlatform(810,175,5,5)
    createPlatform(720,100,30,7.5)
    createPlatform(880,100,25,7.5)
    createPlatform(450,330,200,7.5)
    createPlatform(525,230,200,7.5)
    createPlatform(450,130,200,7.5)

    createPlatform(900,100,400,7.5)
    createPlatform(1000,230,400,7.5)
    createPlatform(900,360,400,7.5)
    createPlatform(1000,490,400,7.5)
    createPlatform(900,610,400,7.5)
    
    

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("diamond", 435, 675, 0, 0);
    createCollectable("diamond", 885, 25, 0, 0);
    createCollectable("diamond", 950, 660, 0, 0);


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("bottom", 900, 2500, 25, 25)
    createCannon("top", 1120, 2500, 25, 25)
    createCannon("bottom", 1100, 2250, 25, 25)
    createCannon("top", 1320, 2500, 25, 25)
    createCannon("bottom", 1300, 2500, 25, 25)

    ////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
