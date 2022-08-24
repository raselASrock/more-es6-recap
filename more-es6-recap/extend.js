
class Teammember {
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    provideFeedBack(){
        console.log(`${this.name} thank you for your feedback` )
    }
}

class Instructor extends Teammember{
    
    designation = 'Web Course Instractor'
    team = 'Web Development'
    constructor(name, location){
        super(name, location)
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create the quiz for module ${module}`)
    }
}

class Developer extends Teammember {
    designation = 'Web Course Instractor'
    team = 'Web Development'
    tech;
    constructor(name, location, tech){
        super(name, location)
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`Please develop the ${feature}`)
    }
    release(version){
        console.log(`Please release the  ${version}`)
    }
}

class JobPlaceMent extends Teammember {
    designation = 'Job placement comandos'
    team = 'Job Placement'
    region
    constructor(name, location, region){
        super(name, location)
        this.region = region;
    }
    provideResume(feature){
        console.log(`Please develop the ${feature}`)
    }
    prepareStudent(version){
        console.log(`Please release the  ${version}`)
    }
}

const alia = new Developer('Alia Bhatt', "Dhaka", 'React');
console.log(alia)
alia.provideFeedBack();

const bipasha = new JobPlaceMent('Bipasha Bashu', "Californiya", 'USA')
console.log(bipasha)