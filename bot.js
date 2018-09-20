function setup(){
    noCanvas();

    let bot = new RiveScript();

    bot.loadFile("botbrain.rive",brainReady,brainError);
    
    function brainReady() {
        console.log('Chatbot ready!');
        bot.sortReplies();
        let num = floor(random(10)) + 1;
        console.log(num);
        let reply = bot.reply('local-user', 'set ' + num);
      }
    
      function brainError() {
        console.log('Chatbot error!')
      }
    
      let button = select('#submit');
      let userinput=select('#msg');
    
    let inputmsg=select('#inputm');  
    let output=select('#output');

    button.mousePressed(chat);
    userinput.onkeyup = function(e){
      if(e.keyCode == 13){
         chat();
      }
  }

    function chat(){
        let input = userinput.value();
        bot.sortReplies();
        inputmsg.html(input);
        //let reply=bot.reply("local-user", input);
        bot.reply("local-user", input).then(function(reply) {
            output.html(reply);
          });

    }
}