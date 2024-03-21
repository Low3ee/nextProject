import DashboardSkeleton from '../../ui/skeletons';
export default function Loading() {
  return (
    <>
      <h1 className="grid place-items-center font-bold opacity-40">
        Loading Dashboard
      </h1>
      <DashboardSkeleton />
    </>
  );
}
