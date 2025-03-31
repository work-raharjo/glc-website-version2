import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section Skeleton */}
      <section className="relative h-[60vh] flex items-center justify-center bg-muted animate-pulse">
        <div className="container mx-auto px-4 text-center">
          <div className="h-16 w-3/4 mx-auto bg-muted-foreground/20 rounded mb-4" />
          <div className="h-8 w-1/2 mx-auto bg-muted-foreground/20 rounded" />
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="h-10 w-48 bg-muted-foreground/20 rounded mb-8" />
            <div className="h-24 w-full bg-muted-foreground/20 rounded mb-12" />
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="h-8 w-40 bg-muted-foreground/20 rounded mb-6" />
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-6 w-full bg-muted-foreground/20 rounded" />
                  ))}
                </div>
              </div>
              <div>
                <div className="h-8 w-48 bg-muted-foreground/20 rounded mb-6" />
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-6 w-full bg-muted-foreground/20 rounded" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="h-10 w-64 mx-auto bg-muted-foreground/20 rounded mb-8" />
          <div className="h-8 w-96 mx-auto bg-muted-foreground/20 rounded mb-8" />
          <div className="h-12 w-40 mx-auto bg-muted-foreground/20 rounded" />
        </div>
      </section>

      <Footer />
    </main>
  );
} 