import kaplay from "kaplay";

const k = kaplay({
    width: 1280,
    height: 720,
});

k.loadBean();
k.setGravity(2000); // Reduced gravity for better visibility

const player = k.add([
    k.sprite("bean"),
    k.pos(k.center()),
    k.area(),
    k.body(),
    k.offscreen(),
    k.color(255, 0, 0), // Adding color to make it more visible
]);


player.onKeyPress("space", () => {
   if(player.isGrounded())
   {
    player.jump();
   }
    

})
k.scene("gameover", () =>{
    k.add([k.text("Done"), k.pos(k.center())]);
})

player.onExitScreen(() =>{
    k.go("gameover");
})


k.add([
    k.rect(k.width(), 50), // Width of screen, height of 50
    k.pos(0, k.height() - 50), // Position at bottom of screen
    k.area(),
    k.body({ isStatic: true }),
    k.color(0, 255, 0), // Green platform
    k.outline(3),
]);


let counter = 0;
const counterUI = k.add([k.text("0")]);


k.loop(1, () => {
    const speeds = [300, 500, 800];
    const currentSpeed = speeds[Math.floor(Math.random()*speeds.length)]
    k.add([
        k.rect(50,50),
        k.pos(1200,660),
        k.area(),
        k.body(),
        k.outline(3),
        k.move(k.vec2(-1,0),currentSpeed),
        

    ])
    counter++;
    counterUI.text = counter;

})