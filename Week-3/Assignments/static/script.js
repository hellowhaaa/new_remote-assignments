
(function () {
    var xhr;
    document
        .getElementById("get-btn")
        .addEventListener("click", makeRequest);
    // let number = document.querySelector('.number')

    function makeRequest() {
        var number = document.getElementById('text').value
        console.log(number)
        xhr = new XMLHttpRequest();
        if (!xhr) {
            alert("Giving up :( Cannot create an XMLHTTP instance");
            return false;
        }
        xhr.onreadystatechange = alertContents;

        // var myArr = JSON.parse(this.responseText);
        // document.querySelector('.answer').textContent = myArr



        xhr.open('GET', 'http://127.0.0.1:3000/data?number=' + number, true);




        xhr.onload = () => {
            console.log(xhr.response)
            console.log('成功仔入')
            console.log(xhr.responseText)
            var data = JSON.parse(xhr.responseText);
            document.querySelector('.answer').textContent = data;

            // 陣列化
        }



        xhr.send();


        //     xhr.open('POST', 'http://127.0.0.1:2000/data', true);
        //     xhr.setRequestHeader(
        //         "Content-Type",
        //         "application/x-www-form-urlencoded",
        //     );
        //     xhr.send("number=" + document.getElementById('text').value);
        // }




        function alertContents() {
            try {

                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // const htmlContent = document.getElementById('result-container').innerHTML;
                        // xhr.responseText = htmlContent
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




