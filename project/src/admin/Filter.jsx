import Cards from "./Cards";

function showpic(data) {
    let encodedppic = encodeURIComponent(data.item_pic);
    encodedppic = "http://localhost:2007/public/uploads/" + encodedppic;
    return (encodedppic)
}

export default function Filter({ data }) {
    function gencard(obj) {
        let enc = showpic(obj)
        data.item_pic = enc
        return (
            <>

                <Cards {...obj} key={obj}> {enc} </Cards>

            </>
        )
    }

    const keys = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
                <tr>
                    {keys.map((key, index) => (
                        <th key={index} className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{key}</th>
                    ))}
                    <th className="px-4 py-2"></th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {data.map(gencard)}
            </tbody>
        </table>
    )
};