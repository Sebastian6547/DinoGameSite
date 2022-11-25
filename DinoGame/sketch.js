        let dino;
        let dinoImage;
        let cactusImage;
        let foodImage;
        let cloudImage;
        let backgroundImage;
        let cacti = [];
        let foods = [];
        let clouds = [];
        let score = 0;

        // Classifier Variable
        let classifier;
        // Model URL
         let imageModelURL = 'https://teachablemachine.withgoogle.com/models/2DT0WZrIx/';

        // Video
        let video;
        let flippedVideo;
        // To store the classification
        let label = "";

        // Load the model first
        function preload() {
          dinoImage = loadImage('./assets/dinoImage.png');
          cactusImage = loadImage('./assets/cactusImage.png');
          foodImage = loadImage('./assets/food.png');
          cloudImage = loadImage('./assets/cloud.png');
          classifier = ml5.imageClassifier(imageModelURL + 'model.json');
        }

        function setup() {
          createCanvas(1500, 750);
          // Create the video
          video = createCapture(VIDEO);
          video.size(320, 240);
          video.hide();

          flippedVideo = ml5.flipImage(video);

          dino = new Dino();
          // Start classifying
          classifyVideo();
        }

        function draw(){
          background(0);
          // Draw the video
          
          // cactus = life--      
          if (random(1) < 0.024&&score>4000) {
            cacti.push(new Cactus());
          }
          else if (random(1) < 0.018&&score>2000) {
            cacti.push(new Cactus());
          }
          else if (random(1) < 0.012&&score>1000) {
            cacti.push(new Cactus());
          }
          else if (random(1) < 0.006) {
            cacti.push(new Cactus());
          }
          for (let c of cacti) {
            if(score>1000)
            {
                c.speed+=0.05;
            }
            if(score>2000)
            {
                c.speed+=0.07;
            }
            if(score>3000)
              {
                c.speed+=0.08;
              }

            c.move();
            c.show();

            if (dino.hits(c)) {              
              dino.life--;
              console.log('Lost a life');
              if(dino.life == 0){
              // stop the sketch from looping
              noLoop();
                 }    
              c.stop();
            }
          }
          // food = life++
          if (random(1) < 0.004) {
            foods.push(new Food());
          }
          for (let f of foods) {
            f.move();
            f.show();

            if (dino.hits(f)) {
              console.log('Added a life');
              dino.life++;
              f.stop();
            }
          }
          // clouds = flight
          if (random(1) < 0.007) {
          clouds.push(new Cloud());
          }
          for (let cl of clouds) {
            cl.move();
            cl.show();

            if (dino.hits(cl)) {              
              console.log('Double Jump');
              dino.fly();
              cl.stop();
            }
          }
          

        dino.show();
        dino.move();
          score++;

          if(label == 'Arms Raised'){
            dino.jump();
          }

          // Draw the label
          fill(255);
          textSize(30);
          textAlign(CENTER);
          text('Lives: '  + dino.life, width /2, 45);
          text('Score: '  + score, width /2, 90);
        }

        // Get a prediction for the current video frame
        function classifyVideo() {
          flippedVideo = ml5.flipImage(video)
          classifier.classify(flippedVideo, gotResult);
          flippedVideo.remove();

        }
        function keyPressed(){
          if(key == ' '){
            dino.jump();
          }
        }

        // When we get a result
        function gotResult(error, results) {
          // If there is an error
          if (error) {
            console.error(error);
            return;
          }
          // The results are in an array ordered by confidence.
          // console.log(results[0]);
          label = results[0].label;
          // Classifiy again!
          classifyVideo();
        }