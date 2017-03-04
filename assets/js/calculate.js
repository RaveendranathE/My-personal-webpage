
function getTotal(){
    var value;
    if ($("#ra1")[0].checked)
    {
        value = $("#ra1")[0].value;
        return value;
    }
    if($("#ra2")[0].checked)
    {
        value = $("#ra2")[0].value;
        return value;
    }
    if($("ra3")[0].checked)
    {
        value = $("#ra3")[0].value;
        return value;
    }
}
function myFun(){
    var se = $("#option")[0].value;
    return se;
}
function Calculate(){
    var answer=getTotal()*myFun();
    console.log("answer", answer);
    document.getElementById("cost").value = answer;
}
