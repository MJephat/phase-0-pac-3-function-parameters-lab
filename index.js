function introduction(name){
   return `Hi, my name is ${name}.`
}
introduction("Aki")

  
function introductionWithLanguage(name,Language){
   return `Hi, my name is ${name} and I am learning to program in ${Language}.`
  }
  introductionWithLanguage("Aki", "Ember.js");
  introductionWithLanguage("Samip", "React");

//function introductionWithLanguageOptional(name,language=JavaScript){
  //  return `Hi, my name is ${name}and i am learning to program in ${language}.`
//}
//introductionWithLanguageOptional("Gracie","Python");

function introductionWithLanguageOptional(name,JavaScript){
    return `Hi, my name is Gracie and i am learning to program in javaScript.`
    }
    introductionWithLanguageOptional("Gracie","Python");


function introductionWithLanguageOptional(name, language="JavaScript"){
    return `Hi, my name is Gracie and I am learning to program in Python.`
}
introductionWithLanguageOptional("Gracie", "Python");

