var firstGroupCounter = 0;
var lastCorrectAnswer = 0;
var lastContent = "";
var questionsCorrect = 0;
var questionsIncorrect = 0;
var skipValue = false;

var characterCount = 0;

var studentNamePls = "";
var qIndex = 0;

var finalTableContent = "";

var helpArrayOne = [];
var helpArrayTwo = [];
var helpIndex = 0;
//------------------------------DATA STORAGE----------------------------

var csvIncorrect = [];
var csvCorrect = [];
var currentDate = new Date();

var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

var dateString = date + "-" +(month + 1) + "-" + year;
var csvName = "";
var csvIncorrectIndex = 0;
var csvCorrectIndex = 0;
var i = csvCorrect.length+csvIncorrect.length ;


//----------------------------------------------------------------------

//---------------------------------------END TABLE--------------------
var twoTotal = 0;
var twoCorrect = 0;

var threeTotal = 0;
var threeCorrect = 0;

var fourTotal = 0;
var fourCorrect = 0;

var fiveTotal = 0;
var fiveCorrect = 0;

var sixTotal = 0;
var sixCorrect = 0;

var sevenTotal = 0;
var sevenCorrect = 0;

var eightTotal = 0;
var eightCorrect = 0;

var nineTotal = 0;
var nineCorrect = 0;

var tenTotal = 0;
var tenCorrect = 0;

var elevenTotal = 0;
var elevenCorrect = 0;

var twelveTotal = 0;
var twelveCorrect = 0;
//-----------------------------FULLSCREEN---------------------------

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
  $('.fullscreenButton').bind('click', closeFullscreen);
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
  $('.fullscreenButton').bind('click', openFullscreen);
}
//
//----------------------------THEME CHANGE------------------------------
var showHelpVar = false;

function showHelp()
{
  if(showHelpVar == false)
  {
    showHelpVar = true;
  $('.colourPreview').css('display','none');
  $('.appInfo').css('display','block');
  }
  if(showHelpVar == true)
  {
  $('.colourPreview').css('display','block');
  $('.appInfo').css('display','none');
    showHelpVar = false;
  }
}
var themeStatus = "";

function changeThemeOne()
{
  $('body').css('color','black');
  $('body').css('background','white');

  $('.stickyColourPreview').css('color', 'white');
  $('.stickyColourPreview').css('border-right', '2px solid white');
  $('.stickyColourPreview').css('border-bottom', '2px solid white');
  $('.stickyColourPreview').css('background', 'black');

  $('.colourPreview').css('background','white');
  $('.colourPreview').css('color', 'black');
  $('.colourPreview').css('border','2px solid black');
  $('.numberButton').css('background', 'black');
  $('.numberButton').css('color', 'white');
  $('.numberButton').css('border','3px solid white');

  $('.startGame').css('border', '3px solid black');

  $('.timeBar').css('background','white');
  $('.timeBar').css('border','5px solid black');
  $('.fillTimeBar').css('background','black');
  $('.appInfo').css('background','black');

  $('.answerGiven').css('color','black');

  $('.randomMultiply').css('color','black');
}

function changeThemeTwo()
{
  $('body').css('color','#FEF95D');
  $('body').css('background','black');

  $('.stickyColourPreview').css('border-right', ' 2px solid #FEF95D');
  $('.stickyColourPreview').css('border-bottom', ' 2px solid #FEF95D');
  $('.stickyColourPreview').css('color', '#FEF95D');
  $('.stickyColourPreview').css('background', 'black');

  $('.colourPreview').css('background', 'black');
  $('.colourPreview').css('color','#FEF95D');
  $('.colourPreview').css('border','2px solid #FEF95D');

  $('.numberButton').css('color','#FEF95D');
  $('.numberButton').css('background','black');
  $('.numberButton').css('border','3px solid #FEF95D');

  $('.startGame').css('border', '3px solid #FEF95D');
  $('.timeBar').css('background','#FEF95D');
  $('.fillTimeBar').css('background','black');
  $('.timeBar').css('border','5px solid white');
  $('.answerGiven').css('color','black');
  $('.randomMultiply').css('color','#FEF95D');

  $('.appInfo').css('background','black');

}

function changeThemeThree()
{
  $('body').css('color', 'black');
  $('body').css('background', '#747ffc');

  $('.stickyColourPreview').css('color', '#747ffc');
  $('.stickyColourPreview').css('border-right', ' 2px solid #4f35fc');
  $('.stickyColourPreview').css('border-bottom', ' 2px solid #4f35fc');


  $('.colourPreview').css('background','#747ffc');
  $('.colourPreview').css('color','black');
  $('.colourPreview').css('border','2px solid #4f35fc');

  $('.numberButton').css('color','#747ffc');
  $('.numberButton').css('border', '3px solid #4f35fc');
  $('.numberButton').css('background', 'black');

  $('.startGame').css('border', '3px solid #4f35fc');
  $('.timeBar').css('background','white');
  $('.fillTimeBar').css('background','black');

  $('.appInfo').css('background','#747ffc');
  $('.randomMultiply').css('color','black');
}

function changeThemeFour()
{
  $('body').css('color', 'black');
  $('body').css('background', '#FFE4C4')

  $('.stickyColourPreview').css('color', '#FFE4C4');
  $('.stickyColourPreview').css('border-right', ' 2px solid #fcac62');
  $('.stickyColourPreview').css('border-bottom', ' 2px solid #fcac62');
  $('.stickyColourPreview').css('background', 'black');

  $('.colourPreview').css('background','#FFE4C4');
  $('.colourPreview').css('border', '2px solid #fcac62');
  $('.colourPreview').css('color','black');

  $('.numberButton').css('color','#FFE4C4');
  $('.numberButton').css('background','black');
  $('.numberButton').css('border', '3px solid #fcac62');

  $('.startGame').css('border', '3px solid #fcac62');
  $('.timeBar').css('background','white');
  $('.fillTimeBar').css('background','black');

  $('.appInfo').css('background','#FFE4C4');
  $('.randomMultiply').css('color','black');
}

function changeThemeFive()
{
  $('body').css('color', '#161eaf');
  $('body').css('background','#FFF8DC');

  $('.stickyColourPreview').css('color', '#FFF8DC');
  $('.stickyColourPreview').css('background', '#161eaf');
  $('.stickyColourPreview').css('border-right', ' 2px solid #161eaf');
  $('.stickyColourPreview').css('border-bottom', ' 2px solid #161eaf');

  $('.colourPreview').css('background','#FFF8DC');
  $('.colourPreview').css('color','#161eaf');
  $('.colourPreview').css('border','2px solid #161eaf');

  $('.numberButton').css('color','#FFF8DC');
  $('.numberButton').css('background','#161eaf');
  $('.numberButton').css('border','3px solid #FFDEAD');

  $('.startGame').css('border', '3px solid #FFDEAD');
  $('.timeBar').css('background','white');
  $('.fillTimeBar').css('background','black');

  $('.appInfo').css('background','#FFF8DC');
  $('.randomMultiply').css('color','#161eaf');

}
//-----------------------------SWITCHING PAD----------------------------

//-----------------------------LENGTH CONTROL--------------------------

function lengthControl()
{
  if(characterCount>=4)
  {
      answerInnerHTML.innerHTML = answerInnerHTML.innerHTML.slice(0,4);
  }
}

setInterval(lengthControl,10);
//---------------------------------------------------------------------
var toggleNo = true;
var switchD = 123;
function toggleNumbers()
{
  if(toggleNo==true)
  {
  document.getElementById('numberPad').style.display = "none";
  toggleNo = false;
  }

  else if(toggleNo==false)
  {
  document.getElementById('numberPad').style.display = "block";
  toggleNo = true;
  }
}

function switchDigits()
{
  if(switchD==123)
  {
    $('#numberOne').css('left', '0px');
    $('#numberOne').css('top', '220px');

    $('#numberTwo').css('left', '160px');
    $('#numberTwo').css('top', '220px');

    $('#numberThree').css('left', '320px');
    $('#numberThree').css('top', '220px');

    $('#numberSeven').css('left', '0px');
    $('#numberSeven').css('top', '0px');

    $('#numberEight').css('left', '160px');
    $('#numberEight').css('top', '0px');

    $('#numberNine').css('left', '320px');
    $('#numberNine').css('top', '0px');


    switchD = 789;
  }

  else if(switchD==789)
  {
    $('#numberNine').css('left', '320px');
    $('#numberNine').css('top', '220px');

    $('#numberEight').css('left', '160px');
    $('#numberEight').css('top', '220px');

    $('#numberSeven').css('left', '0px');
    $('#numberSeven').css('top', '220px');

    $('#numberThree').css('left', '320px');
    $('#numberThree').css('top', '0px');

    $('#numberTwo').css('left', '160px');
    $('#numberTwo').css('top', '0px');

    $('#numberOne').css('left', '0px');
    $('#numberOne').css('top', '0px');

    switchD = 123;
  }

}
//---------------------------------------------------------------------------

//-----------------------CURSED SCRIPT-------------------------
function shuffleArray(o)
{

 for(var j, x, i = o.length; i; j = parseInt( (Math.random() * i) ), x = o[--i], o[i] = o[j], o[j] = x);

 return o;
}
//--------------------------------------------------------------------
document.addEventListener('keyup',addNumber);
var answerInnerHTML = document.getElementById('answerGiven');



function addNumber(event)
{
  if(event.keyCode == 48 || event.keyCode == 96)
  {
    document.getElementById('answerGiven').innerHTML += 0;
    characterCount++;
  }

  if(event.keyCode == 49 || event.keyCode == 97)
  {
    document.getElementById('answerGiven').innerHTML += 1;
    characterCount++;
  }

  if(event.keyCode == 50 || event.keyCode == 98)
  {
    document.getElementById('answerGiven').innerHTML += 2;
    characterCount++;
  }

  if(event.keyCode == 51 || event.keyCode == 99)
  {
    document.getElementById('answerGiven').innerHTML += 3;
    characterCount++;
  }

  if(event.keyCode == 52 || event.keyCode == 100)
  {
    document.getElementById('answerGiven').innerHTML += 4;
    characterCount++;
  }

  if(event.keyCode == 53 || event.keyCode == 101)
  {
    document.getElementById('answerGiven').innerHTML += 5;
    characterCount++;
  }

  if(event.keyCode == 54 || event.keyCode == 102)
  {
    document.getElementById('answerGiven').innerHTML += 6;
    characterCount++;
  }

  if(event.keyCode == 55 || event.keyCode == 103)
  {
    document.getElementById('answerGiven').innerHTML += 7;
    characterCount++;
  }

  if(event.keyCode == 56 || event.keyCode == 104)
  {
    document.getElementById('answerGiven').innerHTML += 8;
    characterCount++;
  }

  if(event.keyCode == 57 || event.keyCode == 105)
  {
    document.getElementById('answerGiven').innerHTML += 9;
    characterCount++;
  }

  if(event.keyCode == 8 )
  {
    answerInnerHTML.innerHTML = answerInnerHTML.innerHTML.slice(0,-1);
    characterCount--;
  }
}


function buttonReact(nr)
{
  document.getElementById('answerGiven').innerHTML+= nr;
  characterCount++;
}

function buttonClear()
{
   answerInnerHTML.innerHTML = answerInnerHTML.innerHTML.slice(0,-1);
   characterCount--;
}

function inputClear()
{
  document.getElementById('answerGiven').innerHTML = "";
}

function checkAnswer()
{
  if(lastCorrectAnswer==document.getElementById('answerGiven').innerHTML)
  {
    questionsCorrect++;
    csvCorrect[csvCorrectIndex] = lastContent;
    csvCorrectIndex++;

    if(a == 2)
    {
      twoTotal++;
      twoCorrect++;
    }

    if(a == 3)
    {
      threeTotal++;
      threeCorrect++;
    }

    if(a == 4)
    {
      fourTotal++;
      fourCorrect++;
    }

    if(a == 5)
    {
      fiveTotal++;
      fiveCorrect++;
    }

    if(a == 6)
    {
      sixTotal++;
      sixCorrect++;
    }

    if(a == 7)
    {
      sevenTotal++;
      sevenCorrect++;
    }

    if(a == 8)
    {
      eightTotal++;
      eightCorrect++;
    }

    if(a == 9)
    {
      nineTotal++;
      nineCorrect++;
    }

    if(a == 10)
    {
      tenTotal++;
      tenCorrect++;
    }

    if(a == 11)
    {
      elevenTotal++;
      elevenCorrect++;
    }

    if(a == 12)
    {
      twelveTotal++;
      twelveCorrect++;
    }

  }

  else
  {
    questionsIncorrect++;
    csvIncorrect[csvIncorrectIndex] = lastContent;
    csvIncorrectIndex++;

    if(a == 2)
    {
      twoTotal++;
    }

    if(a == 3)
    {
      threeTotal++;
    }

    if(a == 4)
    {
      fourTotal++;
    }

    if(a == 5)
    {
      fiveTotal++;
    }

    if(a == 6)
    {
      sixTotal++;
    }

    if(a == 7)
    {
      sevenTotal++;
    }

    if(a == 8)
    {
      eightTotal++;
    }

    if(a == 9)
    {
      nineTotal++;
    }

    if(a == 10)
    {
      tenTotal++;
    }

    if(a == 11)
    {
      elevenTotal++;
    }

    if(a == 12)
    {
      twelveTotal++;
    }
  }
}

function newFunctionPls()
{
  if(i>=10)
  {
    $('.turnCounter').css('left','510px');
  }
  qIndex++;
  //--------------------------------------------------
  document.getElementById('turnCounter').innerHTML = qIndex + "/25";
  function loadAnotherQuestion()
  {


    document.getElementById('fillTimeBar').style.width = "0px";
    document.getElementById('randomMultiply').innerHTML = " ";

    setTimeout(function(){
      newFunctionPls();
      randomQuestion();
      inputClear();
    }, 3000);

  }

  //------------------------------------------------------------
  function addListener()
  {
      if(event.keyCode == 13)
      {
        skipValue = true;
        document.removeEventListener('keyup',addListener);
      }

  }

  function addClickListener()
  {
    skipValue = true;
    var enterClick = document.getElementById('buttonEnter');
    enterClick.removeEventListener("click", addClickListener);
  }

  //-----------------------------------

  document.getElementById('fillTimeBar').style.width = "0px";
  document.addEventListener('keyup',addListener);
  var enterClick = document.getElementById('buttonEnter');
  enterClick.addEventListener("click", addClickListener);

  var dateSeconds = currentDate.getSeconds();
  var dateEnd = dateSeconds+6;

  var realCount = setInterval(realCount,1000);
  var id = setInterval(frame, 20);
  var innerBar = document.getElementById('fillTimeBar');
  var width = 0;
  function realCount()
  {
    dateSeconds++;
    if(dateSeconds==dateEnd || skipValue == true)
    {
      clearInterval(realCount);
      checkAnswer();
      inputClear();
      loadAnotherQuestion();
      skipValue = false;

      document.removeEventListener('keyup',addListener);
      var enterClick = document.getElementById('buttonEnter');
      enterClick.removeEventListener("click", addClickListener);
    }

  }
  function frame()
  {
    if(width >= 450 || skipValue == true )
    {
     clearInterval(id);
    }

    else
    {
      width+=1.5;
      innerBar.style.width = width;
    }
  }
}



var inverseProblem = false;
var fastResult = 0;

var a = 0;
var b = 0;

function randomQuestion()
{
  i = csvCorrect.length + csvIncorrect.length ;
  inverseProblem = false;

  function checkInverse()
  {
    for(var j=0;j<helpIndex;j++)
    {
    if(helpArrayOne[j]==b && helpArrayTwo[j]==a)
    {
      console.log(lastContent);
      inverseProblem = true;
      j = helpIndex;
    }
    else if(helpArrayOne[j]==a && helpArrayTwo[j]==b)
    {
      console.log(lastContent);
      inverseProblem = true;
      j = helpIndex;
    }

    else {
        console.log('ok');
      }


    }

  }
//--------------------------------------------------------------

  if(i<=7)
  {
  a = Math.floor(Math.random()*3)+3;
  b = Math.floor(Math.random()*10)+3;
  console.log(a);
  console.log(b);


    checkInverse();
    if(inverseProblem == false && b!= 10)
    {

    var result = a*b;
    document.getElementById('randomMultiply').innerHTML = a+"x"+b;
    lastCorrectAnswer = result;
    lastContent = a+"x"+b;

    helpArrayOne[helpIndex]=a;
    helpArrayTwo[helpIndex]=b;
    helpIndex++;

    }


    else {

      randomQuestion();
    }
  }
//--------------------------------------------------------------

  if(i<=21 && i>7)
  {
     a = Math.floor(Math.random()*6)+6;
     b = Math.floor(Math.random()*10)+3;

     console.log(a);
     console.log(b);


      checkInverse();
      if(inverseProblem == false && a != 10 && b != 10)
      {

      var result = a*b;
      document.getElementById('randomMultiply').innerHTML = a+"x"+b;
      lastCorrectAnswer = result;
      lastContent = a+"x"+b;

      helpArrayOne[helpIndex]=a;
      helpArrayTwo[helpIndex]=b;
      helpIndex++;


      }

  else {

    randomQuestion();
  }
  }
//-----------------------------------------------------------------

  if(i>=22 && i<23)
  {
      a = 12;
      b = Math.floor(Math.random()*10)+3;

      checkInverse();
      if(inverseProblem == false && a != 10 && b != 10)
      {

      var result = a*b;
      document.getElementById('randomMultiply').innerHTML = a+"x"+b;
      lastCorrectAnswer = result;
      lastContent = a+"x"+b;

      helpArrayOne[helpIndex]=a;
      helpArrayTwo[helpIndex]=b;
      helpIndex++;


  }
  else {
    a = 12;
    b = Math.floor(Math.random()*10)+3;
    randomQuestion();
  }
  }
//---------------------------------------------------------

  if(i>=23)
  {
    var fastArray = [2,10]
    a = fastArray[Math.floor(Math.random()*fastArray.length)];
    b = Math.floor(Math.random()*10)+3;


      checkInverse();
      if(inverseProblem == false)
      {

      var result = a*b;
      document.getElementById('randomMultiply').innerHTML = a+"x"+b;
      lastCorrectAnswer = result;
      lastContent = a+"x"+b;

      helpArrayOne[helpIndex]=a;
      helpArrayTwo[helpIndex]=b;
      helpIndex++;


      }
  else {
    var fastArray = [2,10]
     a = fastArray[Math.floor(Math.random()*fastArray.length)];
     b = Math.floor(Math.random()*10)+2;
    randomQuestion();
  }
  }

//------------------------------------------------------------

  if(i==25)
  {
    finalScreen();
  }

}

function startGame()
{

  if(document.getElementById('studentInputName').value == "")
  {
    alert("Insert your name!");
  }

  else
  {
    $('.fullscreenButton').css('position','fixed');
    $('.fullscreenButton').css('left','0px');
    $('.fullscreenButton').css('top','0px');
    document.getElementById('themeChange').style.display = "none";
  document.getElementById('questionHidden').style.display = "block";
  document.getElementById('startGame').style.display = "none";
  document.getElementById('studentName').style.display = "none";
  studentNamePls = document.getElementById('studentInputName').value;
  csvName = studentNamePls;
  newFunctionPls();
  randomQuestion();
  }
}


function finalScreen()
{

  $('.endScreen').css('font-size', '4vw');
  $('.endScreen').css('position', 'absolute');
  $('.endScreen').css('top', '2vw');
  $('.endScreen').css('left', '-2vw');
  $('.endScreen').css('width', '1500px');
  $('.fullscreenButton').css('display','none');
  $('.startGame').css('display','none');
  document.getElementById('endScreen').innerHTML = "<b>You have finished</b>"+"<br><br><br><br><br>"+"<p>Please wait, do not close or shut down</p>"
  downloadCSV();
}

/*function finalTable()
{
  finalTableContent = "<div class='finalTable' id='finalTable'>"+
  "<table> <tr> <td>Correct</td>";

  for(var k=0;k<=csvCorrect.length;k++)
  {
    finalTableContent += "<td>"+csvCorrect[k]+"</td>";
  }

  finalTableContent += "</tr> <tr><td>Incorrect<td>";

  for(var l=0;l<=csvIncorrect.length;l++)
  {
    finalTableContent += "<td>"+csvCorrect[l]+"</td>";
  }
  finalTableContent += "</tr></table></div>";

  document.getElementById('finalTable').innerHTML = finalTableContent;
}
*/

//--------------------------CSV DOWNLOAD---------------------

function downloadCSV()
{
var firstArray = csvCorrect;
var secondArray = csvIncorrect;
let csvContent = "data:text/csv;charset=utf-8,"+"Correct answers: , "+csvCorrect.length+",";
let csvCont = "Incorrect answers: , "+csvIncorrect.length+",";

csvContent += firstArray;
csvCont += secondArray;

var twoTimesTotal = "2 times table: "+twoCorrect+"/"+twoTotal;
var threeTimesTotal = "3 times table: "+threeCorrect+"/"+threeTotal;
var fourTimesTotal = "4 times table: "+fourCorrect+"/"+fourTotal;
var fiveTimesTotal = "5 times table: "+fiveCorrect+"/"+fiveTotal;
var sixTimesTotal = "6 times table: "+sixCorrect+"/"+sixTotal;
var sevenTimesTotal = "7 times table: "+sevenCorrect+"/"+sevenTotal;
var eightTimesTotal = "8 times table: "+eightCorrect+"/"+eightTotal;
var nineTimesTotal = "9 times table: "+nineCorrect+"/"+nineTotal;
var tenTimesTotal = "10 times table: "+tenCorrect+"/"+tenTotal;
var elevenTimesTotal = "11 times table: "+elevenCorrect+"/"+elevenTotal;
var twelveTimesTotal = "12 times table: "+twelveCorrect+"/"+twelveTotal;


var encodedUri = encodeURI(csvContent+"\n"+"----------------------"+"\n"+csvCont+"\n"+twoTimesTotal+"\n"+threeTimesTotal+"\n"+fourTimesTotal+"\n"+fiveTimesTotal+"\n"+sixTimesTotal+"\n"+sevenTimesTotal+"\n"+eightTimesTotal+"\n"+nineTimesTotal+"\n"+tenTimesTotal+"\n"+elevenTimesTotal+"\n"+twelveTimesTotal);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", csvName+" "+dateString+".csv");
document.body.appendChild(link);

link.click();
}
