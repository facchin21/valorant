const URL = 'https://valorant-api.com/v1/maps'

export const getMaps = async () =>{
    try{
        const response = await fetch(URL)
        const json = await response.json()
        const maps = json.data

        return maps?.map(map => ({
            id : map.uuid,
            name : map.displayName,
            image : map.listViewIcon,
        }))
    }catch(e){
        throw new Error("Error al obtener los mapas!")
    }
}