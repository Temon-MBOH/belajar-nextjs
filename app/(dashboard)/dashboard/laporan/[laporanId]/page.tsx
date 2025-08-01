export default async function Laporan({
    params,
}:{
    params: Promise<{ laporanId: string}>;
}){
    const laporanId = (await params).laporanId;
    return <h1>Laporan dari tahun {laporanId}</h1>;
}