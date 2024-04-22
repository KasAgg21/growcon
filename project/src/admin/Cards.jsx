import { useState } from "react";
import Model from "./Model";

export default function Cards(props, childern) {
    function showpic(data) {
        if (data.apic) { data = data.apic }
        else if (data.ppic) { data = data.ppic }
        let encodedppic = encodeURIComponent(data);
        encodedppic = "http://localhost:2007/public/uploads/" + encodedppic;
        return (encodedppic)
    }

    const [showdialog, setdialog] = useState(false);



    function changeallowence() {
        setdialog(true);
    }



    return (
        <tr>
            {showdialog && (
                <Model
                    props={props}
                    onClose={(() => { setdialog(false); window.location.reload(); })}
                />
            )}
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{props._id}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.email}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.address}</td>
            <img
                src={showpic(props)}
                alt=""
                className="h-[50px] w-[50px] object-cover transition duration-500 group-hover:scale-105 sm:h-[50px]"
            />
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.city}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.name}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.vill_town}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.phoneno}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.state}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.type}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.allowence}</td>


            <td className="whitespace-nowrap px-4 py-2">
                <a
                    onClick={changeallowence}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                    Change
                </a>
            </td>
        </tr>
    )
}