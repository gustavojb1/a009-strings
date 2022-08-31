const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const tamAntes = minhaString.length

const semEspaco = minhaString.trim()

const tamDepois = semEspaco.length

console.log(`A quantidade de caracteres da string antes é: ${tamAntes} \nA quantidade de caracteres adepois é: ${tamDepois}`)

const novafrase = minhaString.replace("________", "sticioso")

console.log(novafrase)