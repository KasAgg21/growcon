import { useState } from "react";
import Model from "./Model";
import { doshowfullc } from "../Listof_controller";

export default function Cards(props, childern) {
    function showpic(data) {
        let encodedppic = encodeURIComponent(data.item_pic);
        encodedppic = "http://localhost:2007/public/uploads/" + encodedppic;
        return (encodedppic)
    }

    const [showdialog, setdialog] = useState(false);
    const [userdet, setuserdet] = useState(
        {
            email: "",
            name: "",
            address: "",
            vill_town: "",
            city: "",
        }
    )

    function doUpdate(event) {
        const { name, value } = event.target;
        return (
            setuserdet({ ...userdet, [name]: value })
        )
    }

    function userdetail() {
        setdialog(true);
        doshowfull();
    }

    async function doshowfull() {
        const servMsg = await doshowfullc(props.email)
        let userData = servMsg.data.userData[0];
        try {
            if (userData) {
                setuserdet(userData);
            } else {
                console.error('User data not found.');
                alert("No User Found")
            }
        } catch (error) {
            console.error('Error fetching data from the database:', error);
        }
    }

    return (
        <li>
            {showdialog && (
                <Model
                    props={props}
                    userdata={userdet}
                    onClose={() => setdialog(false)}
                />
            )}
            <a
                onClick={userdetail}
                className="group block overflow-hidden cursor-pointer">
                <img
                    src={showpic(props)}
                    alt=""
                    className="h-[250px] w-[500px] object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
                />
                <div className="relative bg-white pt-3">
                    <h3
                        className="text-2xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
                    >
                        {props.item_name}
                    </h3>
                </div>
            </a>
        </li>
    )
}