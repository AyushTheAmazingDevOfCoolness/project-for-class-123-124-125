noseX=0;
noseY=0;
left_wristX=0;
right_wristX=0;
difference=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized')
}
function draw()
{
    background('#DC143C');
    textSize(difference);
    fill('#00FFFF');
    text('Ayush', noseX, noseY)
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        left_wristX=results[0].pose.leftWrist.x;
        right_wristX=results[0].pose.rightWrist.x;

        difference=floor(left_wristX-right_wristX);
    }
}