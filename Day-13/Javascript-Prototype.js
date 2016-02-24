//Prototype
var protoRabbit ={
  speak : function(line){
    console.log("the"+this.type
    + "rabbit says"+line);
  }
};
var killerRabbit = Object.create(protoRabbit);
console.log(Object.getPrototypeOf(killerRabbit));
killerRabbit.type="killer";
killerRabbit.speak("KRRRR");


//->[object Object] {
  speak: function (line){
    window.runnerWindow.proxyConsole.log("the"+this.type
    + "rabbit says"+line);
  }
}
"thekillerrabbit saysKRRRR"