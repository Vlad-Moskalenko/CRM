import AddCompanyButton from './components/add-company-button';
import StatusLabel, { Status } from './components/status-lable';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <AddCompanyButton />
    </main>
  );
}
