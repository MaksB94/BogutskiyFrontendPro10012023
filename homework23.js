function Auto(brand){
    this.brand = brand
}
Auto.prototype = {
    drive(){
        alert(`${this.brand} едет`)
    },
    stop(){
        alert(`${this.brand} тормозит`)
    },
    openeDoors(){
        if(this.brand=='Lamborghini'){
           alert(`${this.brand} с вертикальным открытием дверей`)
        }else{
            alert(`${this.brand} с горизонтальным открытием дверей`)
        }
    }
}
const auto1 = new Auto ('Porshe')
    auto1.drive()
    auto1.stop()
    auto1.openeDoors()
const auto2 = new Auto ('Lamborghini')
    auto2.drive()
    auto2.stop()
    auto2.openeDoors()
