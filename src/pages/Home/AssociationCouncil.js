import React from "react";

import MarkdownView from 'react-showdown';
import UserCard from "../../components/UserCard";

import Secondary from "../../components/Button/secondary";


function AssociationCouncil() {

    const data = {
        title: "Association Council",
        members: [
            {
                id: 1,
                photo: '',
                name: "Sample Name",
                position: "position"
            },
            {
                id: 2,
                photo: '',
                name: "SOme name",
                position: "position"
            },
            {
                id: 3,
                photo: '',
                name: "SOme name",
                position: "position"
            },
            {
                id: 4,
                photo: '',
                name: "SOme name",
                position: "position"
            },
        ]
    }



    return (<div className="py-[50px] bg-slate-100">
        <div className="container mx-auto">
            <div className="text-[40px] font-bold text-red-800">
                <MarkdownView markdown={data?.title} />
            </div>
            <div className="pt-[50px]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-[30px]">
                    {data?.members?.map(item =>
                        <UserCard key={item.id} item={item} />
                    )}
                </div>
                    <div className="pt-[50px] w-full ">
                        <Secondary className="max-w-[250px] mx-auto" label="View more" />
                    </div>
            </div>
        </div>
    </div>);
}

export default AssociationCouncil;