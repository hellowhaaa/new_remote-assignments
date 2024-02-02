button = document.querySelector(".btn");
button.addEventListener("click", () =>
  ajax(
    "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
    function (response) {
      render(response);
    }
  )
);

function ajax(src, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", src, true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      console.log("success");
      callback(xhr.response);
    } else {
      alert("There was a problem with the request.");
    }
  };
  xhr.send();
}

function render(data) {
  let products = JSON.parse(data);
  products.forEach((product) => {
    const productName = document.createElement("div");
    const productPrice = document.createElement("div");
    const productDescription = document.createElement("div");
    productName.innerHTML = "Name: " + product.name;
    productPrice.innerHTML = "Price: " + product.price;
    productDescription.innerHTML = "Description: " + product.description;
    document.getElementById("all-product").appendChild(productName);
    document.getElementById("all-product").appendChild(productPrice);
    document.getElementById("all-product").appendChild(productDescription);
    document
      .getElementById("all-product")
      .appendChild(document.createElement("br"));
  });
}
