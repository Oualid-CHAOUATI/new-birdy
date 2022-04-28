console.log("-------")

class A{

    constructor(){
        this.bindMethod(this.method)
        let x ={}
        x.method=this.method;
        console.log(x)
        x.method()

    }

    bindMethod(method){
        this.method = method.bind(this);
    }
    method(){
        console.log(this);

    }
}

let a = new A();
a.method()
let btn = document.querySelector(".btn")
btn.addEventListener("click", a.method)