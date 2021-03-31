    function setup(){
        video = createCapture(VIDEO);
        video.size(550,500);
        canvas = createCanvas(550,550);
        canvas.position(560,150);
    
        poseNet = ml5.poseNet(video,modelLoded);
        poseNet.on('poseNet',gotPoses);
    }
    function draw(){
        background('#ffabe9')
    }

    function modelLoded(){
        console.log("Posenet is Initialized!");
    }

    function gotPoses(results){
        if(results.length > 0){
           console.log(results);
        }
        
    }