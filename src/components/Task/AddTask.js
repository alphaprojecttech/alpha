export default function AddTask() {
    return (
        <>
            <form className="w-1/2 border flex flex-col space-y-3">
                <div className="mb-5">
                    <h1 className="text-4xl font-bold">Task Create Form</h1>
                </div>
                <div>
                    <h1>Task Name</h1>
                    <input type="text" className="border" name="" placeholder="Task Name" />       
                </div>
                <div>
                    <h1>Task Text</h1>
                    <input type="text" className="border" name="" placeholder="Task Text" />
                </div>
                <div className="border">
                    <h1>Task Type</h1>
                    <select name="" id="" className="border">
                        <option value="">Choose One</option>
                        <option value="">Development</option>
                        <option value="">Marketing</option>
                    </select>
                </div>
                <div className="border">
                    <h1>Deadline</h1>
                    <input type="date" className="border" name="" placeholder="Task Name" />
                </div>
                <div className="border">
                    <h1>Amount</h1>
                    <input type="number" className="border" name="" placeholder="Amount" />
                </div>
                <div className="border">
                    <h1>Upload Image</h1>
                    <input type="file" className="border" name="" placeholder="Task Name" />
                </div>
                <div className="border">
                    <input type="checkbox" name="" id="" /> Active
                </div>
                <div className="border">
                    <input type="checkbox" name="" id="" /> Complete
                </div>
                <div className="border">
                    <button className="bg-blue-200 px-2 py-1">Create Task</button>
                </div>
            </form>
        </>
    )
}