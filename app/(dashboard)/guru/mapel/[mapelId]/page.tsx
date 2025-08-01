export default async function Mapel({
    params,
}:{
    params: Promise<{ mapelId: string}>;
}){
    const mapelId = (await params).mapelId;
    return <h1>mapel {mapelId}</h1>;
}