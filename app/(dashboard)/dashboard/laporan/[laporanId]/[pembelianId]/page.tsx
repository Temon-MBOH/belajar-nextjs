export default async function LaporanPembelian({
    params,
}: {
    params: Promise<{laporanId: string, pembelianId: string}>
}) {
    const {laporanId, pembelianId} = await params
    return (
        <h1> {pembelianId} dari tahun {laporanId}</h1>
    )
}

