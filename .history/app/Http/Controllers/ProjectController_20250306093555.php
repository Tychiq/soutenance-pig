<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ProjectResource;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Project::query();

        $sortField =request("sort_field", 'created_at');
        $sortDirection =request("sort_direction", 'desc');

        if(request("name")) {
            $query->where("name", "like", "%". request("name"). "%");
        }
        if(request("status")) {
            $query->where("status", request("status"));
        }

        $projects = $query->orderBy($sortField, $sortDirection)
        ->paginate(perPage: 10)
        ->onEachSide(1);

        return inertia("Project/index", [
            "projects" => ProjectResource::collection($projects),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Project/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile */
        $image = $data['image'] ?? null;
            $data['created_by'] = Auth::id();
            $data['updated_by'] = Auth::id();
        if ($image instanceof \Illuminate\Http\UploadedFile) {
            $data['image_path'] = $image->store('project/' . Str::random(), 'public');
        }
        Project::create($data);

        return to_route('project.index')
            ->with('success', 'La soutenance a été créé');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        
        return inertia('Project/Show', [
            'project' => new ProjectResource($project),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return inertia('Project/Edit', [
            'project' => new ProjectResource($project),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        $data['updated_by'] = Auth::id();
        if ($image) {
            if ($project->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($project->image_path));
            }
            $data['image_path'] = $image->store('project/' . Str::random(), 'public');
        }
        $project->update($data);

        return to_route('project.index')
            ->with('success', "La Soutenance \"$project->name\" a été modifié");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $name = $project->name;
        $project->delete();
        if ($project->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($project->image_path));
        }
        return to_route('project.index')
            ->with('success', "Project \"$name\" was deleted");
    }
}
