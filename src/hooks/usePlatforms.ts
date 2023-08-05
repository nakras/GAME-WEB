import useData from "./useData";

interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlaltforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlaltforms;