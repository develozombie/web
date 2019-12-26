$(document).ready(function() {
    $.ajax({
        url: "http://52.154.167.44/customer/api/customers",
        headers: { 'Ocp-Apim-Subscription-Key': '4f6bce226bea4eaf9bf6f2ecb2bb1916;product=unlimited' }
    }).then(function(data) {
       $('.clientes').append(data[Math.floor(Math.random()*3)]);
    });
});

$(document).ready(function() {
    $.ajax({
        url: "http://52.154.167.44/products/api/products",
        headers: { 'Ocp-Apim-Subscription-Key': '4f6bce226bea4eaf9bf6f2ecb2bb1916;product=unlimited' }
    }).then(function(data) {
       $('.productos').append(data[Math.floor(Math.random()*3)]);
    });
}); 
