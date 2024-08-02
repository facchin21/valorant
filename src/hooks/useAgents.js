import { useEffect, useState } from "react";
import { getAgents } from "../services/agents";

export function useAgents() {
    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const newAgents = await getAgents();
                setAgents(newAgents);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAgents();
    }, []);

    return { agents, loading, error };
}