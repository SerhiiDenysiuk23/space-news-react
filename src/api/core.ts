const apiUrl = "https://api.spaceflightnewsapi.net/v3/articles"

type Params = "_limit" | "_start" | "=" | number

export const requestArticleList = async (param: Params, values: string | number) => {
    const response = await fetch(`${apiUrl}?${param}=${values}`);
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