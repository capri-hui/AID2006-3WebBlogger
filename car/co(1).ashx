/* Append File:/engine/root/newget.js */
function daluan(nums) {
    var array = [];
    for (var i = 0; i < nums; i++) {
        array[i] = i;
    }
    for (var i = 0; i < nums; i++) {
        var rand = parseInt(nums * Math.random());
        var temp = array[i];
        array[i] = array[rand];
        array[rand] = temp;
    }
    return array;
}
function ad_60_fix(num) {
   ++num;
   return num >= 10 ? 'ad_60_' + num : 'ad_60_0' + num;
}

var arrList = new Array();
if (typeof (txtad_60_01) != 'undefined') {
    arrList[arrList.length + '__fix'] = 0;
    arrList[arrList.length] = txtad_60_01;
}
if (typeof (txtad_60_02) != 'undefined') {
    arrList[arrList.length + '__fix'] = 1;
    arrList[arrList.length] = txtad_60_02;
}
if (typeof (txtad_60_03) != 'undefined') {
    arrList[arrList.length + '__fix'] = 2;
    arrList[arrList.length] = txtad_60_03;
}
if (typeof (txtad_60_04) != 'undefined') {
    arrList[arrList.length + '__fix'] = 3;
    arrList[arrList.length] = txtad_60_04;
}
if (typeof (txtad_60_05) != 'undefined') {
    arrList[arrList.length + '__fix'] = 4;
    arrList[arrList.length] = txtad_60_05;
}
if (typeof (txtad_60_06) != 'undefined') {
    arrList[arrList.length + '__fix'] = 5;
    arrList[arrList.length] = txtad_60_06;
}
if (typeof (txtad_60_07) != 'undefined') {
    arrList[arrList.length + '__fix'] = 6;
    arrList[arrList.length] = txtad_60_07;
}
if (typeof (txtad_60_08) != 'undefined') {
    arrList[arrList.length + '__fix'] = 7;
    arrList[arrList.length] = txtad_60_08;
}
if (typeof (txtad_60_09) != 'undefined') {
    arrList[arrList.length + '__fix'] = 8;
    arrList[arrList.length] = txtad_60_09;
}
if (typeof (txtad_60_10) != 'undefined') {
    arrList[arrList.length + '__fix'] = 9;
    arrList[arrList.length] = txtad_60_10;
}
if (typeof (txtad_60_11) != 'undefined') {
    arrList[arrList.length + '__fix'] = 10;
    arrList[arrList.length] = txtad_60_11;
}
var aaa = daluan(arrList.length);
for (var i = 0; i < aaa.length; i++) {
    document.getElementById(ad_60_fix(i)).innerHTML = arrList[aaa[i]];
	if (document.getElementById(ad_60_fix(i)).getAttribute("data-target") != undefined) {
    	document.getElementById(ad_60_fix(i)).setAttribute("data-target", '#' + ad_60_fix(arrList[aaa[i] + '__fix']) + "_showBig");
    }
}

var AD_GetID=document.getElementById('ad_60_01');
if (AD_GetID != null) {if(AD_GetID.innerHTML.replace(new RegExp(' ','gm'),'').replace(new RegExp('\n','gm'),'')==''){AD_GetID.style.display='none';}else{AD_GetID.style.display='';}}

var AD_GetID=document.getElementById('ad_60_02');
if (AD_GetID != null) {if(AD_GetID.innerHTML.replace(new RegExp(' ','gm'),'').replace(new RegExp('\n','gm'),'')==''){AD_GetID.style.display='none';}else{AD_GetID.style.display='';}}

var AD_GetID=document.getElementById('ad_60_03');
if (AD_GetID != null) {if(AD_GetID.innerHTML.replace(new RegExp(' ','gm'),'').replace(new RegExp('\n','gm'),'')==''){AD_GetID.style.display='none';}else{AD_GetID.style.display='';}}

var AD_GetID=document.getElementById('ad_60_04');
if (AD_GetID != null) {if(AD_GetID.innerHTML.replace(new RegExp(' ','gm'),'').replace(new RegExp('\n','gm'),'')==''){AD_GetID.style.display='none';}else{AD_GetID.style.display='';}}

var AD_GetID=document.getElementById('ad_60_05');
if (AD_GetID != null) {if(AD_GetID.innerHTML.replace(new RegExp(' ','gm'),'').replace(new RegExp('\n','gm'),'')==''){AD_GetID.style.display='none';}else{AD_GetID.style.display='';}}

var AD_GetID=document.getElementById('ad_60_06');
if (AD_GetID != null) {if(AD_GetID.innerHTML.replace(new RegExp(' ','gm'),'').replace(new RegExp('\n','gm'),'')==''){AD_GetID.style.display='none';}else{AD_GetID.style.display='';}}

var AD_GetID=document.getElementById('ad_60_07');
if (AD_GetID != null) {if(AD_GetID.innerHTML.replace(new RegExp(' ','gm'),'').replace(new RegExp('\n','gm'),'')==''){AD_GetID.style.display='none';}else{AD_GetID.style.display='';}}

var AD_GetID=document.getElementById('ad_60_08');
if (AD_GetID != null) {if(AD_GetID.innerHTML.replace(new RegExp(' ','gm'),'').replace(new RegExp('\n','gm'),'')==''){AD_GetID.style.display='none';}else{AD_GetID.style.display='';}}

var AD_GetID=document.getElementById('ad_60_09');
if (AD_GetID != null) {if(AD_GetID.innerHTML.replace(new RegExp(' ','gm'),'').replace(new RegExp('\n','gm'),'')==''){AD_GetID.style.display='none';}else{AD_GetID.style.display='';}}

var AD_GetID=document.getElementById('ad_60_10');
if (AD_GetID != null) {if(AD_GetID.innerHTML.replace(new RegExp(' ','gm'),'').replace(new RegExp('\n','gm'),'')==''){AD_GetID.style.display='none';}else{AD_GetID.style.display='';}}

var AD_GetID=document.getElementById('ad_60_11');
if (AD_GetID != null) {if(AD_GetID.innerHTML.replace(new RegExp(' ','gm'),'').replace(new RegExp('\n','gm'),'')==''){AD_GetID.style.display='none';}else{AD_GetID.style.display='';}}

