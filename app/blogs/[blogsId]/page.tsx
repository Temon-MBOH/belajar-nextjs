export default async function Blogs({
    params,
}:{
    params: Promise<{ blogsId: string}>;
}){
    const blogsId = (await params).blogsId;
    return <h1>Detail tentang Blog {blogsId}</h1>;
}