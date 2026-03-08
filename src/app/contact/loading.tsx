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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div className="space-y-8">
              <Skeleton className="h-16 w-3/4" />
              <Skeleton className="h-6 w-full" />
              
              <div className="space-y-6 pt-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <Skeleton className="w-12 h-12 rounded-full flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-6 w-32" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                ))}
              </div>

              <Skeleton className="w-full h-64 rounded-2xl" />
            </div>

            {/* Contact form */}
            <Skeleton className="h-[700px] rounded-3xl" />
          </div>
        </div>
      </main>
    </div>
  );
}
