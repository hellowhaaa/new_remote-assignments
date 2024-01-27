
(function () {
    var xhr;
    document
        .getElementById("get-btn")
        .addEventListener("click", makeRequest);
    function makeRequest() {
        var number = document.getElementById('text').value
        console.log(number)
        xhr = new XMLHttpRequest();
        if (!xhr) {
            alert("Giving up :( Cannot create an XMLHTTP instance");
            return false;
        }
        xhr.onreadystatechange = alertContents;
        xhr.open('GET', 'http://127.0.0.1:3000/data?number=' + number, true);
        xhr.send();

        function alertContents() {
            try {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        alert(xhr.responseText);
                    } else {
                        alert("There was a problem with the request.");
                    }
                }
            }
            catch (e) {
                alert("Caught Exception: " + e.description);
            }
        }
    }
}
)();




