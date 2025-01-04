function makeid(l) {
  // write your code here
	const str = "ABCDEFGHIJKLMNOPQRSTYVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	for(let i=0;i<l;++i){
		result+= str[Math.floor(Math.random()*62)];
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
