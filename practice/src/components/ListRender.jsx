function ListRender()
{
    const items=["Hari Haran","Ram Shiva Sai","Naga Sai sChaitanya"]
    return(
        <ul>
            {items.map((items,index)=>(<li key={index}>{items}</li>))}
        </ul>
    )
}
export default ListRender;