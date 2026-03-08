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
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Skeleton className="h-16 w-16 rounded-full mx-auto" />
            <Skeleton className="h-16 w-96 mx-auto" />
            <Skeleton className="h-6 w-full mx-auto" />
          </div>

          {/* FAQ accordion */}
          <Skeleton className="h-[600px] rounded-3xl max-w-3xl mx-auto" />

          {/* CTA */}
          <div className="max-w-xl mx-auto mt-16 text-center space-y-4">
            <Skeleton className="h-6 w-48 mx-auto" />
            <Skeleton className="h-8 w-64 mx-auto" />
          </div>
        </div>
      </main>
    </div>
  );
}
