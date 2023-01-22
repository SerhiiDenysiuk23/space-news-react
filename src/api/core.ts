const apiUrl = "https://api.spaceflightnewsapi.net/v3/articles"

export const requestDefaultArticleList = async (limit: string | number) => {
    const response = await fetch(`${apiUrl}?_limit=${limit}`);
    if (!response.ok)
        throw new Error(response.statusText)
    return await response.json()
}

export const requestSearchArticleList = async (field: "title" | "summary", limit: string | number, request: string, idList?: number[]) => {
    let blackList: string = ""
    if (idList)
        idList.forEach(item => {
            blackList = blackList.concat('&id_ne='.concat(item.toString()))
        })
    console.warn(blackList)

    const requestBody = `${apiUrl}?_sort=${field}&${field}_contains=${request}&_limit=${limit}${blackList}`
    console.warn(requestBody)
    const response = await fetch(requestBody);
    if (!response.ok)
        throw new Error(response.statusText)
    return await response.json()
}

export const requestArticle = async (id: number) => {
    const response = await fetch(`${apiUrl}/${id}`);
    if (!response.ok)
        throw new Error(response.statusText)
    return await response.json()
}