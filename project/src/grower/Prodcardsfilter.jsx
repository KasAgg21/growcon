import Listofprod_card from "./cards/Listofprod_card"

function showpic(data) {
    let encodedppic = encodeURIComponent(data.item_pic);
    encodedppic = "http://localhost:2007/public/uploads/" + encodedppic;
    return (encodedppic)
}

export default function Prodcardsfilter({ data }) {
    function gencard(obj) {
        let enc = showpic(obj)
        data.item_pic = enc
        console.log(enc)
        return (
            <>
                <Listofprod_card {...obj} key={obj.item_name}> {enc} </Listofprod_card>
            </>
        )
    }
    return (
        <div className="flex flex-row flex-wrap gap-y-72 justify-evenly justify-items-start">{data.map(gencard)}</div>
    )
};