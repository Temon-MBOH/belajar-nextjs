export default async function Siswa({
    params,
}:{
    params: Promise<{siswaId: string}>;
}){
    const siswaId = (await params).siswaId;
    return <h1>detail tentang siswa {siswaId}</h1>;
}