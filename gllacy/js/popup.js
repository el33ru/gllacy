    var link = document.querySelector(".feedback-link");
    var popup = document.querySelector(".modal-feedback");
    var close = document.querySelector(".modal-close");
    var overlay = document.querySelector(".overlay");

    var catalog = document.querySelector(".site-navigation-catalog");
    var form = document.querySelector(".site-navigation-catalog-form");

    var menu = document.querySelector(".site-navigation");
    var button = document.querySelector(".js-site-navigation-button");

    if (link){
        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
            overlay.classList.add("modal-show");
        });
    }

    if (close){
        close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            overlay.classList.remove("modal-show");
        });
    }


    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popup.classList.contains("modal-show")) {
                popup.classList.remove("modal-show");
                overlay.classList.remove("modal-show");
            }
        }
    });


    button.addEventListener("click", function (evt) {
        evt.preventDefault();
        menu.classList.toggle("modal-show");
    });



    // catalog.addEventListener("mouseover", function (evt) {
    //     evt.preventDefault();
    //     form.classList.add("modal-show");
    // });
