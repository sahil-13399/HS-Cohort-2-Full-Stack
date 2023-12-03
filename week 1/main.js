function greetPerson(firstName, lastName, gender) {
    if(gender == 'M')
        console.log(`Hello Mr ${firstName} ${lastName}`)
    else 
        console.log(`Hello Mrs ${firstName} ${lastName}`)
}

greetPerson("Sahil", "Samantaray",'F')