import NotesList from './components/notes-list'

const Page = () => {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Next.js app directory</p>
        {/* @ts-expect-error Async Server Component */}
        <NotesList />
      </div>
    </main>
  )
}

export default Page
