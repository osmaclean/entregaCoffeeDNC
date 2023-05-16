; (function () {
    'use strict'

    const sacToggleModal = document.querySelectorAll("[data-modal-sac]");

    for (let i = 0; i < sacToggleModal.length; i++) {

        sacToggleModal[i].addEventListener("click", function () {
            let valueDataModalControl = sacToggleModal[i].getAttribute("data-modal-sac");
            document.getElementById(valueDataModalControl).classList.toggle("show-modal");
        });
    }

    const buttonReset = document.getElementById("button-reset");

    buttonReset.addEventListener("click", function () {
        alert(`Senha redefinida com sucesso!`);
    });




})();