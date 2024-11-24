(function () {
    function Start() {
        console.log("App Started");
        let deleteButtons = document.querySelectorAll('.btn-danger');

        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you Sure?")) {
                    event.preventDefault();
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();