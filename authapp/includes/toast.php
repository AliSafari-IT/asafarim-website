<?php
function showToast($message) {
    if (!empty($message)) {
        echo '
        <div id="toast" class="toast">' . htmlspecialchars($message) . '</div>
        <script>
            window.onload = function() {
                var toast = document.getElementById("toast");
                if (toast) {
                    toast.className = "toast show";
                    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
                }
            };
        </script>
        ';
    }
}
?>
