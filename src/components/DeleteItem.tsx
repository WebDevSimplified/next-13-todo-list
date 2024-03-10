"use client"

type DeleteItemProps = {
    deleteTodo: () => void
}

export function DeleteItem({deleteTodo} : DeleteItemProps) {
    return (
    <button
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          onClick={() => deleteTodo()}
        >
          Delete
    </button>
    )
}
