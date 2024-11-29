class SuperHero{
    //by default data members are public
    private superHeroName:string
    private superPower:string
    private origin:string
    private canFly:boolean

    //We can only add one constructor in typeScript class 
    //either default or parameterized constructor 
    constructor(sN:string,sP:string,o:string,cF:boolean){
        this.superHeroName = sN;
        this.superPower = sP;
        this.origin = o;
        this.canFly = cF;
    }

    displayHero(){
        console.log("SuperHero Name = "+this.superHeroName)
        console.log("Super Power    = "+this.superPower)
        console.log("Origin         = "+this.origin)
        console.log("Can Fly ?      = "+this.canFly)
    }
}

let s1:SuperHero = new SuperHero("SpiderMan","Spider Sense","New York",false)
s1.displayHero()