export const getPageCount = (totalCount,limit) =>{
    return Math.ceil(totalCount/limit)
}

export const pagesArray = (pageCount) =>{
    let result = []
    for (let i = 0; i < pageCount; i++) {
        result.push(i+1)
    }
    return result
}