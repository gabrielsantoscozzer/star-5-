function preload() {
    this.load.image('money', 'assets/inimigo.png');
this.load.spritesheet('personagen','assets/dude.png', {frameWidth:32, frameHeight:48});
  this.load.image('star', 'assets/star.png')
  
}

function create() {
    this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

  var chao = this.add.rectangle(0,500,2000,30,0xFF5C00).setOrigin(0,0);
  this.physics.add.existing(chao)
  chao.body.allowGravity = false
  chao.body.setImmovable(true);
  
    this.personagen = this.physics.add.image(300,470,'personagen')
    this.physics.add.collider(this.personagen, chao)
    this.physics.add.collider(this.personagen, chao)
    this.physics.add.collider(this.personagen, chao)
  
  this.add.image(100,100,'money')
  
 var star = this.physics.add.image(327,300,'star');
this.physics.add.collider(this.personagen, star, this.pegou, null, this);

}

 function update() 
{
  
    let cursors = this.input.keyboard.createCursorKeys();
    if ((cursors.left.isDown || this.a.isDown) || (cursors.right.isDown || this.d.isDown)) this.personagen.setVelocityX(cursors.left.isDown || this.a.isDown ? -160 : 160);
    else this.personagen.setVelocityX(0);
    if ((cursors.up.isDown || this.w.isDown) || (cursors.down.isDown || this.s.isDown)) this.personagen.setVelocityY(cursors.up.isDown || this.w.isDown ? -160 : 160);
    else this.personagen.setVelocityY(0);
}
  
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#f9f9f9',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);