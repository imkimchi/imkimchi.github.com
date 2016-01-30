$(document).ready(function() {
    function fix(element) {
        for (var i = 0; i < 6; i++) {
            $(element).append('<br>');
        }
        fix('#err1');
        fix('#err');
    }
})
