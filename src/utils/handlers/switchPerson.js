export const switchPerson = (evt) => {

    if (!evt) return null

    const result = evt.currentTarget.dataset.operation
    
    console.log(result);
    
    return result
}