export default function TableHeading({sort_field, sort_direction}) {
    return (
        <th onClick={(e) => sortChanged('id')}>
                                             <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                            ID
                                            <div>
                                                <ChevronUpIcon 
                                                    className={
                                                        "w-4" + 
                                                        (sort_field === "id" && sort_direction === "asc" 
                                                            ? "text-white" : ""
                                                        )} 
                                                />
                                                <ChevronDownIcon 
                                                     className={
                                                        "w-4 -mt-2 " + 
                                                        (sort_field === "id" && sort_direction === "desc" 
                                                            ? "text-white" : ""
                                                        )} 
                                                />
                                            </div>
                                            </div>
                                        </th>
    )
}