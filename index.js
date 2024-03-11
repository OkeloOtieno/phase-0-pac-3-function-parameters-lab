function introduction(name = "Samip"){
    return `Hi, my name is ${name}.`
}
function introductionWithLanguage(name = "Samip", language = "React"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional(name, language="JavaScript"){
    name = "Gracie"
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introduction())
console.log(introductionWithLanguage())