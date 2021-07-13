function introduction(name) {
  return (`Hi, my name is ${name}.`);
}
console.log(introduction("Josh"));
console.log(introduction("Nancy"));

function introductionWithLanguage(name, language) {
  return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
console.log(introductionWithLanguage("Josh", "Ember.js"));
console.log(introductionWithLanguage("Nancy", "React"));

function introductionWithLanguageOptional(name, language="JavaScript") {
  return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
console.log(introductionWithLanguageOptional(`"Gracie", ${language}`));
console.log(introductionWithLanguageOptional("Gracie", "Python"));