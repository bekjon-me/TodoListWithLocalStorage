
export default class WhichBox {
    constructor(boxName) {
        this.boxName = boxName;
    }

    clickBox() {
        let Box_h1Copy = document.getElementsByClassName('main-added-h1')[0];
        Box_h1Copy.innerHTML = this.boxName;
        // const x = JSON.parse(localStorage.getItem("TodoList"));
        // console.log(x[0]["name"]);
    }
}