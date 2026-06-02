export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="flex">
        
        {/* Sidebar */}
        <aside className="w-64 h-screen bg-zinc-900 p-6">
          <h2 className="text-xl font-bold">Dashboard</h2>

          <nav className="mt-8 space-y-4">
            <p>Home</p>
            <p>Courses</p>
            <p>Activity</p>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-6">
          <div className="grid grid-cols-3 gap-4">

            <div className="col-span-3 bg-zinc-800 rounded-2xl p-6">
              <h1 className="text-3xl font-bold">
                Welcome Back 👋
              </h1>
              <p className="text-zinc-400">
                Learning streak: 12 days
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-6">
              Course Card 1
            </div>

            <div className="bg-zinc-800 rounded-2xl p-6">
              Course Card 2
            </div>

            <div className="bg-zinc-800 rounded-2xl p-6">
              Activity Tile
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}