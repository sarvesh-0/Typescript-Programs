var SuperHero = /** @class */ (function () {
    function SuperHero(sN, sP, o, cF) {
        this.superHeroName = sN;
        this.superPower = sP;
        this.origin = o;
        this.canFly = cF;
    }
    SuperHero.prototype.displayHero = function () {
        console.log("SuperHero Name = " + this.superHeroName);
        console.log("Super Power    = " + this.superPower);
        console.log("Origin         = " + this.origin);
        console.log("Can Fly ?      = " + this.canFly);
    };
    return SuperHero;
}());
var s1 = new SuperHero("SpiderMan", "Spider Sense", "New York", false);
s1.displayHero();
