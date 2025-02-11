
//hentet fra repetition
export async function libFetch(url){
    try{
        const response = await fetch(url)
        return await response.json()
    }catch ( error){
        throw new Error(error)
    }
}