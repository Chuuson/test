//演習課題　☆の出力

//■■■問１■■■
document.write("問１");
document.write("<br>");
for(var a = 1; a <= 5; a++){
    document.write("★");
}
document.write("<br>");

//■■■問２■■■
document.write("問２");
document.write("<br>");
for(var b = 1; b <= 2; b++){
    for(var z = 1; z <= 3; z++){
        document.write("★");
    }
    document.write("<br>")
}

//■■■問３■■■
document.write("問３");
document.write("<br>");
for(var c = 1; c <= 2; c++){
    for(var y = 1; y <= 5; y++){
        document.write("☆");
    }
    document.write("<br>");
}

//■■■問４■■■
document.write("問４");
document.write("<br>");
for(var d = 1; d <= 4; d++){
    for(var x = 1; x <= 5; x++){
        document.write("★");
    }
    document.write("<br>");
}

//■■■問５■■■
document.write("問５");
document.write("<br>");
for(var e = 1; e <= 4; e++){
    for(var w = 1; w <= 3; w++){
        document.write("★");
    }
    document.write("<br>");
}

//■■■問６■■■
document.write("問６");
document.write("<br>");
for(var f = 1; f <= 3; f++){
    for(var g = 1; g <= 3; g++){
        if(g % 2 == 1){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
    document.write("<br>");
}

//■■■問７■■■
document.write("問７");
document.write("<br>");
for(var h = 1; h <= 5; h++){
    for(var i = 1; i <= 5; i++){
        if(i % 2 == 1){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
    document.write("<br>");
}

//■■■問８■■■
document.write("問８");
document.write("<br>");
for(var j = 1; j <= 5; j++){
    for(var v = 1; v <= j; v++){
        document.write("★");
    }
    document.write("<br>");
}