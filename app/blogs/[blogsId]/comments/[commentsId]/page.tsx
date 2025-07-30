export default async function BlogsComments({
    params,
}: {
    params: Promise<{blogsId: string, commentsId: string}>
}) {
    const {blogsId, commentsId} = await params
    return (
        <h1>comments {commentsId} for Blogs {blogsId}</h1>
    )
}

