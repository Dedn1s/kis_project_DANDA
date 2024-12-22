export async function In(store, ids_last, ids_new) {

    try {
      const data = {
        id: [ids_last, ids_new]
      }
  
      store.setState({
  
        products_ids: data.id,
  
      });
  
    } catch ( err ) {
  
      console.error( err );
    }
    
  }