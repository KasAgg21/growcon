import Cards from "./Cards";

function showpic(data) {
    let encodedppic = encodeURIComponent(data.item_pic);
    encodedppic = "http://localhost:2007/public/uploads/" + encodedppic;
    return (encodedppic)
}

export default function ProdCardsFilter({ data }) {
    function gencard(obj) {
        let enc = showpic(obj)
        data.item_pic = enc
        return (
            <>

                <Cards {...obj} key={obj}> {enc} </Cards>

            </>
        )
    }
    return (
        <div className="flex flex-row flex-wrap  justify-evenly justify-items-start ">
            <div className="lg:col-span-3">
                <ul className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map(gencard)}
                </ul>
            </div>
        </div>
    )
};