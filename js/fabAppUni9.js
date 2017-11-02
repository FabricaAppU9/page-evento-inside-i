$(function () {
    timeLineMemorial()
       
})

function timeLineMemorial() {
    
    $("#santoAmaro").css("background-color", "#ff9e01");
    $("#vilaPrudente").css("background-color", "#ff9e01");
    $("#memorial").css("background-color", "#0062cc");
    $("#timeLineVP").hide();
    $("#timeLineSantoAmaro").hide();
    $("#timeLineMemorial").show();

}

function timeLineVP() {
    $("#santoAmaro").css("background-color", "#ff9e01");
    $("#memorial").css("background-color", "#ff9e01");
    $("#vilaPrudente").css("background-color", "#0062cc");
    $("#timeLineMemorial").hide();
    $("#timeLineSantoAmaro").hide();
    $("#timeLineVP").show();
}

function timeLineSantoAmaro() {
    debugger
    $("#memorial").css("background-color", "#ff9e01");
    $("#vilaPrudente").css("background-color", "#ff9e01");
    $("#santoAmaro").css("background-color", "#0062cc");
    $("#timeLineVP").hide();
    $("#timeLineMemorial").hide();
    $("#timeLineSantoAmaro").show();
}