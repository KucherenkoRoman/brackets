const { white } = require("colors");

module.exports = function check(str, bracketsConfig) {
  let brackets = new Array();

  str.split("").forEach(element => {
    brackets.push(element);

    if (brackets.length > 1){
      for (let i = 0; i < bracketsConfig.length; i++){
        if (brackets[brackets.length - 2] === bracketsConfig[i][0] && brackets[brackets.length - 1] === bracketsConfig[i][1]){
          brackets.pop();
          brackets.pop();
        }
      }
    }
  });

  return brackets.length === 0;
}
