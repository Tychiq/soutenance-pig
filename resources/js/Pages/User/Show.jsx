import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
export default function Show({ auth, user}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          {`User "${user.name}"`}
        </h2>
      }
    >
      <Head title={`Utilisateur "${user.name}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div>
              <img
                src={user.image_path}
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">User ID</label>
                    <p className="mt-1">{user.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">User Noms</label>
                    <p className="mt-1">{user.name}</p>
                  </div>
                  
                  <div className="mt-4">
                    <label className="font-bold text-lg">Créez par</label>
                    <p className="mt-1">{user.createdBy.name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-bold text-lg">Date</label>
                    <p className="mt-1">{user.due_date}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Date Creation</label>
                    <p className="mt-1">{user.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Modifiez par</label>
                    <p className="mt-1">{user.updatedBy.name}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="font-bold text-lg">User Description</label>
                <p className="mt-1">{user.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </AuthenticatedLayout>
  );
}