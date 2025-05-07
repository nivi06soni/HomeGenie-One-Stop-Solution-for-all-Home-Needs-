import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ServiceCard from "@/components/service-card";
import AppointmentCard from "@/components/appointment-card";
import PostCard from "@/components/post-card";
import ProviderCard from "@/components/provider-card";
import { ServiceCategory, Appointment, CommunityPost, ServiceProvider } from "@shared/schema";
import { useAuth } from "@/hooks/use-auth";

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  // Fetch categories
  const { data: categories, isLoading: categoriesLoading } = useQuery<ServiceCategory[]>({
    queryKey: ["/api/categories"],
  });

  // Fetch appointments if authenticated
  const { data: appointments, isLoading: appointmentsLoading } = useQuery<Appointment[]>({
    queryKey: ["/api/appointments"],
    enabled: isAuthenticated,
  });

  // Fetch providers
  const { data: providers, isLoading: providersLoading } = useQuery<ServiceProvider[]>({
    queryKey: ["/api/providers"],
  });

  // Fetch community posts
  const { data: posts, isLoading: postsLoading } = useQuery<CommunityPost[]>({
    queryKey: ["/api/posts"],
  });

  return (
    <main className="flex-grow container mx-auto px-4 py-6 pb-20 md:pb-6">
      {/* Hero Section */}
      <section className="mb-8">
        <div className="rounded-xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Modern apartment interior" 
            className="w-full h-64 md:h-96 object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">
              {isAuthenticated 
                ? `Welcome back, ${user?.fullName.split(' ')[0]}` 
                : "Welcome to HomeGenie"}
            </h1>
            <p className="text-white text-sm md:text-base mb-4">
              {isAuthenticated 
                ? "Manage your apartment services and connect with neighbors" 
                : "Book appointments and connect with your apartment community"}
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/book">
                <Button className="bg-primary hover:bg-primary/90 text-white flex items-center">
                  <i className="ri-calendar-line mr-2"></i> Book Appointment
                </Button>
              </Link>
              <Link href="/community">
                <Button variant="outline" className="bg-white hover:bg-gray-100 text-primary flex items-center">
                  <i className="ri-team-line mr-2"></i> Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categoriesLoading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <Skeleton className="w-12 h-12 rounded-full mb-3" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))
          ) : (
            categories?.slice(0, 4).map((category) => (
              <ServiceCard key={category.id} category={category} isLink />
            ))
          )}
        </div>
      </section>

      {/* Upcoming Appointments (only show if authenticated) */}
      {isAuthenticated && (
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Upcoming Appointments</h2>
            <Link href="/history">
              <a className="text-primary font-medium hover:underline">View All</a>
            </Link>
          </div>
          
          {appointmentsLoading ? (
            Array(2).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-4 mb-4">
                <div className="flex items-start">
                  <Skeleton className="h-12 w-12 rounded-lg mr-4" />
                  <div className="flex-grow">
                    <Skeleton className="h-6 w-40 mb-2" />
                    <Skeleton className="h-4 w-full max-w-md mb-2" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              </div>
            ))
          ) : appointments && appointments.length > 0 ? (
            appointments.slice(0, 2).map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <p className="text-gray-500 mb-4">You don't have any upcoming appointments</p>
              <Link href="/book">
                <Button>Book an Appointment</Button>
              </Link>
            </div>
          )}
        </section>
      )}

      {/* Service Providers */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Top Service Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {providersLoading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <Skeleton className="w-full h-40" />
                <div className="p-4">
                  <Skeleton className="h-6 w-40 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-8 w-full rounded-lg" />
                </div>
              </div>
            ))
          ) : (
            providers?.slice(0, 3).map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))
          )}
        </div>
      </section>

      {/* Community Preview */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Community</h2>
          <Link href="/community">
            <a className="text-primary font-medium hover:underline">View All</a>
          </Link>
        </div>
        
        {postsLoading ? (
          <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <div className="flex space-x-3 mb-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div>
                <Skeleton className="h-5 w-32 mb-1" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
            <Skeleton className="h-20 w-full mb-4" />
          </div>
        ) : posts && posts.length > 0 ? (
          posts.slice(0, 1).map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <p className="text-gray-500 mb-4">No community posts yet</p>
            <Link href="/community">
              <Button>Join the Community</Button>
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
