import StatusLabel, { Status } from './components/status-lable';
import { headers } from 'next/headers';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
    </main>
  );
}
