function fetch(data, offset) {
    let newData = [...data],

    limit = 10

    return newData.slice(offset, offset + limit)
}
  
export default fetch