class article{
    constructor(name, printed){
        this.name = name;
        if(typeof(printed)=="string"){
            this.printed = printed;
        }
        else this.printed = "abc";
    }
}