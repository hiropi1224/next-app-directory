import { Suspense } from 'react'
import NotesList from './components/notes-list'
import TimerCounter from './components/timer-counter'
import Spinner from './components/spinner'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Next.js app directory</p>
        <Suspense fallback={<Spinner />}>
          {/* @ts-expect-error Async Server Component */}
          <NotesList />
        </Suspense>
        <TimerCounter />
      </div>
    </main>
  )
}
