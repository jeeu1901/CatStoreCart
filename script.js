$(document).ready(function() {
    console.log("ready");

    start();

    // Modalerna, boxarna som öppnas när man klickar på Bli medlam / logga in.
let btn = document.getElementById("modal");
let modals = document.getElementById("cart-box");
let spans = document.getElementsByClassName("close");

// När man klickar på någon av knapparna öppnas en av modalerna
    $(btn).click(function() {
        modals.style.display = "block";
    })
    
    $(spans).click(function() {
        $("#cart-box").hide();
    });


    

});

function start () {
    $.getJSON("items.json", function(data) {
        console.log(data);
        let index = 1;
        for(let i of data.shopItems) {
            $("<div/>", {
                id: "product" + index++}).appendTo("#shop-box").
                prepend("<img class='product-image' src='" + i.image + "'>").append("<h3>" + i.product + "</h3>")
                .append("<h4>" + i.price + "</h4>").append("<p>" + i.info + "</p>");
            }  
            
        console.log(index);
        for(let k = 1; k < index; k++) {
            let id = "#product" + k;
            $("<div/>", {
                class: "order-box"}).appendTo(id).
                append("<a href='#'>Beställ</a>").append("<a class='minus' href='#'><i class='fas fa-minus-square'></i></a>")
                .append("<a class='plus' href='#'><i class='fas fa-plus-square'></i></a>").append("<input class='counter' type='text' name='name' value='1'>")
        }
        
        addHandler();
        });
};

function addHandler () {
    let amount = "";
    // $('.plus').on('click', function(e) {
    //     e.preventDefault();
    //     var $this = $(this);
    //     var $input = $this.closest('div').find('input');
    //     var value = parseInt($input.val());
    //     value = value + 1;
    //     console.log(value);
    //     $input.val(value);
    // });

    $('.plus').click(function () {
        let input = $(this).closest('div').find('input');
        let currentNr = parseInt($(input).val());
        currentNr++;
        $(input).val(currentNr);
    })

    $(".minus").click(function () {
        let input = $(this).closest('div').find('input');
        let currentNr = parseInt($(input).val());
        if(currentNr >= 1) {
            currentNr--;
        }
        else {
            currentNr = 0;
        }
        $(input).val(currentNr);
    })
    console.log("added minus");
}