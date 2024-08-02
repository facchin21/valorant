const URL = `https://valorant-api.com/v1/agents`;

export const getAgents = async () => {
    try {
        const response = await fetch(URL);
        const json = await response.json();
        const agents = json.data;

        return agents?.map(agent => ({
            id: agent.uuid,
            tittle: agent.displayName,
            image: agent.displayIcon,
            description: agent.description
        }));
    } catch (e) {
        throw new Error("Error al obtener los agentes!");
    }
};