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
            
        }
    }
    return (
        <form onSubmit={handleAdd}>
            <input
                type="text"
                name="body"
                placeholder="📌 What's on the agenda?">
                </input>
        </form>
    );
}
