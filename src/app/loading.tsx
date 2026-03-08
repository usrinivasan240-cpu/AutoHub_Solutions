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

      {/* Hero section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <Skeleton className="h-8 w-48 rounded-full" />
              <Skeleton className="h-24 w-3/4" />
              <Skeleton className="h-20 w-full" />
              <div className="flex gap-4">
                <Skeleton className="h-14 w-48 rounded-lg" />
                <Skeleton className="h-14 w-48 rounded-lg" />
              </div>
              <div className="flex items-center gap-6 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="w-10 h-10 rounded-full" />
                  ))}
                </div>
                <Skeleton className="h-12 w-40" />
              </div>
            </div>
            <div className="lg:col-span-5 h-[500px] lg:h-[700px]">
              <Skeleton className="h-full w-full rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-80 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Skeleton className="h-16 w-3/4" />
              <Skeleton className="h-24 w-full" />
              <div className="space-y-4 pt-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Skeleton className="h-6 w-6 rounded-full flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-6 w-48" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Skeleton className="aspect-square rounded-3xl" />
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <Skeleton className="h-80 rounded-3xl" />
        </div>
      </section>

      {/* Footer placeholder */}
      <footer className="border-t pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
