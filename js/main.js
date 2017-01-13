$("#demo").intlTelInput();/* codigo para activar las banderas en el input tel del sign up*/
/*validacion inputs login*/

function validaCampos(input){
    // Expresion regular para validar el correo
    var correo = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    var pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    var bool = true;
    // Se utiliza la funcion test() nativa de JavaScript
    if (correo.test($('#email').val().trim())) {
        return bool
    }else{
        if(pwd.test($("#password").val().trim())) {
            return bool 
        } else {
            alert('Complete los campos obligatorios');
        }
    }
};
$('.valida2').on('click',function(event) {
 event.preventDefault();
    if(validaCampos() == true){
        $(".valida2").unbind(event);
        console.log("OK")
    }else{
        console.log("check your code")
    }
});
/*_______________________fin codigo validacion log in__________________*/


/*aqui el codigo para los botones del navbar en el mapa*/

var activeEl = 2;
$(function() {
    var items = $('.btn-nav');
    $( items[activeEl] ).addClass('active');
    $( ".btn-nav" ).click(function() {
        $( items[activeEl] ).removeClass('active');
        $( this ).addClass('active');
        activeEl = $( ".btn-nav" ).index( this );
    });
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
};



/*prueba funciones para mostrar y ocultar los input del mapa
$(document).ready(function(){
        $("#mostrar").on( "click", function() {
            $('.viaje').show(); 
            $('.search').show(); //muestro mediante clase
         });
        $("#ocultar").on( "click", function() {
            $('.viaje').hide(); 
            $('.search').hide(); //muestro mediante clase
        });
    }); 
 */