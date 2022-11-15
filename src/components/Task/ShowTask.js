function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ShowTask({taskItem,show}){
return(
    <>
       <ul className={classNames(show ? "block" : "hidden", "border border-green-400 m-4")}>
                                        <li>task name : {taskItem?.name}</li>
                                        <li>task amount : {taskItem?.amount}</li>
                                        <li>task active : {taskItem?.active}</li>
                                        <li>task complete : {taskItem?.complete}</li>
                                        <li>task tid : {taskItem?.tid}</li>
                                    </ul>
    </>
)
}