const typewriter = function (sentence) {
  let i = 0;
  const intervalCounter = setInterval(() => {
    if (i < sentence.length) {
      process.stdout.write(sentence.charAt(i));
      i++;
    } else {
      clearInterval(intervalCounter);
      console.log();
    }
  }, 50);
}

//Test Code
const phrase = "hello there from lighthouse labs";
typewriter(phrase);