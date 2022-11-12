export default function AddTask() {
    return (
        <>
            <form className="w-1/2 border">
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
                    <input type="number" className="border" name="" placeholder="Task Name" />
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
            </form>
        </>
    )
}