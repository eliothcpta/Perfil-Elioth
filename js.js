function mostrarInfo(index){

    const info = document.querySelectorAll(".extra-info");

    if(info[index].style.display === "block"){

        info[index].style.display = "none";

    }else{

        info[index].style.display = "block";

    }

}