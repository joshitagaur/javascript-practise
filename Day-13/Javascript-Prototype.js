//Prototype
var food = {
	type : this.type,
	eat : function(){
		console.log("I ate "+ this.type);
	}
};
var waffle = Object.create(food);

waffle.type = "waffle"; 
waffle.eat(); //-> I ate waffle

food.eat = function(){
		console.log("I JUST ATE "+ this.type.toUpperCase());
	};

waffle.eat(); //->I JUST ATE WAFFLE


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