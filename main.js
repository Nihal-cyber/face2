
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("cam");
Webcam.attach('#cam');
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+ data_uri+'"/>';
    });
}
console.log("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FFCv4n83A/model.json',modelLoaded);
function modelLoaded()
{
    console.log("Model loaded");
}