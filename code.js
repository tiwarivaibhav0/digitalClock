var count=0;
var minute=1;
var s;


$(document).ready(function(){
    setInterval(showTodayTime,1000);

  



    $(document).on('click','#showTime',function(){
        $("#hour").text($('#userHour').val());

    
        $("#minute").text($('#userMinute').val());

        $("#second").text($('#userSecond').val());
        $("#date").text($('#userDate').val());

        p=setInterval(showTime,1000);

        $("#showTime").prop('disabled','true');




    });

    $(document).on('click','.user',function(){
        clearInterval(p);
        $("#showTime").prop('disabled',false);

    });


    // STOPWATCH
    stopWatch();

    $(document).on('click','#start',function(){
     s=setInterval(countSec,1000);
     $("#start").prop('disabled','true');


    });
    $(document).on('click','#reset',function(){
        $("#min").text(0);
        $("#sec").text(0);
        count=0;
        minute=1;
     //   location.reload();
     clearInterval(s);
     $("#start").prop('disabled',false);

        

    });
    $(document).on('click','#stop',function(){
        $("#min").text(minute-1);
        $("#sec").text(count);
        count=0;
        minute=1;
        clearInterval(s);

        
       
        

    });
   
});

function showTime(){
   
   var second= Number($("#second").text());
   var minute= Number($("#minute").text());
   var hour= Number($("#hour").text());


   second+=1;
   if(second>59){
       second=0;
       minute+=1;

   }
   if(minute>59){
    minute=0;
    hour+=1;

}
if(hour>59){
    minute=0;
    second=0
    hour=0;

}


  $("#second").text(second);
  $("#minute").text(minute);
  $("#hour").text(hour);








}
function stopWatch(){
    let text="<button id='reset'>Reset</button> <button id='start'>Start</button> <button id='stop'>Stop</button><br>";
    text+="<span id='min'>0</span>:";
    text+="<span id='sec'>0</span>";

    $("#stopWatch").html(text);


}
function countSec(){
    count++;
    if(count%60==0){
    $("#min").text(minute++);
    count=0;

    }
       
     
    $("#sec").html(count);
}
function showTodayTime(){
    var date = new Date();
   // var dt=date.getDate();
    var time=date+ " ";
    // time+= date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    $("#today").html(time);
}