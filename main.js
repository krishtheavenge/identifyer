Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera1");
Webcam.attach('#camera1');
function take_snapshot(){
    Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML ="<img id='captured_image' src='"+data_uri+"'>";
    })
};
console.log("ml5version",ml5.version);
  classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Juu0IHZ15/model.json',modelLoaded);
            function modelLoaded(){
                console.log("model is loaded");
            }
            function identify_object(){
                img = document.getElementById("captured_image");
                classifier.classify(img,got_result)
            }
                    function got_result(error,result){
                        if(error){
                            console.error(error);
                        }
                        else{
                                console.log(result);
                                document.getElementById("result_object").innerHTML = result[0].label;
                                document.getElementById("result_accuracy").innerHTML = result[0].confidence.toFixed(2);
                        }
                    }


