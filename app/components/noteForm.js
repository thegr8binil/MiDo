import db from "../appwrite/database"
export default function NoteForm({setNotes}) {

    const handleAdd =async (e)=>{
        e.preventDefault()
        const noteBody = e.target.body.value

        if(noteBody === "") return

        try {
            const payload = {body:noteBody}
            const response = await db.tasks.create(payload);
            setNotes((prevState)=> [response,...prevState]);
            e.target.reset()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleAdd}>
            <input
                type="text"
                name="body"
                placeholder="📌 What's on the agenda?"
                className="w-full p-2 pr-20 transition duration-200 ease-in-out border rounded-md shadow-sm bg-primary border-textSecondary mb-7 focus:outline-none focus:ring-2 focus:border-borderPrimary text-textPrimary">
                </input>
        </form>
    );
}
