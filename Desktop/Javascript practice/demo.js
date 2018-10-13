for (var i=0; i<10;i++){
	document.write(i);
	document.write("<br />");

	break;
}
document.write("This is break");

for(var i =0;i<=10; i++){
	if(i == 5){
		document.write("This is continue" + "<br />	");

		continue;

	}
	document.write(i);
	document.write("<br />");

}
 

 var sum =0;
 for(i =4;i<8;i++){
 	if(i==6){
 		continue;

 	}
 	sum +=i;

 }
 document.write(sum);
document.write("<br / ?");
 function namePrint(){
	alert("Name is kavishka" );
	


 }

 namePrint();
 namePrint();

 function sayHello(name){
 	alert("Hi" + name);

 }
 sayHello("kavishka");

sayHello("Hirushan");
sayHello("Anurudhika");


