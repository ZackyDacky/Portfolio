class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTitle');
    }
    preload()
    {
        this.load.image("button1", "images/ui/buttons/2/1.png")
    	this.load.image("title", "images/title.png")
    }
    create() {

        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller()

        var mediaManager = new MediaManager({scene:this})
        mediaManager.setBackgroundMusic("backgroundMusic")

        this.alignGrid = new AlignGrid({rows: 11, cols:11, scene:this})
        this.backImage = this.add.image(game.config.width/2, game.config.height/2, "titleBack")
        //this.alignGrid.showNumbers()

        var title = this.add.image(0, 0, "title")
        Align.scaleToGameW(title, .8)
        this.alignGrid.placeAtIndex(38, title)

        var btnStart = new FlatButton({scene:this, key:"button1", text:"Start!", x:240, y:100, event:"start_game"}) 
        this.alignGrid.placeAtIndex(93, btnStart)

        emitter.on("start_game", this.startGame, this)

        this.text1 = this.add.text(12, 0, 'Instructions:')
        this.text1.y = 541
        this.text2 = this.add.text(0, 0, 'The objective is to survive for as long')
        this.text3 = this.add.text(this.text1.x, 575, 'as possible while dodging the obstacles.')
        this.text4 = this.add.text(this.text1.x, 592, 'Controls:')
        this.text5 = this.add.text(this.text1.x, 609, 'Click to switch sides')
        //this.text6 = this.add.text(this.text1.x, 626, 'Test')
        //this.alignGrid.placeAtIndex(110, this.text2)
        this.text2.y = 560
        this.text2.x = this.text1.x
    }

    startGame()
    {
        this.scene.start("SceneMain")
    }

    //


    update() {
     
    }
}