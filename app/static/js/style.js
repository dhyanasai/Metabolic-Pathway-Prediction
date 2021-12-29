$(document).ready(function() {
    $('.progress .progress-bar').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
        }
    )
});

window.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        $('#txtsize').css("font-size","60px");
        $('#txtsize').css("text-align","center");
        document.getElementById('txtsize').innerHTML = "Loading...";

        var txt = document.getElementById("form1").value;
        
        // POST
        fetch('/model', {
            headers: {
            'Content-Type': 'application/json'
            },

            method: 'POST',

            body: JSON.stringify({
                "text": txt
            })
        }).then(function (response) {
            return response.text();
        }).then(function (text) {
            text = JSON.parse(text);
            $('#txtsize').css("font-size","20px");
            $('#txtsize').css("text-align","left");
            $('#txtsize').css("margin-left","100px");
            document.getElementById('txtsize').innerHTML = "<b style='font-weight:bold'>Predicted Results</b>:<br>"
            for (var i = 0; i < text.class.length; i++) {
                document.getElementById('txtsize').innerHTML+= "&emsp;"+(i+1)+") "+text.class[i]+"<br>";
            }
        });
    }
});