//ClickedSprites
	var kiki;
	var lala;
        var star;
	
function preload(){
  cloud = loadImage('cloud.png');
  cloud2 = loadImage('cloud.png');
  cloud3 = loadImage('cloud.png');
  cloud4 = loadImage('cloud.png');
}

function setup() {
  createCanvas(1000,1000); 
  kiki = new Group();
  lala = new Group();
  star = new Group();
	 
  for(var i=0 ; i<4 ; i++){
    var sprite = createSprite(random(0,width), random(0,-1000));
    sprite.addAnimation("kiki", "assets/kiki1.png","assets/kiki4.png");
    sprite.velocity.y = 1; 
    kiki.add(sprite);
    sprite.setCollider("circle", 0,0,50); //コライダーの範囲を設定する
    sprite.onMousePressed = function() { //スプライトをクリックした時の設定をする
      this.remove(); //スプライトを消す
	  }
	}
	
  for(var j=0 ; j<4 ; j++){
    var sprite = createSprite(random(0,width), random(0,-1000));
    sprite.addAnimation("lala", "assets/lala1.png","assets/lala4.png");
    sprite.velocity.y = 3;//速度を3に設定
    lala.add(sprite);
    sprite.setCollider("circle", 0,0,50); //コライダーの範囲を設定する
    sprite.onMousePressed = function() {//スプライトをクリックした時の設定をする
      this.remove(); //スプライトを消す
    }
  }
	

for(var k=0 ; k<5 ; k++){
    var sprite = createSprite(random(0,width), random(0,-1000));
    sprite.addAnimation("star", "assets/star1.png","assets/star4.png");
    sprite.velocity.y = 5; //速度を5に設定
    star.add(sprite);
    sprite.setCollider("circle", 0,0,50);  //コライダーの範囲を設定する
    sprite.onMousePressed = function() { //スプライトをクリックした時の設定をする
      this.remove(); //スプライトを消す
    }
  }
}
	
function draw() {
  background(158, 231, 250);
  for(var i = 0; i<kiki.length; i++) {
    var p = kiki[i];
    if(p.position.y > height)
      p.position.y = 0;
  }
  for(var j = 0; j<lala.length; j++) {
    var s = lala[j];
    if(s.position.y > height)
      s.position.y = 0;
  }

for(var k = 0; k<star.length; k++) {
    var g = star[k];
    if(g.position.y > height)
    g.position.y = 0;
  }
  drawSprites();
  image(cloud, 100, 150, 200, 200);
  image(cloud2, 500, 400, 200, 200);
  image(cloud3, 250, 600, 200, 200);
  image(cloud4, 600, 700, 200, 200);
}
