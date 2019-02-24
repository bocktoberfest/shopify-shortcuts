$.ajax({
    type: "GET",
    url: location.protocol + "//" + location.host + location.pathname + ".json",
    cache: false,
    success: function(data){
        console.log(data);
        if(data.product){
            var admin_url = "https://"+window.location.hostname+"/admin/products/"+data.product.id;
            window.open(admin_url,'_blank');
        }else if(data.collection){
            var admin_url = "https://"+window.location.hostname+"/admin/collections/"+data.collection.id;
            window.open(admin_url,'_blank');
        }
    }
});