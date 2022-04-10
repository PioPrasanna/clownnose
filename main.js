noseX=0;
noseY=0;

function preload(){
    var clownnose=loadImage('https://i.postimg.cc/Fzq2wZ2S/clownnose.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);

}

function modelLoaded(){
    console.log( "poseNet is started");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);


    }

}



function draw(){
image(video,0,0,300,300);
image(clownnose,noseX,noseY,30,30);
}
function take_snapshot(){
    save('prasanna.png');
}