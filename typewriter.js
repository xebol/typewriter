const sentence = "hello there from lighthouse labs \n"

 //set the timeout to a variable and assign it a value of 50
let interval = 50;
for (const char of sentence) {
 
  setTimeout(() => {
    process.stdout.write(char);
  }, interval);
  interval += 50;
};