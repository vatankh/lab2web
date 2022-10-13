let r;

document.getElementById("R_field")
    .addEventListener('input', e => {
        r = inputR.value;
    })


document.getElementById("graphic").onclick = function(event) {
    const rect = document.getElementById("graphic").getBoundingClientRect();
    if ((r>=1 && r<=3)) {
        const x = ((event.clientX - rect.left -125)/(18*5)*r);
        console.log("x="+x);
        const y = (((- event.clientY) + rect.bottom -125)/(18*5)*r);
        console.log("y="+y);
        let xt = (event.clientX - rect.left);
        console.log("xt="+xt);
        let yt = (( event.clientY) - rect.top );
        console.log("yt="+yt);

        changePoint(xt,yt)
        let inputY = document.getElementById("Y_field");
        inputY.value = y.toString() ;
        let inputx = document.getElementById("X_field");
        inputx.value = x.toString() ;
       $("#submit2").click()

    } else {
      alert("I can't check your point \n" +
          "Please check R ")
    }
}


function changePoint(x,y) {
    console.log("iam on click 2");

    let n = document.getElementById("table_out").getElementsByTagName("tr").length
    let point = $("#point");
    point.attr({
        cx: x,
        cy: y,
        visibility: "visible"
    });
}