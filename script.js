var anchors = document.getElementsByTagName("a");
var burger = document.getElementById("burger");
var scale = document.getElementById("scale")


burger.addEventListener("click", function(){
    for(var x of anchors){
        x.classList.toggle ("block");
    }
    this.classList.toggle("rotateZ");
});
function mOver(obj) {
    obj.style.color = "green"
}
function mOut(obj) {
    obj.style.color = "#F7EEBB"

}
