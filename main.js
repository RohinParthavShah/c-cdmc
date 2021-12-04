music1 = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreleftWrist = 0;
scoreRightWrist = 0;
statusSong1 = "";

function  preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log('Posenet is Initialized');
}

function draw(){   
     image(video, 0, 0,600,500);
  statusSong1 =   music1.isPlaying();
    fill("#00008b");
    stroke("#00008b");
    
    if(scoreleftWrist > 0.2 ){
        circle(leftWristX,leftWristY,20);
           music2.stop();





       if(statusSong1 == false){
            music1.play();
            document.getElementById("Song_name").innerHTML = "playing - Harry Potter Theme";






      }
        
    
    }
    statusSong2 =   music2.isPlaying();
    
    
    if(scoreleftWrist > 0.2 ){
        circle(leftWristX,leftWristY,20);
           music1.stop();





       if(statusSong2 == false){
            music2.play();
            document.getElementById("Song_name").innerHTML = "playing - Harry Potter Theme";






      }
        
    
    }
}




function play(){
    music1.play();
   
}

function gotPoses(results){
    if(results.length > 0)
{
    scoreleftWrist =  results[0].pose.keypoints[9].score;
    console. log(results);
   leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log(" leftWristX = " + leftWristX + " leftWristY= " + leftWristY );



    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("  rightWristX = " +  rightWristX  + "  rightWristY= " +  rightWristY );
}
}



