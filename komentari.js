let name=" ";
name=window.prompt("Pleace enter your name:");


function update(){
    var how=name;
    var what=document.getElementById('proizvod').value;

var table=document.getElementById('myTable');
var row=table.insertRow();
var howcell=row.insertCell(0);
var whatcell=row.insertCell(1);
whatcell.innerHTML=what;
howcell.innerHTML=how;
document.getElementById('proizvod').value="";

}
function update0(){
    var how=name;
    var what=document.getElementById('proizvod0').value;

var table=document.getElementById('myTable0');
var row=table.insertRow();
var howcell=row.insertCell(0);
var whatcell=row.insertCell(1);
whatcell.innerHTML=what;
howcell.innerHTML=how;
document.getElementById('proizvod0').value="";

}
function update1(){
    var how=name;
    var what=document.getElementById('proizvod1').value;

var table=document.getElementById('myTable1');
var row=table.insertRow();
var howcell=row.insertCell(0);
var whatcell=row.insertCell(1);
whatcell.innerHTML=what;
howcell.innerHTML=how;
document.getElementById('proizvod1').value="";

}
function update2(){
    var how=name;
    var what=document.getElementById('proizvod2').value;

var table=document.getElementById('myTable2');
var row=table.insertRow();
var howcell=row.insertCell(0);
var whatcell=row.insertCell(1);
whatcell.innerHTML=what;
howcell.innerHTML=how;
document.getElementById('proizvod2').value="";

}

var num=0;
var klik=0;
function like(vam){
   klik=klik+1;
    if(klik==1){
  num=num+1;
  vam.innerHTML='LIKE '+num;
    //var s= document.getElementById('kopce');
   // s.innerHTML = 'LIKE '+num;
}
    else{
        klik=0;
       num=num-1;
       vam.innerHTML='LIKE '+num;
       // document.getElementById('kopce').innerHTML='LIKE '+num;
     
    }
}