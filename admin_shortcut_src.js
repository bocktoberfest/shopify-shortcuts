javascript: fetch(location.pathname + '.json') .then(resp => resp.json()).then(data => {
    const prefix = `https://${location.hostname}/admin`
    if (data.product) {
      window.open(`${prefix}/products/${data.product.id}`, '_blank');
    } else if (data.collection) {
      window.open(`${prefix}/collections/${data.collection.id}`, '_blank');
    }
  });