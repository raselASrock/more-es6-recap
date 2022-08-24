/* Syntactic Sugar */

class Instructor {
    name;
    designation = 'Web Course Instractor'
    team = 'Web Development'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create the quiz for module ${module}`)
    }
}

const amir = new Instructor("Amir", "Mumbai")
console.log(amir)
amir.startSupportSession('09:00')
amir.createQuiz(30)

const solaiman = new Instructor ('Solaiman', "Dhaka")
console.log(solaiman)