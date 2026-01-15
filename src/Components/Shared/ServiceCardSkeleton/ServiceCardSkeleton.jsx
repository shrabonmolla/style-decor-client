export default function ServiceCardSkeleton() {
  return (
    <div className="card bg-base-100 border border-[#f1e4e2] rounded-2xl overflow-hidden animate-pulse">
      <div className="w-full h-52 bg-gray-200"></div>

      <div className="p-5 space-y-3">
        <div className="w-24 h-4 bg-gray-200 rounded"></div>
        <div className="w-3/4 h-5 bg-gray-200 rounded"></div>
        <div className="w-full h-4 bg-gray-200 rounded"></div>

        <div className="flex justify-between mt-4">
          <div className="w-20 h-4 bg-gray-200 rounded"></div>
          <div className="w-16 h-4 bg-gray-200 rounded"></div>
        </div>

        <div className="w-full h-10 bg-gray-200 rounded-full mt-4"></div>
      </div>
    </div>
  );
}
