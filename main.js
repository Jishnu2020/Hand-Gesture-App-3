prediction = "";
Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90
})
camera = document.getElementById("camera");
Webcam.attach( '#camera' );
function take_snapshot() {
Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0FynHZ7Qu/model.json',modelLoaded);
function modelLoaded() {
console.log('Model Loaded!');
}
function speak() {
var synth = window.speechSynthesis;
speak_data = "The Prediction Is " + prediction;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}
function check() {
img = document.getElementById('captured_image');
classifier.classify(img, getResult);
}
function getResult(error, results) {
if (error) {
console.error(error)
}
else {
console.log(results);
document.getElementById("result_emotion_name").innerHTMLL = results[0].label;
prediction = results[0].label;
speak;
if(results[0].label == "Point Up") {
document.getElementById("update_emoji").innerHTML = "&#128070;";
}
if(results[0].label == "Superb") {
document.getElementById("update_emoji").innerHTML = "&#128076;";
}
if(results[0].label == "Wave") {
document.getElementById("update_emoji").innerHTML = "&#128075;";
}
if(results[0].label == "Thumb Up") {
document.getElementById("update_emoji").innerHTML = "&#128077;";
}
if(results[0].label == "Thumb Down") {
document.getElementById("update_emoji").innerHTML = "&#128078;";
}
if(results[0].label == "Clap") {
document.getElementById("update_emoji").innerHTML = "&#128079;";
}
if(results[0].label == "High Five") {
document.getElementById("update_emoji").innerHTML = "&#9995;";
}
}
}