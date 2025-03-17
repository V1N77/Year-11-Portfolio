var randomChange = document.getElementById('randomChange'),
images = ['Relaxatron1.gif','Relaxatron2.gif','Relaxatron3.gif','Relaxatron4.gif','Relaxatron5.gif','Relaxatron6.gif']

    var imgCount = images.length
    //alert(imgCount)
    var number = Math.floor(Math.random() * imgCount);
    //alert(number)
        window.onload = function (){    

            randomChange.style.backgroundImage = 'url(' + images[number] +')'
        }
