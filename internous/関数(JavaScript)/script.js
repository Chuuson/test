//演習課題 関数

//■■■問１■■■
function areaCircle(radius){
    return radius * radius * 3.14;
}
document.write("問１<br>");
document.write("半径５cmの円の面積は" + areaCircle(5));
document.write("<br>");
document.write("半径７cmの円の面積は" + areaCircle(7));
document.write("<br>");
document.write("半径１０cmの円の面積は" + areaCircle(7));
document.write("<br><br>");


//■■■問２■■■
function admissonFee(adult,child){
    return (500 * adult) + (200 * child);
}
document.write("問２<br>");
document.write("Aグループの合計金額は" + admissonFee(2,4) + "円です。");
document.write("<br>");
document.write("Bグループの合計金額は" + admissonFee(1,5) + "円です。");
document.write("<br>");
document.write("Cグループの合計金額は" + admissonFee(3,7) + "円です。");
document.write("<br><br>");