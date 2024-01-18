def avg(data):
    total = 0
    times = 0
    for content in data.keys():
        for i in range(len(data[content])):
            product = data[content][i]
            total += product["price"]
            times += 1
    return round((total / times), 3)


print(avg({
    "products": [
        {
            "name": "Product 1",
            "price": 100
        },
        {
            "name": "Product 2",
            "price": 700
        },
        {
            "name": "Product 3",
            "price": 300
        }
    ]
}))

