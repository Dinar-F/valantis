import { useCallback, useState } from "react";
import { URL } from "../constants";
import { getToken } from "../utils/helpers";

export const useFetchData = <T>(action: string) => {
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);

    const getData = useCallback(async (options: { [key: string]: string | number | string[] }) => {
        try {
            setFetchError(null);
            setLoading(true);
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Auth": getToken(),
                },
                body: JSON.stringify({
                    "action": action,
                    "params": options
                }
                )
            });
            if (!response.ok) {
                throw new Error("Bad request.Please,try again");
            } else {
                const data = await response.json();
                setData(data.result);
            }
        } catch (error) {
            setFetchError((error as Error).message);
        } finally {
            setLoading(false);
        }

    }, [action]);

    return { data, fetchError, loading, getData };
};