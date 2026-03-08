import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Navbar placeholder */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
        <div className="container mx-auto">
          <Skeleton className="h-16 w-full rounded-2xl" />
        </div>
      </div>

      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-16 text-center space-y-4">
            <Skeleton className="h-16 w-64 mx-auto" />
            <Skeleton className="h-6 w-full mx-auto" />
            <Skeleton className="h-12 w-96 mx-auto rounded-full" />
          </div>

          {/* Featured post */}
          <Skeleton className="h-96 rounded-3xl mb-20" />

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-96 rounded-2xl" />
            ))}
          </div>

          {/* Newsletter */}
          <Skeleton className="h-64 rounded-3xl mt-24" />
        </div>
      </main>
    </div>
  );
}
