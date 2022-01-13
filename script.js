window.addEventListener('load',()=>{

   var openWindow = window.open("Invento Calculator", "Invento Calculator", "Invento Calculator");
    openWindow.document.write(`
    <title>Invento Calculator</title>
    <style>
    #screen{
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 60px;
    text-align: right;
    outline: none;
    padding: 5px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    color: rgb(0, 255, 85);
;
    font-family:monospace;
}
.num{
    width: 24%;
    border: none;
    font-size: 50px;
    padding: 31px;
    background-color: rgba(202, 155, 155, 0);
    color: rgb(101, 255, 152);
    border-radius: 50px;
    transition: all ease-in-out 0.4s;
    font-family:monospace;

}
.num:hover{
    background-color: rgba(255, 255, 255, 0.171);
}
body{
    overflow: hidden;
    overflow: -moz-hidden-unscrollable;
    background-color: rgba(11, 9, 26, 0.986);
}
::selection{
    background-color: rgba(0, 255, 85, 0.911);
    color: white;
}
*{
    outline: none;
    cursor: pointer;
}
#num{
    width: 24%;
    border: none;
    font-size: 50px;
    padding: 31px;
    background-color: rgba(255, 255, 255, 0.096);
    color: rgb(0, 255, 85);
    border-radius: 50px;
}
#num:hover{
    background-color: rgba(255, 255, 255, 0.11);
}
/* 500, 587 */

#info{
    position: absolute;
    top: 40%;
    bottom: 40%;
    left: 5%;
    right: 5%;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    font-size: 40px;
    background-color: rgba(255, 255, 255, 0.247);
    padding: 20px;
    border-radius: 50px;
    animation: 1 5s splash;
    visibility: hidden;
}
@keyframes splash {
    1%{
        visibility: visible;
    }
    100%{
        transform: translate(0%, -500%);
    }
}
    </style>
    <input type="text" id="screen" spellcheck="false"><br>
    <button class="num" onclick="addWord('7')">7</button>
    <button class="num" onclick="addWord('8')">8</button>
    <button class="num" onclick="addWord('9')">9</button>
    <button class="num" onclick="addWord('/')">/</button><br>
    <button class="num" onclick="addWord('6')">6</button>
    <button class="num" onclick="addWord('5')">5</button>
    <button class="num" onclick="addWord('4')">4</button>
    <button class="num" onclick="addWord('*')">*</button><br>
    <button class="num" onclick="addWord('3')">3</button>
    <button class="num" onclick="addWord('2')">2</button>
    <button class="num" onclick="addWord('1')">1</button>
    <button class="num" onclick="addWord('-')">-</button><br>
    <button class="num" onclick="addWord('0')">0</button>
    <button class="num" onclick="addWord('+')">+</button>
    <button class="num" id="cb" onclick="addWord('C')">C</button>
    <button id="num" onclick="addWord('=')">=</button>
<div id="info">
    Welcome to Invento Calculator
</div>

<script>
document.getElementById('cb').addEventListener('dblclick',()=>{
window.close();
});
function addWord(wordname)
{
    if (wordname != "=" && wordname != "C")
    {
        document.getElementById('screen').value += wordname;
    }
    else if (wordname == "C")
    {
        document.getElementById('screen').value = "";
    }
    else if (wordname == "=")
    {
        var ans = eval(document.getElementById('screen').value);
        document.getElementById('screen').value = ans;
    }
}
 
</script>`);
    openWindow.focus();
    openWindow.resizeTo( 460 , 650);


});

function addWord(wordname)
{
    if (wordname != "=" && wordname != "C")
    {
        document.getElementById('screen').value += wordname;
    }
    else if (wordname == "C")
    {
        document.getElementById('screen').value = "";
    }
    else if (wordname == "=")
    {
        var ans = eval(document.getElementById('screen').value);
        document.getElementById('screen').value = ans;
    }
}
 
